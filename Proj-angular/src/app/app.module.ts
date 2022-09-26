import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { AppComponent } from './app.component';   
import { ModalModule } from 'ngx-bootstrap/modal';  
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionComponentComponent } from './question-component/question-component.component';
import { AnswerComponentComponent } from './answer-component/answer-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponentComponent,
    AnswerComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),  
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
