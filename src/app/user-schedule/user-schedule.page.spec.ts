import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserSchedulePage } from './user-schedule.page';

describe('UserSchedulePage', () => {
  let component: UserSchedulePage;
  let fixture: ComponentFixture<UserSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSchedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
