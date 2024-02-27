import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StackBlockComponent } from './stack-block.component';

describe('StackBlockComponent', () => {
  let component: StackBlockComponent;
  let fixture: ComponentFixture<StackBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StackBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
