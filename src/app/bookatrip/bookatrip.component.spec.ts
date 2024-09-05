import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookatripComponent } from './bookatrip.component';

describe('BookatripComponent', () => {
  let component: BookatripComponent;
  let fixture: ComponentFixture<BookatripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookatripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookatripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
