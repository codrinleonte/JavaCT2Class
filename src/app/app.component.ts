import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
      const sum = this.calculateSum([1,3,4,6]);
      console.log('Valoarea sumei este: ' + sum);
  }

  //functions
  calculateSum(numbersToBeSummedUp: number[]): number {
      let sumValue: number = 0;
      for(let i = 0; i < numbersToBeSummedUp.length; i++){
        sumValue += numbersToBeSummedUp[i];
      }
  
      return sumValue;
  }

  //string
  title: string = 'FirstAngularProject';

  //number
  age: number = 0;
  
  //bool
  isAStudent: boolean = true;

  //collection
  petNames: Array<string> = ['Ralph', 'Bob', 'Micky']
  agesCollection: number[] = [21, 24, 25, 30]


  //not so recomended
  catNames = ['Micky', 3, true, ['Chowder', 'Mihai']]


  petInstance: Pet = {
    name: 'Bobi',
    age: 2,
    breed: 'Pug',
    ownerName: 'Codrin'
  }

  petStore: Pet[] = [this.petInstance]
}

class Pet {
  name: string ;
  ownerName: string;
  breed: string;
  age: number;
}

