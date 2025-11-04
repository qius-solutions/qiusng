import { Component, Input, ViewChild } from '@angular/core';
import { Code } from '../../domain/code';
import { AppDocSectionTextComponent } from '../../layout/doc/docsectiontext/app.docsectiontext.component';

@Component({
    selector: 'mode-doc',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id" [level]="3" #docsectiontext>
            <p>
                It has two valid values; <i>overlay</i> and <i>modal</i>. In overlay mode, a container element is opened like overlaypanel or dropdown's panel. In modal mode, the container element behaves like popup. This behaviour is similar to a
                dialog component.
            </p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    </section>`
})
export class ModeDoc {
    @Input() id: string;

    @Input() title: string;

    @ViewChild('docsectiontext', { static: true }) docsectiontext: AppDocSectionTextComponent;

    code: Code = {
        typescript: `
import { QiusNGConfig, OverlayOptions } from '@qius.solutions/qiusng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private qiusngConfig: QiusNGConfig) {}

    ngOnInit() {
        this.qiusngConfig.overlayOptions: OverlayOptions = {
            mode: 'modal'
        };
    } 
}`
    };

    code2: Code = {
        basic: `
import { QiusNGConfig, OverlayOptions, ResponsiveOverlayDirectionType } from '@qius.solutions/qiusng/api';

const responsiveOptions: ResponsiveOverlayOptions = {
    // style?: any;                                     // Style of component in given breakpoint or media query
    // styleClass?: string;                             // Style class of component in given breakpoint or media query
    // contentStyle?: any;                              // Style of content in given breakpoint or media query
    // contentStyleClass?: string;                      // Style class of content in given breakpoint or media query
    // breakpoint?: string;                             // Breakpoint required to show component in modal mode. Exp: '640px', '10rem' etc.
    // media?: string;                                  // Media query required to show component in modal mode. Exp: '@media screen and (max-width: 640px)', '@media screen and (min-width: 640px) and (max-width: 900px)' etc.
    // direction?: ResponsiveOverlayDirectionType;      // Direction in which the component will be displayed in modal mode.
    // hideOnEscape?: boolean;                          // Hides overlay when escape key pressed.
}

this.qiusngConfig.overlayOptions: OverlayOptions = {
    responsive: responsiveOptions
};`
    };
}
