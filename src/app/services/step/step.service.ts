import { Injectable } from '@angular/core';
import { StepsSearchEnum } from 'src/app/enums/steps-search.enum';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  currentStep: string;
  currentStepValue: number;

  isRecipe: boolean;

  searchWord: string;
  searchWordWeight: number;

  constructor() {
    this.currentStepValue = 1;
    this.currentStep = StepsSearchEnum.SET_SEARCH;

    this.searchWord = '';
    this.isRecipe = false;
    this.searchWordWeight = 0;
  }

  get maxSteps() {
    return this.isRecipe ? 4 : 3;
  }

  increaseStepCounter() {
    this.currentStepValue = this.currentStepValue + 1;
  }

  decreaseStepCounter() {
    this.currentStepValue = this.currentStepValue - 1;
  }

  reset() {
    this.currentStepValue = 1;
    this.currentStep = StepsSearchEnum.SET_SEARCH;

    this.searchWord = '';
    this.isRecipe = false;
    this.searchWordWeight = 0;
  }
}
