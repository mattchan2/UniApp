import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusSlidePage } from './bus-slide.page';

describe('BusSlidePage', () => {
  let component: BusSlidePage;
  let fixture: ComponentFixture<BusSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
