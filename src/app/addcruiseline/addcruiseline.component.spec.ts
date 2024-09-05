import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcruiselineComponent } from './addcruiseline.component';

describe('AddcruiselineComponent', () => {
  let component: AddcruiselineComponent;
  let fixture: ComponentFixture<AddcruiselineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcruiselineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddcruiselineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
