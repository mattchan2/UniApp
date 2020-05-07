import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkSlidePage } from './work-slide.page';

describe('WorkSlidePage', () => {
  let component: WorkSlidePage;
  let fixture: ComponentFixture<WorkSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
