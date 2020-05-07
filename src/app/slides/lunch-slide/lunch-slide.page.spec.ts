import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LunchSlidePage } from './lunch-slide.page';

describe('LunchSlidePage', () => {
  let component: LunchSlidePage;
  let fixture: ComponentFixture<LunchSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LunchSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
