import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { StepsSearchEnum } from 'src/app/enums/steps-search.enum';
import { CalculationService } from 'src/app/services/calculation/calculation.service';
import { StepService } from 'src/app/services/step/step.service';

@Component({
  selector: 'app-put-weight',
  templateUrl: './put-weight.component.html',
  styleUrls: ['./put-weight.component.scss'],
})
export class PutWeightComponent implements OnInit {
  searchWordWeightInputValue = new FormControl('', Validators.required);

  constructor(
    private stepService: StepService,
    private calculationService: CalculationService
  ) {}

  ngOnInit() {
    if (Boolean(this.stepService.searchWordWeight)) {
      this.searchWordWeightInputValue.setValue(
        this.stepService.searchWordWeight
      );
    }
  }

  get searchWord() {
    return this.stepService.searchWord;
  }

  onButtonContinueClick() {
    this.stepService.increaseStepCounter();

    this.stepService.searchWordWeight = this.searchWordWeightInputValue.value;
    // this.calculationService.startCalc();
  }

  onButtonReturnClick() {
    this.stepService.searchWordWeight = 0;

    this.stepService.decreaseStepCounter();

    if (this.stepService.isRecipe) {
      this.stepService.currentStep = StepsSearchEnum.CHOOSE_RESULT;
    } else {
      this.stepService.currentStep = StepsSearchEnum.SET_SEARCH;
    }
  }
}
