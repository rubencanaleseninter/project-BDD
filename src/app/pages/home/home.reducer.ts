import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './home.actions';

export const initialState = 0;

const Reduce = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function Reducer(state: number | undefined, action: Action): any {
  return Reduce(state, action);
}
