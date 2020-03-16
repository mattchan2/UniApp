import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresetTasksMorningPage } from './preset-tasks-morning.page';

describe('PresetTasksMorningPage', () => {
  let component: PresetTasksMorningPage;
  let fixture: ComponentFixture<PresetTasksMorningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetTasksMorningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresetTasksMorningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
