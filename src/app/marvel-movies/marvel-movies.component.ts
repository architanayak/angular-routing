import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-movies',
  templateUrl: './marvel-movies.component.html',
  styleUrls: ['./marvel-movies.component.css']
})
export class MarvelMoviesComponent implements OnInit {

  public movies = [
    { name: "CAPTAIN AMERICA: THE FIRST AVENGER" , id: "1"},
    { name: "DOCTOR STRANGE" , id: "2"},
    { name: "IRON MAN" , id: "3"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
