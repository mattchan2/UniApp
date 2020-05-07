import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodDinnerPage } from './food-dinner.page';

describe('FoodDinnerPage', () => {
  let component: FoodDinnerPage;
  let fixture: ComponentFixture<FoodDinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDinnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodDinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
