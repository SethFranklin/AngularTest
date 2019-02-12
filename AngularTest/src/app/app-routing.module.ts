import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharactersComponent } from "./characters/characters.component";

const routes: Routes =
[

	{path: "characters", component: CharactersComponent},

];

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }
