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

import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,

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
    StepsModule
    // DialogModule
  ],
  exports: [
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
    StepsModule
    // DialogModule
  ]
})
export class NgPrimeModule { }
