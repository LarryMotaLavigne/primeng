import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Code } from '../../domain/code';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'basic-doc',
    template: `
        <app-docsectiontext>
            <p>A simple Panel is created with a <i>header</i> property along with the content as children.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <button (click)="updatePT()">yoo</button>
            <p-panel header="Header" [toggleable]="true">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </p-panel>
        </div>
        <app-code [code]="code" selector="panel-basic-demo"></app-code>
    `
})
export class BasicDoc {
    myMethod(params) {
        const { props, state } = params;

        return {
            class: {
                'p-panel': true,
                'p-panel-collapsed': props.collapsed,
                'p-panel-expanded': !props.collapsed,
                'p-panel-toggleable': props.toggleable,
                'p-CETIN': !props.collapsed,
                'p-PRIME': props.collapsed
            }
        };
    }
    updatePT() {
        // this.primeng._pt.set('panelden setlendi');
    }

    public primeng = inject(PrimeNGConfig);

    constructor(public cd: ChangeDetectorRef) {
        // this.primeng.pt.update((pt) => ({ ...pt, panel: { ...pt.panel, header: 'hello world' } }));
    }

    code: Code = {
        basic: `<p-panel header="Header">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</p-panel>`,

        html: `
<div class="card flex justify-content-center">
    <p-panel header="Header">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-panel>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'panel-basic-demo',
    templateUrl: './panel-basic-demo.html'
})
export class PanelBasicDemo {}`
    };
}
