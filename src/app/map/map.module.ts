import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HowToComponent } from '../how-to/how-to.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "how-to", component: HowToComponent}
    ])
  ],
  declarations: [
    HowToComponent
  ]
})
export class MapModule { }
