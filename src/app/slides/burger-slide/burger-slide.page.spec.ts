import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerSlidePage } from './burger-slide.page';

describe('BurgerSlidePage', () => {
  let component: BurgerSlidePage;
  let fixture: ComponentFixture<BurgerSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
