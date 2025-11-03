import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@qius.solutions/qiusng/button';
import { DataViewModule } from '@qius.solutions/qiusng/dataview';
import { DropdownModule } from '@qius.solutions/qiusng/dropdown';
import { RatingModule } from '@qius.solutions/qiusng/rating';
import { TagModule } from '@qius.solutions/qiusng/tag';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { EventsDoc } from './eventsdoc';
import { ImportDoc } from './importdoc';
import { LayoutDoc } from './layoutdoc';
import { PaginationDoc } from './paginationdoc';
import { QiusflexDoc } from './qiusflexdoc';
import { PropsDoc } from './propsdoc';
import { SortingDoc } from './sortingdoc';
import { StyleDoc } from './styledoc';
import { TemplatesDoc } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, DataViewModule, DropdownModule, ButtonModule, RouterModule, RatingModule, TagModule, FormsModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, QiusflexDoc, BasicDoc, PaginationDoc, SortingDoc, LayoutDoc, StyleDoc, PropsDoc, EventsDoc, TemplatesDoc, AccessibilityDoc]
})
export class DataViewDocModule {}
