import { Component, OnInit, Input, IterableDiffers } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from '../crud.service';
import { DataModel } from '../../models/data.model';
import { MissionComponent } from 'src/app/mission/mission.component';
import { MissionDataStoreService } from '../../services/mission-data-store.service';
import { HeroDataStoreService } from '../../services/hero-data-store.service';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  data: any;

  @Input()
  service: CrudService;

  @Input()
  initItem: any;

  @Input()
  initForm: FormGroup;

  @Input()
  dataModelList: DataModel[];

  crudForm: FormGroup;

  operation: string = 'add';

  selectedItem: any;

  dataType: string;

  constructor(private fb: FormBuilder,  private modalService: NgbModal, private missionData: MissionDataStoreService, private heroData : HeroDataStoreService){
    this.createForm();
  }

  ngOnInit(){
    this.init();
  }



  createForm(){
    this.initForm ? this.crudForm = this.initForm : this.crudForm = this.fb.group({});
  }

  loadData(){
    this.service.getAll().subscribe(
      data => {
        this.data = data},
      error => { console.log('An error was occured.')},
      () => { console.log('loading data was done.')}
    );
  }

  add(){
    const p  = this.crudForm.value;
    this.service.add(p).subscribe(
      res => {
        this.init();
        this.loadData();
      }
    );
  }

  update(){
    this.service.update(this.selectedItem)
    .subscribe(
      res => {
        this.init();
        this.loadData();
      }
    );
  }

  init(){
    this.selectedItem = this.initItem;
    this.createForm();
  }

  delete(){
    this.service.delete(this.selectedItem.id).
    subscribe(
      res =>{
        this.selectedItem = this.initItem;
        this.loadData();
      }
    );
  }

  public showDetail() {
    console.log(this.selectedItem.id)
    this.heroData.updateHeroId(this.selectedItem.id)
    this.service.getOne(this.selectedItem.id).
    subscribe( res => { 
      this.missionData.updateMissions(res.missions)
      this.modalService.open(MissionComponent, {size: 'lg'})
    });  
  }

}
