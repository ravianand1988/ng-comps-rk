import {
  Component,
  effect,
  ElementRef,
  model,
  output,
  viewChild,
} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dialog',
  styleUrl: './dialog.scss',
  templateUrl: './dialog.html',
})
export class Dialog {
  dialogRk = viewChild<ElementRef<HTMLDialogElement>>('dialogRk');
  open = model<boolean>(false);

  confirm = output<string>();

  constructor() {
    effect(() => {
      if (this.open()) {
        this.dialogRk()?.nativeElement.showModal();
      }
    });
  }

  onClose() {
    this.open.set(false);
    this.dialogRk()?.nativeElement.close();
  }

  onConfirm() {
    this.confirm.emit('confirm');
  }
}
