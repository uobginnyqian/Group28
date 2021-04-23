import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PresentationComponent} from './presentation/presentation.component';
import {QuizComponent} from './quiz/quiz.component';
import {GameComponent} from './game/game.component';
import {EndComponent} from './end/end.component';

const routes: Routes = [
  {path: 'quiz', component: QuizComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'game', component: GameComponent},
  {path: 'end', component: EndComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
