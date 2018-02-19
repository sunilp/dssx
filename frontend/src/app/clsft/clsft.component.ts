import { Component, OnInit } from '@angular/core';
import {UploadEvent, UploadFile} from 'ngx-file-drop';
import { PapaParseService, PapaParseResult } from 'ngx-papaparse';

@Component({
  selector: 'app-clsft',
  templateUrl: './clsft.component.html',
  styleUrls: ['./clsft.component.css']
})
export class ClsftComponent implements OnInit {

   public files: UploadFile[] = [];
   public headers: string[] = ['"z"','"b"'];
   
  constructor(private papa: PapaParseService) { }

  ngOnInit() {
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    //this.headers= ['a','b','m'];
    for (const file of event.files) {
      file.fileEntry.file((fileData) => {
       this.papa.parse(fileData, =>{
        worker: true,
        step: (row, parser) =>{
          //console.log("data");
          //console.log(row.data[0]);
          //console.log("header data is "+headers);
         // this.headers = ["0","b","m"];
 //         let datad[]=row.data[0];
          this.headers=row.data[0];
          console.log(row.data[0]);
          
          console.log("header data is "+this.headers);
          parser.abort();
        },
        complete: (result,file)=>{
        }
        });
      });
      //console.log(fileData);
      console.log(file.fileEntry);
      console.log(this.headers);
    }
  }

  public cbmethod(results){
    console.log("In cbp method"+this.headers);
    
    console.log(results);
       
  }
  public fileOver(event){
    console.log(event);
  }

  public parseFile(file){}

  public fileLeave(event){
    console.log(event);
  }

}
