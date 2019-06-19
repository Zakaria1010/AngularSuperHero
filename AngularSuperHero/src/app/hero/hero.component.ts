import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/models/hero';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataModel } from '../shared/models/data.model';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/shared/services/hero.service';
import { Mission } from 'src/app/shared/models/mission';

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

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit() {

    this.heroService.getAll().subscribe(res => this.heroes = res)
    console.log('this.heroes', this.heroes)
    this.heroForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: '',
      superheroname: '',
    });

    this.heroesModel = [
      new DataModel('firstname','FirstName','string',false,[]),
      new DataModel('lastname','LastName','string',false,[]),
      new DataModel('superheroname','Hero Name','string',false,[]),
    ]
  }

}
