import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresetTasksTravelPage } from './preset-tasks-travel.page';

describe('PresetTasksTravelPage', () => {
  let component: PresetTasksTravelPage;
  let fixture: ComponentFixture<PresetTasksTravelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetTasksTravelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresetTasksTravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
