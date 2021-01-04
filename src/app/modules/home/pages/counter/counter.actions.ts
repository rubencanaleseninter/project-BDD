import { createAction, props } from '@ngrx/store';

export const increment = createAction('[counter component] Increment');
export const decrement = createAction('[counter component] Decrement');
export const reset = createAction('[counter component] Reset');
export const random = createAction('[counter component] Random');
export const jump = createAction('[counter component] Jump', props<{ num: number }>());
