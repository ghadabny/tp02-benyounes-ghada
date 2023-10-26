import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire.component';

describe('FormulaireComponent', () => {
  let component: FormulaireComponent;
  let fixture: ComponentFixture<FormulaireComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [FormulaireComponent],
      imports: [ReactiveFormsModule] 
    }).compileComponents();
    fixture = TestBed.createComponent(FormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


