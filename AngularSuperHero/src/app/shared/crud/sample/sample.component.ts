import { Component, OnInit, Input, IterableDiffers } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from '../crud.service';
import { DataModel } from '../../models/data.model';
import { MissionComponent } from 'src/app/mission/mission.component';


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

  dataDiffer: any;
  dataType: string;

  constructor(private fb: FormBuilder,  private modalService: NgbModal){
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
        console.log('samplgetAll')
        this.data = data},
      error => { console.log('An error was occured.')},
      () => { console.log('loading data was done.')}
    );
  }

  add(){
    const p  = this.crudForm.value;
    console.log('testP',p)
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
    console.log('item', this.selectedItem)
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
    // filter missions by heroId
    this.service.getOne(this.selectedItem.id).
    subscribe( res => { 
      this.modalService.open(MissionComponent, {size: 'lg'})
    });  
  }

  public addMissionToHero() {

  }

  public getDataType() {
    this.dataModelList.forEach(config =>{
      if( config.dataType === 'undefined') {
        config.dataType = this.getColumnType(config);
      }
      else {
        config.dataType = this.getColumnType(config);
      }
    })
  }

  public getColumnType(config: DataModel): string {
   
      if( config && typeof config === 'string') {
        this.dataType = 'string'
            return this.dataType
      }
      if( config && typeof config === 'boolean') {
          this.dataType = 'boolean'
            return this.dataType
      }
      if( config && typeof config === 'number') {
        this.dataType = 'number'
          return this.dataType
      }
        this.dataType = 'undefined'
          return this.dataType
  }

  
  
}
