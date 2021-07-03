import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutWeightComponent } from './put-weight.component';

describe('PutWeightComponent', () => {
  let component: PutWeightComponent;
  let fixture: ComponentFixture<PutWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutWeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
