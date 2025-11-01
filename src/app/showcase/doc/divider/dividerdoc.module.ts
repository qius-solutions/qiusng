import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@qius.solutions/qiusng/button';
import { DividerModule } from '@qius.solutions/qiusng/divider';
import { InputTextModule } from '@qius.solutions/qiusng/inputtext';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ContentDoc } from './contentdoc';
import { ImportDoc } from './importdoc';
import { LoginDoc } from './logindoc';
import { PropsDoc } from './propsdoc';
import { StyleDoc } from './styledoc';
import { TypeDoc } from './typedoc';
import { VerticalDoc } from './verticaldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, DividerModule, ButtonModule, InputTextModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TypeDoc, ContentDoc, VerticalDoc, LoginDoc, StyleDoc, PropsDoc, AccessibilityDoc]
})
export class DividerDocModule {}
