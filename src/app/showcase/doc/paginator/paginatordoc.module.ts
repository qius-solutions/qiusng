import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@qius.solutions/qiusng/button';
import { DividerModule } from '@qius.solutions/qiusng/divider';
import { DropdownModule } from '@qius.solutions/qiusng/dropdown';
import { PaginatorModule } from '@qius.solutions/qiusng/paginator';
import { SliderModule } from '@qius.solutions/qiusng/slider';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { EventsDoc } from './eventsdoc';
import { ImagesDoc } from './imagesdoc';
import { ImportDoc } from './importdoc';
import { PropsDoc } from './propsdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { TemplatesDoc } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, PaginatorModule, ButtonModule, DividerModule, SliderModule, RouterModule, DropdownModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, ImagesDoc, StyleDoc, PropsDoc, EventsDoc, AccessibilityDoc, TemplatesDoc]
})
export class PaginatorDocModule {}
