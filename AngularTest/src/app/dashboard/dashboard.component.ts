import { Component, OnInit } from '@angular/core';
import { Character } from "../character";
import { CharacterService } from "../character.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	chars : Character[];

  constructor(private characterService : CharacterService) { }

  ngOnInit() {

  	this.get_chars();

  }

  get_chars() : void
  {

  	this.characterService.get_chars().subscribe(new_c => this.chars = new_c.splice(1, 5));

  }

}
