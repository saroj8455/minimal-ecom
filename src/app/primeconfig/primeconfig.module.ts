import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NgIf,
    NgFor,
    NgForOf,
    ButtonModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    PanelMenuModule,
  ],
})
export class PrimeconfigModule {}
