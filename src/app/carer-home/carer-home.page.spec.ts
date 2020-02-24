import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarerHomePage } from './carer-home.page';

describe('CarerHomePage', () => {
  let component: CarerHomePage;
  let fixture: ComponentFixture<CarerHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarerHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarerHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
