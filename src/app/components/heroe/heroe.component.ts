import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any = { };

  constructor( private activatedRoute: ActivatedRoute, private _heroServices: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.heroe = this._heroServices.getHeroe(params ['id'] );
    });
   }

  ngOnInit() {
  }

}
