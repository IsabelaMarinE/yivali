import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzModalModule } from 'ng-zorro-antd/modal'


@NgModule({
  declarations: [
    MenuComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzModalModule
  ],
  exports: [
    MenuComponent,
    ModalComponent
  ],
  providers: [
    ModalService,
    NzModalService
  ],
})
export class ComponentsModule { }
