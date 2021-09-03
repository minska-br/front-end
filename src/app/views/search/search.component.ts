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

  constructor(private stepService: StepService) {}

  ngOnInit() {
    this.stepService.reset();
  }

  get progressBarValue(): number {
    const maxSteps = this.stepService.maxSteps;
    const stepPercent = 100 / maxSteps;

    return stepPercent * this.stepService.currentStepValue;
  }

  get currentStep(): string {
    return this.stepService.currentStep;
  }
}
