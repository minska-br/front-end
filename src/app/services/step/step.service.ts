import { Injectable } from '@angular/core';
import { StepsSearchEnum } from 'src/app/enums/steps-search.enum';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  currentStep: number;

  searchWord: string;
  searchWordWeight: number;

  constructor() {
    this.currentStep = StepsSearchEnum.SET_SEARCH;

    this.searchWord = '';
    this.searchWordWeight = 0;
  }
}
