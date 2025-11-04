import { Component, Input } from '@angular/core';
import { MenuItem, QiusIcons } from '@qius.solutions/qiusng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'qius-icons-constants-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Constants API is available to reference icons easily when used programmatically.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-menu [model]="items"></p-menu>
        </div>
        <app-code [code]="code" selector="qius-icons-constants-demo" [hideToggleCode]="true"></app-code>
    </section>`
})
export class ConstantsDoc {
    @Input() id: string;

    @Input() title: string;

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'New',
                icon: QiusIcons.PLUS
            },
            {
                label: 'Delete',
                icon: QiusIcons.TRASH
            }
        ];
    }

    code: Code = {
        typescript: `
import { Component } from '@angular/core';
import { QiusIcons, MenuItem } from '@qius.solutions/qiusng/api';
        
@Component({
    selector: 'qius-icons-constants-demo',
    templateUrl: './qius-icons-constants-demo.html'
})
export class QiusIconsConstantsDemo {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'New',
                icon: QiusIcons.PLUS,
            },
            {
                label: 'Delete',
                icon: QiusIcons.TRASH
            }
        ];
    }
}`
    };
}
