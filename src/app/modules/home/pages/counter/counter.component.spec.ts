import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { counterComponent } from './counter.component';

describe('counterComponent', () => {
  let component: counterComponent;
  let fixture: ComponentFixture<counterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [counterComponent],
      imports: [StoreModule.forRoot({ count: counterReducer })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(counterComponent);
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
});
