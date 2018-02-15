import { Component, OnInit } from '@angular/core';
import {UploadEvent, UploadFile} from "ngx-file-drop";

@Component({
  selector: 'app-clsft',
  templateUrl: './clsft.component.html',
  styleUrls: ['./clsft.component.css']
})
export class ClsftComponent implements OnInit {

   public files: UploadFile[] = [];

  constructor() { }

  ngOnInit() {
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const file of event.files) {
      file.fileEntry.file(info => {
        console.log(info);
      });
      console.log(file.fileEntry);
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }

}
