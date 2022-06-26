import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPorfolioComponent } from './sub-porfolio.component';

describe('SubPorfolioComponent', () => {
  let component: SubPorfolioComponent;
  let fixture: ComponentFixture<SubPorfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPorfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
