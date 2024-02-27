import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatesBlockComponent } from './dates-block.component';

describe('DatesBlockComponent', () => {
  let component: DatesBlockComponent;
  let fixture: ComponentFixture<DatesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatesBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
