import { DialogRef } from "@angular/cdk/dialog";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

interface SignUpForm {
  name: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-sign-up-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent implements OnInit {
  ngOnInit(): void {
    document.body.classList.add('modal-open');
  }
  protected signUpForm = new FormGroup<SignUpForm>({
    name: new FormControl<string>('', { 
      nonNullable: true, 
      validators: Validators.required
    }),
    email: new FormControl<string>('', {
      nonNullable: true, 
      validators: [
        Validators.required,
        Validators.email
      ]
    })
  });

  protected dialogRef = inject(DialogRef, { optional: true });
  protected closeModal() {
    this.dialogRef?.close();
    document.body.classList.remove('modal-open');
  }
}

//source: https://youtu.be/Tsy28T38KtY