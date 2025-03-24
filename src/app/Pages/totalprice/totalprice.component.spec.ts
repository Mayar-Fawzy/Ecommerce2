import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalpriceComponent } from './totalprice.component';

describe('TotalpriceComponent', () => {
  let component: TotalpriceComponent;
  let fixture: ComponentFixture<TotalpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalpriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
