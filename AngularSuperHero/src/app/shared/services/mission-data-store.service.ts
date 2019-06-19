import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class MissionDataStoreService {

  constructor() { }

  public missions: BehaviorSubject<Mission[]> = new BehaviorSubject([]);
  public currentMissions = this.missions.asObservable();


  public updateMissions(newMissions: Mission[]){
    this.missions.next(newMissions);
  }
}
