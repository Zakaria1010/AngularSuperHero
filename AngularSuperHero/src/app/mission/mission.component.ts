import { Component, OnInit } from '@angular/core';
import { Mission } from '../shared/models/mission';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataModel } from '../shared/models/data.model';
import { MissionDataStoreService } from '../shared/services/mission.data-store.service';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../shared/services/mission.service';

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


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private missionService: MissionService) { }

  ngOnInit() {
    this.missionService.getAll().subscribe(res => this.missions = res)
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
