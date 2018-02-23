import { Component, OnInit } from '@angular/core';
import {UploadEvent, UploadFile} from "ngx-file-drop";
import {PapaParseService} from "ngx-papaparse";
import {CsvFile} from "./CsvFile";

@Component({
  selector: 'app-clsft',
  templateUrl: './clsft.component.html',
  styleUrls: ['./clsft.component.css']
})
export class ClsftComponent implements OnInit {

   public files: UploadFile[] = [];
   public csvfile: any={headers:null};

  constructor(private papa: PapaParseService) { }

  ngOnInit() {
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    let that = this;
    for (const file of event.files) {
      file.fileEntry.file(info => {
        console.log(info, typeof(file.fileEntry),file.fileEntry);


        this.papa.parse(info,{
            preview:1,
            complete: (results, file) => {
                console.log('Parsed: ', results, file);

                this.csvfile.filename = info.name;
                this.csvfile.headers = results.data[0];


                console.log('fff', this.csvfile);

            }
        });

      });

    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }

}
