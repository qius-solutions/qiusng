import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'import-doc',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Configuration is managed by the <i>QiusNGConfig</i> instance imported from <i>qiusng/api</i> and injected via dependency injection.</p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    </section>`
})
export class ImportDoc {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        typescript: `import { QiusNGConfig } from '@qius.solutions/qiusng/api';`
    };
}
