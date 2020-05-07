import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SnackSlidePage } from './snack-slide.page';

describe('SnackSlidePage', () => {
  let component: SnackSlidePage;
  let fixture: ComponentFixture<SnackSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SnackSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
