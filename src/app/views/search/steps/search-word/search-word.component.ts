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
  searchWordInputValue = new FormControl('', Validators.required);

  constructor(private stepService: StepService) {}

  ngOnInit() {
    if (Boolean(this.stepService.searchWord)) {
      this.searchWordInputValue.setValue(this.stepService.searchWord);
    }
  }

  onButtonContinueClick() {
    this.stepService.searchWord = this.searchWordInputValue.value
      .toLowerCase()
      .trim();

    this.stepService.currentStep = StepsSearchEnum.SET_WEIGHT;
  }
}
