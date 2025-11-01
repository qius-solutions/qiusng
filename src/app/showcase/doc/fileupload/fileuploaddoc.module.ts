import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from '@qius.solutions/qiusng/fileupload';
import { ButtonModule } from '@qius.solutions/qiusng/button';
import { ToastModule } from '@qius.solutions/qiusng/toast';
import { TagModule } from '@qius.solutions/qiusng/tag';
import { ProgressBarModule } from '@qius.solutions/qiusng/progressbar';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AdvancedDoc } from './advanceddoc';
import { BasicDoc } from './basicdoc';
import { EventsDoc } from './eventsdoc';
import { ImportDoc } from './importdoc';
import { MethodsDoc } from './methodsdoc';
import { PropsDoc } from './propsdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { TemplatesDoc } from './templatesdoc';
import { AutoDoc } from './autodoc';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, FormsModule, AppCodeModule, AppDocModule, ButtonModule, TagModule, ProgressBarModule, ToastModule, FileUploadModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, StyleDoc, PropsDoc, EventsDoc, TemplatesDoc, AdvancedDoc, MethodsDoc, AutoDoc, AccessibilityDoc]
})
export class FileUploadDocModule {}
