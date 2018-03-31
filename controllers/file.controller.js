const path = require("path");
const xlsx = require("xlsx");
const bodyParser = require("body-parser");
const fs = require("fs");

const survey = require("../models/survey.model");
const Question = survey.questionModel;
const Answer = survey.answerModel;

const textType = "Text";
const choiceType = "Choice";
const ratingType = "Rating";

const uploadFile = (req, res) => {
  if (req.body.data) {
    //const userId = req.body.userId;
    const enterpriseId = req.body.entId;
    const employeeId = req.body.employeeId;
    const data = req.body.data;
    const fileLocation = path.join(
      __dirname,
      `../files/${enterpriseId}/${req.body.fileName}`
    );

    //Checking for directory existence, if not , creating the directory
    const dirname = path.dirname(fileLocation);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname);
    }

    //Decoding the base64 string directly using writeFile into a csv file
    const filePromise = new Promise((resolve, reject) => {
      fs.writeFile(fileLocation, data, { encoding: "base64" }, err => {
        if (err) {
          reject(err);
        }
        let fileData = xlsx.readFile(fileLocation);
        resolve(fileData);
      });
    })
      .then(data => {
        const sheet = data.Sheets.Sheet1;
        const questions = [];
        let i = 2;
        if (sheet[`B2`]) {
          let type = sheet[`B2`].v;
          try {
            while (type) {
              let title = sheet[`C${i}`].v;
              let section = sheet[`A${i}`].v;
              let options =
                type === choiceType
                  ? ["D", "E", "F", "G", "H"].map(a => {
                      return {
                        option: sheet[`${a}${i}`].v
                      };
                    })
                  : undefined;

              let ratings =
                type === ratingType
                  ? ["I", "J", "K", "L", "M"].map(b => {
                      return {
                        field: sheet[`${b}${i}`].v
                      };
                    })
                  : undefined;

              let newQuestion = {};
              switch (type) {
                case choiceType:
                  newQuestion = {
                    employeeId,
                    enterpriseId,
                    section,
                    type,
                    title,
                    options
                  };
                  break;

                case ratingType:
                  newQuestion = {
                    employeeId,
                    enterpriseId,
                    section,
                    type,
                    title,
                    ratings
                  };
                  break;

                case textType:
                  newQuestion = {
                    employeeId,
                    enterpriseId,
                    section,
                    type,
                    title
                  };
              }

              questions.push(newQuestion);

              i++;
              if (sheet[`B${i}`]) {
                type = sheet[`B${i}`].v;
              } else {
                type = "";
              }
            }
          } catch (err) {
            if (err) {
              throw err;
            }
          }

          //the question being uploaded into database using the mongoose model
          Question.create(questions, (err, questionArray) => {
            if (err) throw err;
            //console.log(Q);
            res.status(201).json({ message: "Questions uploaded" });
          });
        }
      })
      .catch(err => {
        if (err) {
          throw err;
        }
      });
  }
};

const getQuestions = (req, res) => {
  const employeeId = req.params.employeeId;
  const enterpriseId = req.params.enterpriseId;

  Question.find({ enterpriseId, employeeId }, (err, questionArray) => {
    if (err) {
      throw err;
    }

    let sections = [];
    sections = questionArray.map(question => {
      if (sections.indexOf(question.section) === -1) {
        return question.section;
      }
    });

    const questions = {};
    sections.forEach(section => {
      questions[section] = [];
    });
    questionArray.forEach(question => {
      let questionEdited = {
        questionId: question._id,
        employeeId: question.employeeId,
        enterpriseId: question.enterpriseId,
        type: question.type,
        title: question.title
      };
      switch (question.type) {
        case choiceType:
          questionEdited.options = question.options.map(tempOption => {
            return {
              option: tempOption.option
            };
          });
          break;

        case ratingType:
          questionEdited.ratings = question.ratings.map(rating => {
            return {
              field: rating.field
            };
          });
          break;
      }

      let sectionIndex = sections.indexOf(question.section);
      if (sectionIndex > -1) {
        questions[sections[sectionIndex]].push(questionEdited);
      }
    });
    res.send(questions);
  });
};

const uploadAnswer = (req, res) => {
  const questionId = req.body.questionId;
  const revieweeId = req.body.revieweeId;

  Question.findById(questionId, (err, question) => {
    if (err) {
      throw err;
    }

    const enterpriseId = question.enterpriseId;
    const type = question.type;
    const section = question.section;
    const title = question.title;
    const options = question.options;
    const ratings = question.ratings;

    let answer = {};

    switch (type) {
      case textType:
        let text = req.body.text;
        answer = {
          revieweeId,
          enterpriseId,
          type,
          section,
          title,
          text
        };
        break;

      case choiceType:
        let choice = req.body.choice;
        answer = {
          revieweeId,
          enterpriseId,
          type,
          section,
          title,
          options,
          choice
        };
        break;

      case ratingType:
        ratings = req.body.ratings;
        answer = {
          revieweeId,
          enterpriseId,
          type,
          section,
          title,
          ratings
        };
        break;
    }

    Answer.create(answer, (err, ans) => {
      if (err) {
        throw err;
      }
      res.json({ status: "Answer uploaded" });
      //console.log(ans);
    });
  });
};

const getAnswers = (req, res) => {
  const revieweeId = req.params.revieweeId;
  if (revieweeId) {
    Answer.find({ revieweeId }, (err, answerArray) => {
      if (err) throw err;

      let sections = [];
      sections = answerArray.map(answer => {
        if (sections.indexOf(answer.section) === -1) {
          return answer.section;
        }
      });

      let answers = {};
      sections.forEach(section => {
        answers[section] = [];
      });

      answerArray.forEach(answer => {
        let answerEdited = {
          title: answer.title,
          options: answer.options,
          choice: answer.choice
        };

        let sectionIndex = sections.indexOf(answer.section);
        if (sectionIndex > -1) {
          answers[sections[sectionIndex]].push(answerEdited);
        }
      });

      res.json(answers);
    });
  }
};

module.exports = { uploadFile, getQuestions, uploadAnswer, getAnswers };
