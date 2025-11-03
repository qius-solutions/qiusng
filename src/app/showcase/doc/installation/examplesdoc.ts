import { Component, Input } from '@angular/core';

@Component({
    selector: 'examples-doc',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>An example start with Angular CLI is available at <a href="https://github.com/qius.solutions/qiusng-quickstart-cli">github</a>.</p>
        </app-docsectiontext>
    </section>`
})
export class ExamplesDoc {
    @Input() id: string;

    @Input() title: string;
}
