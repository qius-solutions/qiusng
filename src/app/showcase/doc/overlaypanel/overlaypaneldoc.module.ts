import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayPanelModule } from '@qius.solutions/qiusng/overlaypanel';
import { ButtonModule } from '@qius.solutions/qiusng/button';
import { TableModule } from '@qius.solutions/qiusng/table';
import { ToastModule } from '@qius.solutions/qiusng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { PropsDoc } from './propsdoc';
import { StyleDoc } from './styledoc';
import { TemplatesDoc } from './templatesdoc';
import { DataTableDoc } from './datatabledoc';
import { TemplateDoc } from './templatedoc';
import { TargetDoc } from './targetdoc';
import { EventsDoc } from './eventsdoc';
import { MethodsDoc } from './methodsdoc';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, OverlayPanelModule, ButtonModule, TableModule, ToastModule, AppDocModule],
    declarations: [BasicDoc, ImportDoc, PropsDoc, StyleDoc, TemplatesDoc, DataTableDoc, TemplateDoc, TargetDoc, EventsDoc, MethodsDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class OverlayPanelDocModule {}
