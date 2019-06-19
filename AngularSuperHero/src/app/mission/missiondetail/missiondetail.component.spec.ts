import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissiondetailComponent } from './missiondetail.component';

describe('MissiondetailComponent', () => {
  let component: MissiondetailComponent;
  let fixture: ComponentFixture<MissiondetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissiondetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
