import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'templates',
    templateUrl: './templates.component.html'
})
export class TemplatesComponent {
    constructor(private titleService: Title, private metaService: Meta) {
        this.titleService.setTitle('Angular Application Templates - QiusNG');
        this.metaService.updateTag({ name: 'description', content: 'QiusNG Angular application templates.' });
    }
}
