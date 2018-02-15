import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClsftComponent } from './clsft.component';

describe('ClsftComponent', () => {
  let component: ClsftComponent;
  let fixture: ComponentFixture<ClsftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClsftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClsftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
