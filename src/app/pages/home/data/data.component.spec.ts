import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { Reducer } from '../home.reducer';
import { DataComponent } from './data.component';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataComponent],
      imports: [StoreModule.forRoot({ count: Reducer })]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as counter 0'`, () => {
    const data = fixture.componentInstance;
    data.count$.subscribe((res) => {
      expect(res).toEqual(0);
    });
  });
});
