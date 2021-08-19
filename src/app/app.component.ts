import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { LoadingService } from './services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
  constructor(
    private cdr: ChangeDetectorRef,
    private loadingService: LoadingService
  ) {}

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  get isLoading() {
    return this.loadingService.isLoading;
  }
}
