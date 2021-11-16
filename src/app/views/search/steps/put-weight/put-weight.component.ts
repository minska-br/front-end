import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PagesEnum } from 'src/app/enums/pages.enum';
import { SearchTypeEnum } from 'src/app/enums/search-type.enum';
import { StepsSearchEnum } from 'src/app/enums/steps-search.enum';
import { CalculationService } from 'src/app/services/calculation/calculation.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { StepService } from 'src/app/services/step/step.service';

@Component({
  selector: 'app-put-weight',
  templateUrl: './put-weight.component.html',
  styleUrls: ['./put-weight.component.scss'],
})
export class PutWeightComponent implements OnInit {
  searchWordWeightInputValue = new FormControl('', Validators.required);

  constructor(
    private router: Router,
    private snackbar: MatSnackBar,
    private stepService: StepService,
    private loadingService: LoadingService,
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

    const searchWord = this.stepService.searchWord;
    const weightAmount = this.stepService.searchWordWeight;
    const recipeId = this.stepService.recipeId;

    const searchType = this.stepService.isRecipe
      ? SearchTypeEnum.RECIPE
      : SearchTypeEnum.PRODUCT;

    this.loadingService.startLoading();

    this.calculationService
      .startCalc(recipeId, searchWord, searchType, weightAmount)
      .subscribe(
        () => {
          this.loadingService.stopLoading();

          this.router.navigateByUrl(PagesEnum.CALCULATIONS);
        },
        () => {
          this.snackbar.open(
            'Ocorreu um erro ao realizar o cálculo. Tente novamente.',
            undefined,
            { duration: 5000 }
          );

          this.loadingService.stopLoading();
        }
      );
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
