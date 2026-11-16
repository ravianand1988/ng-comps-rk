import { Component, signal, viewChild } from '@angular/core';
import { Dialog } from '../../shared/ui';

@Component({
  imports: [Dialog],
  selector: 'app-dialog-example',
  styleUrl: './dialog-example.scss',
  templateUrl: './dialog-example.html',
})
export class DialogExample {
  customDialog = viewChild<Dialog>('customDialog');
  openDialog = signal(false);
  openCustomDialog = signal(false);

  onOpenDialog() {
    this.openDialog.set(true);
  }
  onCustomOpenDialog() {
    this.openCustomDialog.set(true);
  }

  onConfirm(event: string) {
    console.log('on confirm: ', event);
  }

  onCustomClose() {
    this.customDialog()?.onClose();
  }

  onCustomConfirm() {
    console.log('custom dialog confirm clicked..');
  }
}
