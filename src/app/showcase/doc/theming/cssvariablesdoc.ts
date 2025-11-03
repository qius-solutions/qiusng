import { Component, Input } from '@angular/core';

@Component({
    selector: 'css-variables-doc',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Each QiusNG theme exports numerous CSS variables, refer to <a routerLink="/colors">Colors</a> page for more details.</p>
        </app-docsectiontext>
    </section>`
})
export class CSSVariablesDoc {
    @Input() id: string;

    @Input() title: string;
}
