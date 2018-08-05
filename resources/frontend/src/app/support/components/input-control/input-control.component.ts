import {
    Component,
    ContentChild,
    ElementRef,
    forwardRef,
    Injector,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    TemplateRef
} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';

const messages = {
    required: 'Preencha este campo.',
    email: 'Preencha um e-mail válido.',
    validateEqual: 'Os campos não correspondem.',
    pattern: 'Formato inválido.',
    checkEmail: 'E-mail já cadastrado no sistema.'
};

@Component({
    selector: 'app-input-control',
    templateUrl: './input-control.component.html',
    styleUrls: ['./input-control.component.less'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputControlComponent),
            multi: true
        }
    ]
})
export class InputControlComponent implements ControlValueAccessor, OnInit, OnChanges {

    private _disabled: boolean;
    private control: AbstractControl = null;

    @Input('isDisabled')
    set disabled(isDisabled) {
        this._disabled = isDisabled;
    }

    get disabled() {
        return this._disabled;
    }

    @Input('readonly') set readonly(isReadOnly) {
        this.disabled = isReadOnly;
    }

    @Input() type = 'text';

    @Input() label: string = null;

    @Input() placeholder = '';

    @Input() formControlName: string;

    @Input() inputClass = '';

    @Input() inputGroupClass = 'input-group-btn';

    @Input('containerClass') containerClass = 'form-material form-material-primary floating';

    @Input() inputMask = null;

    @Input() minlength = null;

    @Input() maxlength = null;

    @Input() rows = null;

    @Input() allowSuccess = false;

    @Input() showValidationMessage = true;

    @Input() name = '';

    @ContentChild('inputGroupBtn') inputGroupBtn: TemplateRef<any>;

    private onChange: any;

    private onTouched: any;

    public value: any = '';

    static guidGenerator() {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    }

    public get errors() {
        if (this.control && this.control.errors) {
            const errors = Object.keys(this.control.errors);
            return errors.map((err) => messages[err]);
        }
        return [];
    }

    public get valid(): boolean {
        return this.control ? this.control.valid : true;
    }

    public get touched(): boolean {
        return this.control ? this.control.touched : true;
    }

    public get dirty(): boolean {
        return this.control ? this.control.dirty : true;
    }

    constructor(private injector: Injector,
                private elementRef: ElementRef<HTMLElement>) {
    }

    ngOnInit() {
        if (!this.name) {
            this.name = InputControlComponent.guidGenerator();
        }
        try {
            this.control = this.injector.get(NgControl);
        } catch (e) {
            this.control = null;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {

    }

    setTouched() {
        if (this.onTouched) {
            this.onTouched();
        }
    }

    setValue(value) {
        this.value = value;
        if (this.onChange) {
            this.onChange(this.value);
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    writeValue(obj: any): void {
        if (obj && this.value !== obj) {
            this.value = obj;
        }
    }
}
