import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  enterpriseId;
  fileName;
  data;
  progressBar = true;
  constructor(private service: QuestionService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    let fileInput = document.getElementById('file-input');
    let customInput = document.getElementById('custom-file-input');

    customInput.addEventListener('click',()=>{
      fileInput.click();
      //console.log(fileInput);
    });

    fileInput.addEventListener('change',(event) =>{
      this.fileName = (event.target as HTMLInputElement).value.replace(/^.*[\\\/]/, '')
      customInput.innerText = this.fileName;    
    });
  }
  encodeFile(){
    let doc = document.querySelector('input[type=file]') as HTMLInputElement;
    let file = doc.files[0];
    
    let dataPromise = new Promise((resolve,reject) =>{

      let reader = new FileReader() as any;
      reader.onload = function (event) {
        resolve(reader.result.split(',')[1]);
      };
      reader.onerror = function (error) {
        reject(error);
        console.log('Error: ', error);
      };
  
      reader.readAsDataURL(file);
    }).then(base64 =>{
        this.data = base64;
    })        
  }

  onUpload() {
    let options = {
      entId: this.enterpriseId,
      data: this.data,
      fileName: this.fileName
    }

    this.service.uploadQuestions(options).subscribe(response =>{
      console.log(response);
      if(response.status === 201) {
        this.snackBar.open('Questions uploaded!','OK',{
          duration: 2000
        });
      } else {
        this.snackBar.open('Something went wrong','OK',{
          duration: 2000
        });
      }
      this.enterpriseId = '';
      this.data = '';
      this.fileName = '';
      document.getElementById('custom-file-input').innerText = 'Choose file';
  });
    //console.log(this.enterpriseId,this.fileName,this.data);
  }

}
