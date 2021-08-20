import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { StepsSearchEnum } from 'src/app/enums/steps-search.enum';
import { StepService } from 'src/app/services/step/step.service';

@Component({
  selector: 'app-search-word',
  templateUrl: './search-word.component.html',
  styleUrls: ['./search-word.component.scss'],
})
export class SearchWordComponent implements OnInit {
  isProduct: boolean = false;
  searchWordInputValue = new FormControl('', Validators.required);

  constructor(private stepService: StepService) {}

  ngOnInit() {
    if (Boolean(this.stepService.searchWord)) {
      this.searchWordInputValue.setValue(this.stepService.searchWord);
    }
  }

  get isRecipe(): boolean {
    return this.stepService.isRecipe;
  }

  onHandleIsRecipeCheckbox() {
    this.stepService.isRecipe = !this.stepService.isRecipe;
  }

  onButtonContinueClick() {
    this.stepService.searchWord = this.searchWordInputValue.value
      .toLowerCase()
      .trim();

    this.stepService.increaseStepCounter();

    if (this.stepService.isRecipe) {
      this.stepService.currentStep = StepsSearchEnum.CHOOSE_RESULT;
    } else {
      this.stepService.currentStep = StepsSearchEnum.SET_WEIGHT;
    }
  }
}
