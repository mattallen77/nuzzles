import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhoAmIComponent } from './who-am-i.component';

describe('WhoAmIComponent', () => {
  let component: WhoAmIComponent;
  let fixture: ComponentFixture<WhoAmIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoAmIComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhoAmIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
