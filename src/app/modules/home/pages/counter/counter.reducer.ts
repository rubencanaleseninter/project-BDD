import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, random, jump } from './counter.actions';

export const initialState = 0;

const reducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
  on(random, (state) => Math.floor(Math.random() * 100)),
  on(jump, (state, { num }) => num)
);

export function counterReducer(state: number | undefined, action: Action): any {
  return reducer(state, action);
}
