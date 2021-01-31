import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {
    console.log('I am in constructor')
  }

  ngOnInit(): void {
    console.log('I am in ngOnInit')

  }

  componentTitle: string = 'This is the main component title'
  variableNumber = 10;

  functionThatIsCalledOnClick(){
    this.variableNumber++;
    console.log('Am incrementat variabila!' + this.variableNumber)
  }

  buttonDisabled: boolean = true;

  changeButtonDisableStatus() {
    this.buttonDisabled = !this.buttonDisabled;
  }
}
