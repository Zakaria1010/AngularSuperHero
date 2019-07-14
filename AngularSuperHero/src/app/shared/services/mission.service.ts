import { Injectable, OnInit } from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { HeroDataStoreService } from './hero-data-store.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionService extends CrudService  {
  
constructor (private heroDataStoreService : HeroDataStoreService, http: HttpClient ) { 
  super(http);
  this.heroDataStoreService.currentHeroId.subscribe(res => {
    console.log("test from mission service", res)
    this.url = `${"/heroes/"}${res}${"/missions"}`;
    console.log(this.url)
  })
}

 

}
