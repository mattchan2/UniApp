import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToadSlidePage } from './toad-slide.page';

describe('ToadSlidePage', () => {
  let component: ToadSlidePage;
  let fixture: ComponentFixture<ToadSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToadSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToadSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
