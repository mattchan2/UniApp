import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresetTasksAfternoonPage } from './preset-tasks-afternoon.page';

describe('PresetTasksAfternoonPage', () => {
  let component: PresetTasksAfternoonPage;
  let fixture: ComponentFixture<PresetTasksAfternoonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetTasksAfternoonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresetTasksAfternoonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
