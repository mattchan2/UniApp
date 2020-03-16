import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoatSlidePage } from './coat-slide.page';

describe('CoatSlidePage', () => {
  let component: CoatSlidePage;
  let fixture: ComponentFixture<CoatSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoatSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoatSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
