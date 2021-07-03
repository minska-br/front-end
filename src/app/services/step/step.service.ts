import { Injectable } from '@angular/core';
import { StepsSearchEnum } from 'src/app/enums/steps-search.enum';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  private _currentStep: number;

  constructor() {
    this._currentStep = StepsSearchEnum.SET_SEARCH;
  }

  get currentStep() {
    return this._currentStep;
  }

  set currentStep(value: number) {
    this._currentStep = value;
  }
}
