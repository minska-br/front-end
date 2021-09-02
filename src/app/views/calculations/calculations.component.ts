import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CalculationStatusEnum } from 'src/app/enums/calculation-status.enum';
import { CalculationService } from 'src/app/services/calculation/calculation.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss'],
})
export class CalculationsComponent implements OnInit {
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
          'Ocorreu um erro ao realizar a busca. Tente novamente. '
        );

        this.loadingService.stopLoading();
        this.router.navigateByUrl('/');
      }
    );
  }

  returnStatusStyleByStatusByAPI(status: string) {
    if (status === CalculationStatusEnum.CALCULATING) {
      return 'blue';
    }

    return 'green';
  }

  returnStatusNameByStatusByAPI(status: string) {
    if (status === CalculationStatusEnum.CALCULATING) {
      return 'Calculando';
    }

    return 'Finalizado';
  }

  onReturnButtonClick() {
    this.router.navigateByUrl('/');
  }

  redirectToResultPage(row: any) {
    this.router.navigateByUrl(`/result/${row.requestId}`);
  }
}
