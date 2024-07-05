import { NgModule, Directive, ElementRef, HostListener, DoCheck, Optional, ChangeDetectorRef, AfterViewInit, Input, inject } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Nullable } from 'primeng/ts-helpers';
import { PrimeNGConfig } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import style from './style';

/**
 * InputText directive is an extension to standard input element with theming.
 * @group Components
 */
@Directive({
    selector: '[pInputText]',
    host: {
        class: 'p-inputtext p-component p-element',
        '[class.p-filled]': 'filled',
        '[class.p-variant-filled]': 'variant === "filled" || config.inputStyle() === "filled"'
    }
})
export class InputText extends BaseComponent implements DoCheck, AfterViewInit {
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    @Input() variant: 'filled' | 'outlined' = 'outlined';

    filled: Nullable<boolean>;

    // ngModel: NgModel = inject(@Optional(NgModel));

    _componentStyle = style;

    constructor(@Optional() public ngModel: NgModel) {
        super();
    }

    // constructor(
    //     public el: ElementRef,
    //     @Optional() public ngModel: NgModel,
    //     private cd: ChangeDetectorRef,
    //     public config: PrimeNGConfig
    // ) {}

    ngAfterViewInit() {
        this.updateFilledState();
        this.cd.detectChanges();
    }

    ngDoCheck() {
        this.updateFilledState();
    }

    @HostListener('input', ['$event'])
    onInput() {
        this.updateFilledState();
    }

    updateFilledState() {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) || (this.ngModel && this.ngModel.model);
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [InputText],
    declarations: [InputText]
})
export class InputTextModule {}
