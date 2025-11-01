import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BadgeModule } from '@qius.solutions/qiusng/badge';
import { ButtonModule } from '@qius.solutions/qiusng/button';
import { CalendarModule } from '@qius.solutions/qiusng/calendar';
import { ChartModule } from '@qius.solutions/qiusng/chart';
import { CheckboxModule } from '@qius.solutions/qiusng/checkbox';
import { ChipModule } from '@qius.solutions/qiusng/chip';
import { DropdownModule } from '@qius.solutions/qiusng/dropdown';
import { InputNumberModule } from '@qius.solutions/qiusng/inputnumber';
import { InputSwitchModule } from '@qius.solutions/qiusng/inputswitch';
import { ListboxModule } from '@qius.solutions/qiusng/listbox';
import { ProgressBarModule } from '@qius.solutions/qiusng/progressbar';
import { RadioButtonModule } from '@qius.solutions/qiusng/radiobutton';
import { SelectButtonModule } from '@qius.solutions/qiusng/selectbutton';
import { SidebarModule } from '@qius.solutions/qiusng/sidebar';
import { SliderModule } from '@qius.solutions/qiusng/slider';
import { TableModule } from '@qius.solutions/qiusng/table';
import { TabMenuModule } from '@qius.solutions/qiusng/tabmenu';
import { TreeModule } from '@qius.solutions/qiusng/tree';
import { AppNewsModule } from '../../layout/news/app.news.module';
import { LandingComponent } from './landing.component';

@NgModule({
    imports: [
        CommonModule,
        NgOptimizedImage,
        FormsModule,
        SidebarModule,
        InputSwitchModule,
        ButtonModule,
        RadioButtonModule,
        InputNumberModule,
        TabMenuModule,
        ChartModule,
        ProgressBarModule,
        TreeModule,
        ChipModule,
        SelectButtonModule,
        SliderModule,
        BadgeModule,
        CalendarModule,
        TableModule,
        DropdownModule,
        ListboxModule,
        RouterModule,
        CheckboxModule,
        AppNewsModule
    ],
    exports: [LandingComponent],
    declarations: [LandingComponent]
})
export class LandingModule {}
