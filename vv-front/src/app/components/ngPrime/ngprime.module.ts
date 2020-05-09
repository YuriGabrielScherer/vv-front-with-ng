import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports PrimeNg
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PaginatorModule } from 'primeng/paginator';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
// import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,

    ToastModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    SplitButtonModule,
    MenuModule,
    TieredMenuModule,
    MenubarModule,
    InputTextModule,
    BreadcrumbModule,
    CarouselModule,
    ListboxModule,
    CardModule,
    StepsModule,
    KeyFilterModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    InputMaskModule
  ],
  exports: [
    TableModule,
    ToastModule,
    ButtonModule,
    PaginatorModule,
    SplitButtonModule,
    MenuModule,
    TieredMenuModule,
    MenubarModule,
    InputTextModule,
    BreadcrumbModule,
    CarouselModule,
    ListboxModule,
    CardModule,
    StepsModule,
    KeyFilterModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    InputMaskModule
  ],
  providers: [
    MessageService
  ]
})
export class NgPrimeModule { }
