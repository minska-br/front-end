import { Component, OnInit } from '@angular/core';
import { StepsSearchEnum } from 'src/app/enums/steps-search.enum';
import { ProductList } from 'src/app/interfaces/product-list.interface';
import { CalculationService } from 'src/app/services/calculation/calculation.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { StepService } from 'src/app/services/step/step.service';

@Component({
  selector: 'app-choose-word',
  templateUrl: './choose-word.component.html',
  styleUrls: ['./choose-word.component.scss'],
})
export class ChooseWordComponent implements OnInit {
  resultFromSearchWord: ProductList[] = [];

  constructor(
    private stepService: StepService,
    private loadingService: LoadingService,
    private calculationService: CalculationService
  ) {}

  ngOnInit() {
    this.getProductList();
  }

  get isLoading() {
    return this.loadingService.isLoading;
  }

  getProductList() {
    this.loadingService.startLoading();

    this.calculationService
      .getProductList(this.stepService.searchWord)
      .subscribe(
        (success: ProductList[]) => {
          this.resultFromSearchWord = success;
          this.loadingService.stopLoading();
        },
        () => {
          this.stepService.currentStep = StepsSearchEnum.SET_WEIGHT;
          this.loadingService.stopLoading();
        }
      );
  }
}
