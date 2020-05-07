import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchoolSlidePage } from './school-slide.page';

describe('SchoolSlidePage', () => {
  let component: SchoolSlidePage;
  let fixture: ComponentFixture<SchoolSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
