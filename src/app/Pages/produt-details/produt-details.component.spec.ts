import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutDetailsComponent } from './produt-details.component';

describe('ProdutDetailsComponent', () => {
  let component: ProdutDetailsComponent;
  let fixture: ComponentFixture<ProdutDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
