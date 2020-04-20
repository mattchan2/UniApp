import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarerSchedulePage } from './carer-schedule.page';

describe('CarerSchedulePage', () => {
  let component: CarerSchedulePage;
  let fixture: ComponentFixture<CarerSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarerSchedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarerSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
