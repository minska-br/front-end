import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesEnum } from 'src/app/enums/pages.enum';
import {
  CalculationInfo,
  CalculationInfoProcess,
} from 'src/app/interfaces/calculation-info.interface';
import { CalculationService } from 'src/app/services/calculation/calculation.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { StepService } from 'src/app/services/step/step.service';

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrls: ['./calculation-result.component.scss'],
})
export class CalculationResultComponent implements OnInit {
  editMode = false;

  calculationInfo: CalculationInfo = {} as CalculationInfo;
  processesToUpdate: CalculationInfoProcess[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private loadingService: LoadingService,
    private calculationService: CalculationService
  ) {}

  ngOnInit() {
    this.loadingService.startLoading();

    this.getCalculationInfo();
  }

  get isLoading() {
    return this.loadingService.isLoading;
  }

  handleChangeValueFromIngredient(event: any, process: any) {
    const processFound = this.calculationInfo.processes.find(
      (currentProcess) => currentProcess.name === process
    );

    if (processFound) {
      const otherProcesses = this.calculationInfo.processes.filter(
        (currentProcess) => currentProcess.name !== process
      );

      processFound.value = event.target.value || 0;
      processFound.recalculated = true;

      otherProcesses.push(processFound);

      this.processesToUpdate = otherProcesses;
    }
  }

  handleOnClickToSaveProcesses() {
    this.editMode = false;

    if (this.processesToUpdate.length) {
      this.loadingService.startLoading();

      this.calculationService
        .restartCalc(this.calculationInfo.id, this.processesToUpdate)
        .subscribe(
          () => {
            this.router.navigateByUrl(PagesEnum.CALCULATIONS);
          },
          () => {
            this.snackbar.open(
              'Ocorreu um erro ao realizar a operação. Tente novamente. '
            );
          }
        );
    }
  }

  getCalculationInfo() {
    const calculationId = this.route.snapshot.params['id'];

    if (!calculationId) {
      this.loadingService.stopLoading();
      this.router.navigateByUrl(PagesEnum.HOME);

      return;
    }

    this.calculationService.getCalculationResult(calculationId).subscribe(
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
