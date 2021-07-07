import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './views/search/search.component';
import { SearchWordComponent } from './views/search/steps/search-word/search-word.component';
import { PutWeightComponent } from './views/search/steps/put-weight/put-weight.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ChooseWordComponent } from './views/search/steps/choose-word/choose-word.component';
import { CalculationResultComponent } from './views/calculation-result/calculation-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    PutWeightComponent,
    SearchWordComponent,
    ChooseWordComponent,
    CalculationResultComponent,
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
