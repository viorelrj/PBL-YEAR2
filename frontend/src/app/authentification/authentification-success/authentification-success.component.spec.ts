import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationSuccessComponent } from './authentification-success.component';

describe('AuthentificationSuccessComponent', () => {
  let component: AuthentificationSuccessComponent;
  let fixture: ComponentFixture<AuthentificationSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentificationSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
