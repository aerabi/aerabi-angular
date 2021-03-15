import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {UserData} from '../user-data.reducer';
import {Store} from '@ngrx/store';
import {setFamilyName, setGivenName} from '../user-data.actions';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.sass']
})
export class GreetingComponent implements OnInit {
  givenName: string;
  familyName: string;
  userData$: Observable<UserData>;
  quickSectionChoice: string;

  constructor(private store: Store<{userData: UserData}>) {
    this.userData$ = store.select('userData');
  }

  ngOnInit(): void {
    this.givenName = '';
    this.familyName = '';
    this.quickSectionChoice = '';
  }

  saveUserData(): void {
    if (this.givenName) {
      this.setGivenName(this.givenName);
    }

    if (this.familyName) {
      this.setFamilyName(this.familyName);
    }
  }

  setGivenName(givenName: string): void {
    console.log(`Given name ${givenName} saved into the store.`);
    this.store.dispatch(setGivenName({givenName}));
  }

  setFamilyName(familyName: string): void {
    console.log(`Family name ${familyName} saved into the store.`);
    this.store.dispatch(setFamilyName({familyName}));
  }

  isHonorableGuest(): boolean {
    if (!this.givenName || this.givenName.length < 3) {
      return true;
    }
    return this.isEveryPleasureAvailableInside();
  }

  isEveryPleasureAvailableInside(): boolean {
    const name = `${this.givenName} ${this.familyName}`;
    const honorableGuestNames = ['Kim Bo Kastekniv', 'Agent 47', 'Tobias Rieper'];
    return honorableGuestNames.includes(name);
  }
}
