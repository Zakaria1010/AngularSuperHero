import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/app/shared/services/mission.service';
import { HeroService } from 'src/app/shared/services/hero.service';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {

  hero: Hero;
  heroId: string;
  isMission = false;
  missions: Mission[];
  selectedOption: any;

  missionCtrl = new FormControl();

  myForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private missionService: MissionService
  ) { }

  ngOnInit() {
    this.createForm();

    // Get response based on parameter in url
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.heroId = params.get('heroId');
        return this.heroService.getSuperHeroeById(this.heroId);
      })
    ).subscribe(hero => {
      this.hero = hero;
      console.log(this.hero);
    });

    // Get all missions
    this.missionService.getMissions().subscribe(missions => {
      this.missions = missions;
    });
  }

  createForm() {
    this.myForm = new FormGroup({
      mission: this.missionCtrl
    });
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
  }

}
