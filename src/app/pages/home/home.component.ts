import { Dialog } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly dialog = inject(Dialog);
  protected  openModal() {
    this.dialog.open(SignUpFormComponent, {disableClose: true});
  }

}
