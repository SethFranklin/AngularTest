import { Injectable } from '@angular/core';
import { Character } from "./character";
import { CHARS } from "./mock-characters";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

// Meant to get from web service or local storage, right now it's just mock data

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private messageService : MessageService) { }

  get_chars() : Observable<Character[]>
  {

  	this.messageService.add("CharacterService: fetched characters");
  	return of(CHARS);

  }

}
