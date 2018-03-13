import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { AnswerService } from '../services/answer.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  response;
  sections = [];
  questions = [];
  answers ={};

  constructor(private questionService: QuestionService, private answerService: AnswerService) {
   }; 
  

  ngOnInit (){
    this.questionService.getQuestions().subscribe(response =>{
      for(let section in response) {
        this.sections.push(section);
        this.questions.push(response[section]);
        this.answers[section] = [];
      }
      console.log(response);
      //console.log(this.sections);
      //console.log(this.questions);
      //console.log(this.answers);
    },
    error => {
      console.log(error);
    }
    
  );
    
  }

  isAnswered(questionId,section){
    let i = 0;
    let status = false;

    for(let answer of this.answers[section]) {  
      if(answer.questionId === questionId) {
        status = true;
        break;
      }
      i++;
    }
    if(status) return i; else return -1;
  }

  onChange(radioEvent, question, section) {

    let choiceArray = ['a','b','c','d','e'];
    let choice: String;
    let index = 0;

    //loop to find the choice from the option value
    for(let optionObject of question.options){
      if(optionObject.option === radioEvent.value){
        choice = choiceArray[index];
        break;
      }
      index++;
    }

    //check to see if the question is already answered
    let questionIndex = this.isAnswered(question.questionId,section);
    if(questionIndex>-1){
      this.answers[questionIndex].choice = choice;
    } else if(questionIndex===-1) {
      this.answers[section].push({
        questionId: question.questionId,
        choice: choice,
        //revieweeId and reviewerId to be attached to the answer
      })
    }
    console.log(this.answers);
  }

  onSubmit(section){
      this.sendAnswers(this.answers[section]);
  }
  

    private sendAnswers(answers) {
        this.answerService.postAnswers(answers);
    }
}
