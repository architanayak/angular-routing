import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-movies',
  templateUrl: './dc-movies.component.html',
  styleUrls: ['./dc-movies.component.css']
})
export class DCMoviesComponent implements OnInit {

  public movies = [
    {
      id: "1",
      name: "THE DARK KNIGHT",
      release_date: "2008"
    },
    {
      id: "2",
      name: "MAN OF STEEL",
      release_date: "2013"
    },
    {
      id: "3",
      name: "WONDER WOMAN",
      release_date: "2011"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
