import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;
  constructor( private activatedRoure: ActivatedRoute, private heroeservices: HeroesService) { }

  ngOnInit() {
    this.activatedRoure.params.subscribe(params => {
      this.termino = params.termino;
      this.heroes = this.heroeservices.buscarHeroes(params.termino);
      console.log(this.heroes);

    });
  }

}
