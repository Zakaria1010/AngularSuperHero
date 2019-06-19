import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';
import { SampleComponent } from './crud/sample/sample.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  declarations: [CrudComponent, SampleComponent],
  imports: [
  CommonModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [CrudComponent, SampleComponent]
})
export class SharedModule { }
