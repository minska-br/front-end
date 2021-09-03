import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CalculationStatusEnum } from 'src/app/enums/calculation-status.enum';
import { PagesEnum } from 'src/app/enums/pages.enum';
import { CalculationService } from 'src/app/services/calculation/calculation.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss'],
})
export class CalculationsComponent implements OnInit, OnDestroy {
  resultInterval: any;
  tableDataSource: any[] = [];
  displayedColumns: string[] = ['product', 'startTime', 'status'];

  constructor(
    private router: Router,
    private snackbar: MatSnackBar,
    private loadingService: LoadingService,
    private calculationService: CalculationService
  ) {}

  ngOnInit() {
    this.loadCalculationsList();

    this.resultInterval = setInterval(() => {
      this.loadCalculationsList();
    }, 30000);
  }

  ngOnDestroy() {
    clearInterval(this.resultInterval);
  }

  get isLoading() {
    return this.loadingService.isLoading;
  }

  loadCalculationsList() {
    this.loadingService.startLoading();

    this.calculationService.getCalculationList().subscribe(
      (success) => {
        this.tableDataSource = success;
        this.loadingService.stopLoading();
      },
      () => {
        this.snackbar.open(
          'Ocorreu um erro ao realizar o carregamento. Tente novamente. '
        );

        this.loadingService.stopLoading();
        this.router.navigateByUrl(PagesEnum.HOME);
      }
    );
  }

  returnStatusStyleByStatusByAPI(status: string) {
    if (status === CalculationStatusEnum.CALCULATING) {
      return 'blue';
    }

    if (status === CalculationStatusEnum.ERROR) {
      return 'red';
    }

    return 'green';
  }

  returnStatusNameByStatusByAPI(status: string) {
    if (status === CalculationStatusEnum.CALCULATING) {
      return 'Calculando';
    }

    if (status === CalculationStatusEnum.ERROR) {
      return 'Falhou';
    }

    return 'Finalizado';
  }

  onReturnButtonClick() {
    this.router.navigateByUrl(PagesEnum.HOME);
  }

  redirectToResultPage(row: any) {
    if (row.status === CalculationStatusEnum.CALCULATED) {
      this.router.navigateByUrl(`${PagesEnum.RESULT}/${row.calculationId}`);
    }
  }
}
