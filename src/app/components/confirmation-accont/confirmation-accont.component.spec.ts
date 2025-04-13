import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationAccontComponent } from './confirmation-accont.component';

describe('ConfirmationAccontComponent', () => {
  let component: ConfirmationAccontComponent;
  let fixture: ComponentFixture<ConfirmationAccontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationAccontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationAccontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
