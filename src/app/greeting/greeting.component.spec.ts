import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingComponent } from './greeting.component';
import {AuthModule} from '@auth0/auth0-angular';
import {environment} from '../../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {userDataReducer} from '../user-data.reducer';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingComponent ],
      imports: [AuthModule.forRoot(environment.authConfig), HttpClientModule, StoreModule.forRoot({ userData: userDataReducer })],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
