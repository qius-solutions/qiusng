import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDoc } from './importdoc';
import { TagModule } from '@qius.solutions/qiusng/tag';
import { BasicDoc } from './basicdoc';
import { StyleDoc } from './styledoc';
import { PropsDoc } from './propsdoc';
import { CarouselModule } from '@qius.solutions/qiusng/carousel';
import { ButtonModule } from '@qius.solutions/qiusng/button';
import { CircularDoc } from './circulardoc';
import { EventsDoc } from './eventsdoc';
import { NumScrollDoc } from './numscrolldoc';
import { ResponsiveDoc } from './responsivedoc';
import { TemplateDoc } from './templatedoc';
import { VerticalDoc } from './verticaldoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { TemplatesDoc } from './templatesdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, CarouselModule, ButtonModule, TagModule],
    declarations: [ImportDoc, BasicDoc, CircularDoc, EventsDoc, NumScrollDoc, PropsDoc, StyleDoc, ResponsiveDoc, TemplateDoc, VerticalDoc, AccessibilityDoc, TemplatesDoc],
    exports: [AppDocModule]
})
export class CarouselDocModule {}
