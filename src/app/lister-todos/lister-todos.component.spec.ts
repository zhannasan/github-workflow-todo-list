import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerTodosComponent } from './lister-todos.component';

describe('ListerTodosComponent', () => {
  let component: ListerTodosComponent;
  let fixture: ComponentFixture<ListerTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
