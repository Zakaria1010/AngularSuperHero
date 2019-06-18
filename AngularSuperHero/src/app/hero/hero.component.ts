import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/models/hero';
import { FormGroup } from '@angular/forms';
import { DataModel } from '../shared/models/data.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {


  heroes: Hero[];

  heroForm: FormGroup;

  hero = new Hero();

  heroesModel: DataModel[];

  constructor() { }

  ngOnInit() {
  }

}
