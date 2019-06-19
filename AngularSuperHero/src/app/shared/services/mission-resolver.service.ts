import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MissionService } from './mission.service';


@Injectable({
  providedIn: 'root'
})
export class MissionResolverService implements Resolve<any> {

  constructor(private missionService: MissionService) { }
  resolve(){
    return this.missionService.getAll();
  }
}
