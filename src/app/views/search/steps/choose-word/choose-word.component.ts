import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-word',
  templateUrl: './choose-word.component.html',
  styleUrls: ['./choose-word.component.scss'],
})
export class ChooseWordComponent {
  resultFromSearchWord: string[] = [
    'Banana',
    'Pamonha',
    'Waffle',
    'Ronaldo',
    'Viagem',
  ];
}
