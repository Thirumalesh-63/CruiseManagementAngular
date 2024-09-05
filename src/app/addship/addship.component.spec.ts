import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshipComponent } from './addship.component';

describe('AddshipComponent', () => {
  let component: AddshipComponent;
  let fixture: ComponentFixture<AddshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddshipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
