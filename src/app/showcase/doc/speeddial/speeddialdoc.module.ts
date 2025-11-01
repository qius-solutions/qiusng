import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessagesModule } from '@qius.solutions/qiusng/messages';
import { SpeedDialModule } from '@qius.solutions/qiusng/speeddial';
import { ToastModule } from '@qius.solutions/qiusng/toast';
import { TooltipModule } from '@qius.solutions/qiusng/tooltip';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { CircleDoc } from './circledoc';
import { CustomDoc } from './customdoc';
import { EventsDoc } from './eventsdoc';
import { ImportDoc } from './importdoc';
import { LinearDoc } from './lineardoc';
import { MaskDoc } from './maskdoc';
import { PropsDoc } from './propsdoc';
import { QuarterCircleDoc } from './quartercircledoc';
import { SemiCircleDoc } from './semicircledoc';
import { StyleDoc } from './styledoc';
import { TemplatesDoc } from './templatesdoc';
import { TooltipDoc } from './tooltipdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, SpeedDialModule, MessagesModule, ToastModule, TooltipModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, LinearDoc, CircleDoc, SemiCircleDoc, QuarterCircleDoc, TooltipDoc, MaskDoc, CustomDoc, StyleDoc, PropsDoc, TemplatesDoc, EventsDoc, AccessibilityDoc]
})
export class SpeedDialDocModule {}
