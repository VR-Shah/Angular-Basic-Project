import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponentComponent } from './answer-component/answer-component.component';
import { QuestionComponentComponent } from './question-component/question-component.component';

const routes: Routes = [
  { path: '',component:QuestionComponentComponent },
  { path:'viewanswer',component:AnswerComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
