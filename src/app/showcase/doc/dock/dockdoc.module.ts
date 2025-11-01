import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogModule } from '@qius.solutions/qiusng/dialog';
import { DockModule } from '@qius.solutions/qiusng/dock';
import { GalleriaModule } from '@qius.solutions/qiusng/galleria';
import { MenubarModule } from '@qius.solutions/qiusng/menubar';
import { TerminalModule } from '@qius.solutions/qiusng/terminal';
import { TreeModule } from '@qius.solutions/qiusng/tree';
import { RadioButtonModule } from '@qius.solutions/qiusng/radiobutton';
import { ToastModule } from '@qius.solutions/qiusng/toast';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { StyleDoc } from './styledoc';
import { AdvancedDoc } from './advanceddoc';
import { BasicDoc } from './basicdoc';
import { EventsDoc } from './eventsdoc';
import { ImportDoc } from './importdoc';
import { MenuItemDoc } from './menuitemdoc';
import { MethodsDoc } from './methodsdoc';
import { PropsDoc } from './propsdoc';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, DockModule, FormsModule, RadioButtonModule, MenubarModule, ToastModule, DialogModule, GalleriaModule, TerminalModule, TreeModule, AppDocModule],
    declarations: [AdvancedDoc, BasicDoc, EventsDoc, ImportDoc, MenuItemDoc, MethodsDoc, PropsDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class DockDocModule {}
