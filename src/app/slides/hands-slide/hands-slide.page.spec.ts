import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HandsSlidePage } from './hands-slide.page';

describe('HandsSlidePage', () => {
  let component: HandsSlidePage;
  let fixture: ComponentFixture<HandsSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandsSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HandsSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
