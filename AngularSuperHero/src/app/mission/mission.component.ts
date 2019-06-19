import { Component, OnInit, Input } from '@angular/core';
import { Mission } from '../shared/models/mission';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataModel } from '../shared/models/data.model';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../shared/services/mission.service';
import { HeroService } from '../shared/services/hero.service';
import { MissionDataStoreService } from '../shared/services/mission-data-store.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  @Input()
  missions: Mission[];

  missionForm: FormGroup;

  mission = new Mission();

  missionsModel: DataModel[];  

  constructor(private fb: FormBuilder, private missionDataStore: MissionDataStoreService) { }

  ngOnInit() {
    this.missionDataStore.currentMissions.subscribe(res => this.missions = res);
    this.missionForm = this.fb.group({
      missionName: ['', Validators.required],
      completed: '',
      deleted: ''
    });

    this.missionsModel = [
      new DataModel('missionName','Mission Name','string',false,[]),
      new DataModel('completed','Completed','boolean',false,[]),
      new DataModel('deleted','Deleted','boolean',false,[])
    ]
  }

}
