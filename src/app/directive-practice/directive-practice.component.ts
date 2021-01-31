import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  europeCountries: Country[] = [];
  countries: Country[] = [
    {
      name: 'Romania',
      population: 19000000,
      continent: 'Europe',
      neighborsIndexes: [1, 2]
    },
    {
      name: 'Ukraine',
      population: 385456565,
      continent: 'Europe',
      neighborsIndexes: [0, 2]
    },
    {
      name: 'Bulgary',
      population: 16983738,
      continent: 'Europe',
      neighborsIndexes: [0, 1]
    },
    {
      name: 'SUA',
      population: 199283738,
      continent: 'America',
      neighborsIndexes: [5]
    },
    {
      name: 'Canada',
      population: 132828348,
      continent: 'America',
      neighborsIndexes: [4]
    }
  ]
}

class Country {
  name: string = '';
  population: number = 0;
  continent: string = '';
  neighborsIndexes: number[] = [];
}
