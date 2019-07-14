

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MissiondetailComponent } from './missiondetail/missiondetail.component';
import { MissionComponent } from './mission.component';


const missionRoutes: Routes = [
  {
    path: '',
    component: MissionComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(missionRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MissionRoutingModule {
}   
