import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer">
            <div>
                <span>QiusNG {{ version }} by </span>
                <a href="https://www.qius.solutions.com.tr">Qius Solutions</a>
            </div>
        </div>
    `
})
export class AppFooterComponent {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    version = require('package.json') && require('package.json').version;
}
