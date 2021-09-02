import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './views/search/search.component';
import { SearchWordComponent } from './views/search/steps/search-word/search-word.component';
import { PutWeightComponent } from './views/search/steps/put-weight/put-weight.component';

import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ChooseWordComponent } from './views/search/steps/choose-word/choose-word.component';
import { CalculationResultComponent } from './views/calculation-result/calculation-result.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CalculationsComponent } from './views/calculations/calculations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    LoadingComponent,
    NotFoundComponent,
    PutWeightComponent,
    SearchWordComponent,
    ChooseWordComponent,
    CalculationResultComponent,
    CalculationsComponent,
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
