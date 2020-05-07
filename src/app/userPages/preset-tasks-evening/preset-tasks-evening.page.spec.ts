import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresetTasksEveningPage } from './preset-tasks-evening.page';

describe('PresetTasksEveningPage', () => {
  let component: PresetTasksEveningPage;
  let fixture: ComponentFixture<PresetTasksEveningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetTasksEveningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresetTasksEveningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
