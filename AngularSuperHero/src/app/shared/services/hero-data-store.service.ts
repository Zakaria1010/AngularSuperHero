import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroDataStoreService {
  public heroId: BehaviorSubject<String> = new BehaviorSubject("");
  public currentHeroId = this.heroId.asObservable();

  public updateHeroId(newId: String){
    console.log("newId", newId)
    this.heroId.next(newId);
  }
}
