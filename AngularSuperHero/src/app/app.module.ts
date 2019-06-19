import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { RouterModule } from '@angular/router';
import { MissionComponent } from './mission/mission.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app.routing.module';
import { NgbModule,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    MissionComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule

  ],
  entryComponents: [MissionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
