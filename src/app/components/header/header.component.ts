import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesEnum } from 'src/app/enums/pages.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  onClickToCalcList() {
    this.router.navigateByUrl(PagesEnum.CALCULATIONS);
  }
}
