import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes : Routes = [
  // {path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: []
})

export class AppRoutingModule { }
