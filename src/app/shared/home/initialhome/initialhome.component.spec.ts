import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialhomeComponent } from './initialhome.component';

describe('InitialhomeComponent', () => {
  let component: InitialhomeComponent;
  let fixture: ComponentFixture<InitialhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitialhomeComponent]
    });
    fixture = TestBed.createComponent(InitialhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
