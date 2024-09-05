import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcruiseComponent } from './addcruise.component';

describe('AddcruiseComponent', () => {
  let component: AddcruiseComponent;
  let fixture: ComponentFixture<AddcruiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcruiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddcruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
