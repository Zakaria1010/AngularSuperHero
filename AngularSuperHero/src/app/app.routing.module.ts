import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionComponent } from './mission/mission.component';
import { HeroComponent } from './hero/hero.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'heroes'
    },
    {
        path: 'heroes',
        component: HeroComponent
    },
    {
        path: 'missions',
        component: MissionComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {
    
}