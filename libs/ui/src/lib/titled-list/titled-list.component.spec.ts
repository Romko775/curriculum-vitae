import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitledListComponent } from './titled-list.component';

describe('TitledListComponent', () => {
  let component: TitledListComponent;
  let fixture: ComponentFixture<TitledListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitledListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TitledListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
