import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { HeroComponent } from './hero.component';


const heroRoutes: Routes = [
  {
    path: '',
    component: HeroComponent
  },
  {
    path: ':heroId',
    component: HerodetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class HeroRoutingModule {
}
