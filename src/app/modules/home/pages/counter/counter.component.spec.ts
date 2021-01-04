import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
      imports: [StoreModule.forRoot({ count: counterReducer })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as counter 0'`, () => {
    const counter = fixture.componentInstance;
    counter.count$.subscribe((res) => {
      expect(res).toEqual(0);
    });
  });

  it('should have a increment button', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#increment');
    expect(btn).toBeTruthy();
  });

  it('should have a decrement button', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#decrement');
    expect(btn).toBeTruthy();
  });

  it('should have a reset button', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#reset');
    expect(btn).toBeTruthy();
  });

  it('should have a random button', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#random');
    expect(btn).toBeTruthy();
  });
});
