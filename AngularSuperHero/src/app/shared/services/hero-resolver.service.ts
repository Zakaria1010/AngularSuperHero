import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';
import { Resolve } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HeroResolverService  implements Resolve<any>{

  constructor(private heroService:HeroService){

  }
  resolve(){
    return this.heroService.getAll();
  }
}
