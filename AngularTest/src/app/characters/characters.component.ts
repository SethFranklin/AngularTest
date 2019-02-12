import { Component, OnInit } from '@angular/core';
import { Character } from "../character";
import { CharacterService } from "../character.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

	characters : Character[];
	selected_char : Character;

  constructor(private charService : CharacterService) { }

  ngOnInit() {

  	this.get_chars();

  }

  onSelect(char : Character) : void
  {

  	this.selected_char = char;

  }

  get_chars() : void
  {

  	this.charService.get_chars().subscribe(chars => this.characters = chars);

  }

}
