import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Available2Page } from './available2.page';

describe('Available2Page', () => {
  let component: Available2Page;
  let fixture: ComponentFixture<Available2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Available2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Available2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
