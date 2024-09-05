import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiselineComponent } from './cruiseline.component';

describe('CruiselineComponent', () => {
  let component: CruiselineComponent;
  let fixture: ComponentFixture<CruiselineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CruiselineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CruiselineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
