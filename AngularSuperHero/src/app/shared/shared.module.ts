import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';
import { SampleComponent } from './crud/sample/sample.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MissionDataStoreService } from './services/mission.data-store.service';
import { HttpClientModule } from '@angular/common/http';
import { MissionComponent } from '../mission/mission.component';

@NgModule({

  declarations: [CrudComponent, SampleComponent],
  imports: [
  CommonModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MissionDataStoreService],
  exports: [CrudComponent, SampleComponent]
})
export class SharedModule { }
