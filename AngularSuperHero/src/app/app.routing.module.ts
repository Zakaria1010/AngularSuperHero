import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionComponent } from './mission/mission.component';
import { HeroComponent } from './hero/hero.component';
import { HeroResolverService } from './shared/services/hero-resolver.service';
import { MissionResolverService } from './shared/services/mission-resolver.service';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'heroes',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroComponent,
        resolve : {
          missions: HeroResolverService
        }
    },
    {
        path: 'missions', component: MissionComponent,
        resolve : {
          missions: MissionResolverService
        }
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
