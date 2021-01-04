import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, random, jump } from './counter.actions';

@Component({
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }

  random(): void {
    this.store.dispatch(random());
  }

  jump(): void {
    this.store.dispatch(jump({ num: 10 }));
  }
}
