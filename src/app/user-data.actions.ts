import {createAction, props} from '@ngrx/store';

export const setGivenName = createAction('[User Data] Set Given Name', props<{givenName: string}>());
export const setFamilyName = createAction('[User Data] Set Family Name', props<{familyName: string}>());
