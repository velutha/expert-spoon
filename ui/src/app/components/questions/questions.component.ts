import { Component, OnInit } from "@angular/core";
import { QuestionService } from "../../services/question.service";
import { AnswerService } from "../../services/answer.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {
  errorMessage;
  sections = [];
  questions = [];
  answers = {};

  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.questionService.getQuestions().subscribe(
      response => {
        //console.log(Object.keys(response.body).length);
        if (
          response.status === 200 &&
          Object.keys(response.body).length !== 0
        ) {
          for (let section in response.body) {
            this.sections.push({ section: section, show: false });
            this.questions.push(response.body[section]);
            this.answers[section] = [];
          }
          //console.log(this.questions);
          //console.log(this.sections);
          //initialising the first section to show on the questions page
          this.sections[0].show = true;
        } else {
          this.errorMessage = "Oops..Something went wrong!";
        }
      },
      error => {
        //console.log(error);
        switch (error.status) {
          case 404:
            this.errorMessage = "Questions not found";
            break;
          default:
            this.errorMessage = "Oops..Something went wrong!";
        }
      }
    );
  }

  isAnswered(questionId, section) {
    let i = 0;
    let status = false;

    for (let answer of this.answers[section]) {
      if (answer.questionId === questionId) {
        status = true;
        break;
      }
      i++;
    }
    if (status) return i;
    else return -1;
  }

  onChange(radioEvent, question, section) {
    let choiceArray = ["a", "b", "c", "d", "e"];
    let choice: String;
    let index = 0;

    //loop to find the choice from the option value
    for (let optionObject of question.options) {
      if (optionObject.option === radioEvent.value) {
        choice = choiceArray[index];
        break;
      }
      index++;
    }

    //check to see if the question is already answered
    let questionIndex = this.isAnswered(question.questionId, section);
    if (questionIndex > -1) {
      this.answers[section][questionIndex].choice = choice;
    } else if (questionIndex === -1) {
      this.answers[section].push({
        questionId: question.questionId,
        choice: choice
        //revieweeId and reviewerId to be attached to the answer
      });
    }
    //console.log(this.answers);
  }

  onSubmit(section, sectionIndex) {
    //let sectionIndex = this.sections.indexOf({ section: section, show: true });

    let questionCount = this.questions[sectionIndex].length;
    if (this.answers[section].length === questionCount) {
      this.sendAnswers(this.answers[section]);
      this.sections.forEach(section => {
        section.show = false;
      });

      this.sections[sectionIndex + 1].show = true;
    } else {
      this.snackBar.open(
        "Please answer all the questions before submitting",
        "Ok",
        {
          duration: 3000
        }
      );
    }
  }

  private sendAnswers(answers) {
    this.answerService.postAnswers(answers);
  }

  onSkip(sectionIndex) {
    this.sections.forEach(section => {
      section.show = false;
    });

    this.sections[sectionIndex + 1].show = true;
  }
}
