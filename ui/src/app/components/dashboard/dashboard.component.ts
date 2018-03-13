import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  enterpriseId;
  fileName;
  data;

  constructor(private service: QuestionService) { }

  ngOnInit() {
    let fileInput = document.getElementById('file-input');
    let customInput = document.getElementById('custom-file-input');

    customInput.addEventListener('click',()=>{
      fileInput.click();
      //console.log(fileInput);
    });

    fileInput.addEventListener('change',(event) =>{
      customInput.innerText = (event.target as HTMLInputElement).value.replace(/^.*[\\\/]/, '');
      //console.log(event.target.value);
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

    this.service.uploadQuestions(options);
    //console.log(this.enterpriseId,this.fileName,this.data);
  }

}
