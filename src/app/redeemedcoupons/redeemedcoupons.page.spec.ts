import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedeemedcouponsPage } from './redeemedcoupons.page';

describe('RedeemedcouponsPage', () => {
  let component: RedeemedcouponsPage;
  let fixture: ComponentFixture<RedeemedcouponsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemedcouponsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedeemedcouponsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
