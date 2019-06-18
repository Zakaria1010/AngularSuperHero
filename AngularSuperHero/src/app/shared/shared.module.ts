import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';
import { SampleComponent } from './crud/sample/sample.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

  declarations: [CrudComponent, SampleComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [CrudComponent, SampleComponent]
})
export class SharedModule { }
