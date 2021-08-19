import { Component, OnInit } from '@angular/core';
import { StepsSearchEnum } from 'src/app/enums/steps-search.enum';
import { CalculationService } from 'src/app/services/calculation/calculation.service';
import { StepService } from 'src/app/services/step/step.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  stepsEnum = StepsSearchEnum;

  constructor(
    private stepService: StepService,
    private calculationService: CalculationService
  ) {}

  ngOnInit() {
    this.calculationService.getProductList('pastel').subscribe((value) => {
      console.log(value);
    });
  }

  get progressBarValue(): number {
    const maxSteps = StepsSearchEnum.STEPS_QUANTITY + 1;
    const stepPercent = 100 / maxSteps;

    return stepPercent * this.currentStep;
  }

  get currentStep(): number {
    return this.stepService.currentStep;
  }
}
