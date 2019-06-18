import { Component, OnInit } from '@angular/core';
import { Mission } from '../shared/models/mission';
import { FormGroup } from '@angular/forms';
import { DataModel } from '../shared/models/data.model';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {


  missions: Mission[];

  missionForm: FormGroup;

  mission = new Mission();

  missionsModel: DataModel[];

  constructor() { }

  ngOnInit() {
  }

}
