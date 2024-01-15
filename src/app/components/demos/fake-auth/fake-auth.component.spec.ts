import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeAuthComponent } from './fake-auth.component';

describe('FakeAuthComponent', () => {
  let component: FakeAuthComponent;
  let fixture: ComponentFixture<FakeAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeAuthComponent]
    });
    fixture = TestBed.createComponent(FakeAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
