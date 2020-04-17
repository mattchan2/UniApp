import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasksMenuPage } from './tasks-menu.page';

describe('TasksMenuPage', () => {
  let component: TasksMenuPage;
  let fixture: ComponentFixture<TasksMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
