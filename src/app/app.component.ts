import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length: number;
  password: string;
  includeLetters: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  constructor() {
    this.password = '';
    this.includeLetters = false;
    this.includeNumbers = false;
    this.includeSymbols = false;
    this.length = 0;
  }
  onButtonClick() {
    console.log('this.includeLetters', this.includeLetters);
    this.password = 'MY PASSWORD';

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$^&*()';
    let validChars = '';
    if (this.includeNumbers) validChars += numbers;
    if (this.includeLetters) validChars += letters;
    if (this.includeSymbols) validChars += symbols;
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  getPassword = () => this.password;

  getName = () => 'Alex';

  onChangeUseLetters() {
    console.log('this.includeLetters before:', this.includeLetters);
    this.includeLetters = !this.includeLetters;
    console.log('this.includeLetters after:', this.includeLetters);
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeLength(event: Event): void {
    const parsedValue = Number((event.target as HTMLInputElement).value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
    console.log('this.length', this.length);
  }
}
