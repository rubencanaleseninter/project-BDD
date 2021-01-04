import { createAction, props } from '@ngrx/store';

export const increment = createAction('Increment');
export const decrement = createAction('Decrement');
export const reset = createAction('Reset');
export const random = createAction('Random');
export const jump = createAction('Jump', props<{ num: number }>());
