import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresetTasksFoodPage } from './preset-tasks-food.page';

describe('PresetTasksFoodPage', () => {
  let component: PresetTasksFoodPage;
  let fixture: ComponentFixture<PresetTasksFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetTasksFoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresetTasksFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
