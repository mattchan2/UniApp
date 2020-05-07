import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DinnerSlidePage } from './dinner-slide.page';

describe('DinnerSlidePage', () => {
  let component: DinnerSlidePage;
  let fixture: ComponentFixture<DinnerSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DinnerSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
