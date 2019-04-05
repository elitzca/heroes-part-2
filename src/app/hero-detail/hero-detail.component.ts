import { Component, OnInit, Input } from '@angular/core';    //   3.0 import an Input property
import {Hero} from '../hero';                                //   3.1 import Hero property class


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;                 //   3.2  Add a hero property, preceded by the @Input() decorator

  constructor() { }

  ngOnInit() {
  }

}
