import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@qius.solutions/qiusng/button';
import { InputSwitchModule } from '@qius.solutions/qiusng/inputswitch';
import { RadioButtonModule } from '@qius.solutions/qiusng/radiobutton';
import { SidebarModule } from '@qius.solutions/qiusng/sidebar';
import { AppConfigComponent } from './app.config.component';

@NgModule({
    imports: [CommonModule, FormsModule, SidebarModule, InputSwitchModule, ButtonModule, RadioButtonModule],
    exports: [AppConfigComponent],
    declarations: [AppConfigComponent]
})
export class AppConfigModule {}
