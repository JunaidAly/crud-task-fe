import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskListComponent } from './new-task-list.component';

describe('NewTaskListComponent', () => {
  let component: NewTaskListComponent;
  let fixture: ComponentFixture<NewTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTaskListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
