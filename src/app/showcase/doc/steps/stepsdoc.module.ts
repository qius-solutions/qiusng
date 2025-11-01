import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from '@qius.solutions/qiusng/dropdown';
import { InputTextModule } from '@qius.solutions/qiusng/inputtext';
import { InputMaskModule } from '@qius.solutions/qiusng/inputmask';
import { CheckboxModule } from '@qius.solutions/qiusng/checkbox';
import { StepsModule } from '@qius.solutions/qiusng/steps';
import { ToastModule } from '@qius.solutions/qiusng/toast';
import { CardModule } from '@qius.solutions/qiusng/card';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDoc } from './basicdoc';
import { ConfirmationDemo } from './confirmationdemo';
import { EventsDoc } from './eventsdoc';
import { ImportDoc } from './importdoc';
import { InteractiveDoc } from './interactivedoc';
import { MenuItemDoc } from './menuitemdoc';
import { MethodsDoc } from './methodsdoc';
import { PaymentDemo } from './paymentdemo';
import { PersonalDemo } from './personaldemo';
import { PropsDoc } from './propsdoc';
import { RoutingDoc } from './routingdoc';
import { SeatDemo } from './seatdemo';
import { StyleDoc } from './styledoc';
import { TicketService } from '../../service/ticketservice';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, StepsModule, ToastModule, AppDocModule, FormsModule, DropdownModule, InputTextModule, InputMaskModule, CheckboxModule, CardModule],
    declarations: [BasicDoc, ImportDoc, MenuItemDoc, MethodsDoc, PropsDoc, StyleDoc, InteractiveDoc, EventsDoc, ConfirmationDemo, PaymentDemo, PersonalDemo, SeatDemo, RoutingDoc, AccessibilityDoc],
    exports: [AppDocModule],
    providers: [TicketService]
})
export class StepsDocModule {}
