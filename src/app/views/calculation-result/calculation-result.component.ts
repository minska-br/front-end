import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesEnum } from 'src/app/enums/pages.enum';
import { CalculationInfo } from 'src/app/interfaces/calculation-info.interface';
import { CalculationService } from 'src/app/services/calculation/calculation.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { StepService } from 'src/app/services/step/step.service';

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrls: ['./calculation-result.component.scss'],
})
export class CalculationResultComponent implements OnInit {
  calculationInfo: CalculationInfo = {} as CalculationInfo;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private loadingService: LoadingService,
    private calculationService: CalculationService
  ) {}

  ngOnInit() {
    this.getCalculationInfo();
  }

  getCalculationInfo() {
    this.loadingService.startLoading();

    const requestId = this.route.snapshot.params['id'];
    if (!requestId) {
      this.loadingService.stopLoading();
      this.router.navigateByUrl(PagesEnum.HOME);

      return;
    }

    this.calculationService.getCalculationResult(requestId).subscribe(
      (success) => {
        this.calculationInfo = success;
        this.loadingService.stopLoading();
      },
      () => {
        this.snackbar.open(
          'Ocorreu um erro ao realizar a operação. Tente novamente. '
        );

        this.loadingService.stopLoading();
        this.router.navigateByUrl(PagesEnum.HOME);
      }
    );
  }
}
