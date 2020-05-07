import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreakfastSlidePage } from './breakfast-slide.page';

describe('BreakfastSlidePage', () => {
  let component: BreakfastSlidePage;
  let fixture: ComponentFixture<BreakfastSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakfastSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreakfastSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
