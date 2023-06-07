import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {

  @Input() title: string = '';
  @Input() mainContent!: TemplateRef<any>;
  public isVisible = false;

  constructor(private modal: NzModalRef){

  }

  ngOnInit(): void {
    this.isVisible = true;
  }

  onCancelClick() {
    this.modal.destroy();
  }
}
