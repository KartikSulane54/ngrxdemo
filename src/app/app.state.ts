import { Person } from './models/app.person.model';

// 1. this will define the app state
export  interface AppState {
  readonly persons: Person[];
}
