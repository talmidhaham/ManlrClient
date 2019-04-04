import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IturTikimComponent } from './itur-tikim.component';

describe('IturTikimComponent', () => {
  let component: IturTikimComponent;
  let fixture: ComponentFixture<IturTikimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IturTikimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IturTikimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
