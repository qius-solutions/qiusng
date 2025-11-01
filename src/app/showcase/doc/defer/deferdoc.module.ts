import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { DeferModule } from '@qius.solutions/qiusng/defer';
import { TableModule } from '@qius.solutions/qiusng/table';
import { ToastModule } from '@qius.solutions/qiusng/toast';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';
import { EventsDoc } from './eventsdoc';
import { DataTableDoc } from './datatabledoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, DeferModule, TableModule, ToastModule],
    exports: [ImportDoc, BasicDoc, EventsDoc, DataTableDoc, AppDocModule],
    declarations: [ImportDoc, BasicDoc, EventsDoc, DataTableDoc]
})
export class DeferDocModule {}
