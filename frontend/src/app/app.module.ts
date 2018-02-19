import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ClsftComponent } from './clsft/clsft.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './/app-routing.module';

import { FileDropModule } from 'ngx-file-drop';
import { PapaParseGlobalConfig,PapaParseModule } from 'ngx-papaparse';

@NgModule({
  declarations: [
    AppComponent,
    ClsftComponent,
    LandingComponent
  ],
  imports: [NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FileDropModule,
    PapaParseModule
  ],
  providers: [
    {
      provide: 'PapaParseGlobalConfig',
      useValue: <PapaParseGlobalConfig> {
        workerScriptPath: 'assets/papaparse.min.js'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
