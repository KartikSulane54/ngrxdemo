import {Person} from '../models/app.person.model';
import * as PersonActions from '../actions/app.person.actions';
// 2. defining the reducer with Initial State is blank
export function reducer(state: Person[] = [], action: PersonActions.Actions) {
  switch (action.type) {
    case PersonActions.ADD_PERSON:
        return [...state, action.payload];
    case PersonActions.REMOVE_PERSON:
         state.forEach((p, index) => {
            if (p.Id === action.payload.Id) {
              state.splice(index, 1);
            }
         });
         return state;
    default:
        return state;
  }
}
