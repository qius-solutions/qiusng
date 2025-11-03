import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RadioButton, RadioButtonModule } from './radiobutton';

@Component({
    template: ` <p-radioButton [(ngModel)]="city"></p-radioButton> `
})
class TestRadioButtonComponent {
    city: string;
}

describe('RadioButton', () => {
    let radiobutton: RadioButton;
    let fixture: ComponentFixture<TestRadioButtonComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, RadioButtonModule, ReactiveFormsModule, FormsModule],
            declarations: [TestRadioButtonComponent]
        });

        fixture = TestBed.createComponent(TestRadioButtonComponent);
        radiobutton = fixture.debugElement.children[0].componentInstance;
    });

    it('should change name inputId value style styleClass label labelStyleClass and tabIndex', () => {
        radiobutton.name = 'qiusng';
        radiobutton.inputId = 'qius';
        radiobutton.value = 'Qiusng';
        radiobutton.style = { height: '300px' };
        radiobutton.styleClass = 'Qiusng ROCKS!';
        radiobutton.label = 'Qius';
        radiobutton.labelStyleClass = 'Qiusng ROCKS';
        radiobutton.tabindex = 13;
        fixture.detectChanges();

        const radiobuttonEl = fixture.debugElement.query(By.css('div'));
        const inputEl = fixture.debugElement.query(By.css('input'));
        const labelEl = fixture.debugElement.query(By.css('label'));
        expect(inputEl.nativeElement.name).toEqual('qiusng');
        expect(inputEl.nativeElement.value).toEqual('Qiusng');
        expect(inputEl.nativeElement.id).toEqual('qius');
        expect(inputEl.nativeElement.tabIndex).toEqual(13);
        expect(radiobuttonEl.nativeElement.className).toContain('Qiusng ROCKS!');
        expect(radiobuttonEl.nativeElement.style.height).toEqual('300px');
        expect(labelEl.nativeElement.className).toContain('Qiusng ROCKS');
        expect(labelEl.nativeElement.textContent).toEqual('Qius');
        expect(labelEl.nativeElement.htmlFor).toEqual('qius');
    });

    it('should display active state initially when checked by default', () => {
        fixture.detectChanges();

        radiobutton.checked = true;
        radiobutton.inputViewChild.nativeElement.checked = true;
        fixture.detectChanges();

        radiobutton.cd.detectChanges();
        const boxEl = fixture.nativeElement.querySelector('.p-radiobutton-box');
        expect(boxEl.className).toContain('p-highlight');
    });

    it('should disabled', () => {
        radiobutton.value = 'qius';
        radiobutton.disabled = true;
        radiobutton.label = 'qius';
        radiobutton.cd.detectChanges();

        const handleClickSpy = spyOn(radiobutton, 'handleClick').and.callThrough();
        const selectSpy = spyOn(radiobutton, 'select').and.callThrough();
        const radiobuttonEl = fixture.debugElement.queryAll(By.css('div'))[2];
        const inputEl = fixture.debugElement.query(By.css('input'));
        const labelEl = fixture.debugElement.query(By.css('label'));

        expect(inputEl.nativeElement.disabled).toEqual(true);
        expect(radiobuttonEl.nativeElement.className).toContain('p-disabled');
        expect(labelEl.nativeElement.className).toContain('p-disabled');
        radiobuttonEl.nativeElement.click();
        radiobutton.cd.detectChanges();

        expect(handleClickSpy).toHaveBeenCalled();
        expect(selectSpy).not.toHaveBeenCalled();
        expect(radiobutton.checked).toBeFalsy();
        labelEl.nativeElement.click();
        radiobutton.cd.detectChanges();

        expect(handleClickSpy).toHaveBeenCalledTimes(1);
        expect(selectSpy).toHaveBeenCalled();
        expect(radiobutton.checked).toBeFalsy();
    });

    it('should click checkbox', () => {
        fixture.detectChanges();

        let value;
        radiobutton.onClick.subscribe((event) => (value = 5));
        const handleClickSpy = spyOn(radiobutton, 'handleClick').and.callThrough();
        const selectSpy = spyOn(radiobutton, 'select').and.callThrough();
        const onFocusSpy = spyOn(radiobutton, 'onInputFocus').and.callThrough();
        const radiobuttonEl = fixture.debugElement.queryAll(By.css('div'))[2];
        const inputEl = fixture.debugElement.query(By.css('input'));
        inputEl.nativeElement.dispatchEvent(new Event('focus'));
        radiobuttonEl.nativeElement.click();
        fixture.detectChanges();

        expect(handleClickSpy).toHaveBeenCalled();
        expect(selectSpy).toHaveBeenCalled();
        expect(onFocusSpy).toHaveBeenCalled();
        expect(radiobutton.checked).toEqual(true);
        expect(value).toEqual(5);
        expect(radiobutton.focused).toEqual(true);
        expect(radiobuttonEl.nativeElement.className).toContain('p-focus');
    });

    it('should click label', () => {
        radiobutton.label = 'qius';
        fixture.detectChanges();

        let value;
        radiobutton.onClick.subscribe((event) => (value = 5));
        const handleClickSpy = spyOn(radiobutton, 'handleClick').and.callThrough();
        const selectSpy = spyOn(radiobutton, 'select').and.callThrough();
        const onFocusSpy = spyOn(radiobutton, 'onInputFocus').and.callThrough();
        const onBlurSpy = spyOn(radiobutton, 'onInputBlur').and.callThrough();
        const inputEl = fixture.debugElement.query(By.css('input'));
        const labelEl = fixture.debugElement.query(By.css('label'));
        inputEl.nativeElement.dispatchEvent(new Event('focus'));
        labelEl.nativeElement.click();
        fixture.detectChanges();

        expect(handleClickSpy).not.toHaveBeenCalled();
        expect(selectSpy).toHaveBeenCalled();
        expect(onFocusSpy).toHaveBeenCalled();
        expect(radiobutton.checked).toEqual(true);
        expect(labelEl.nativeElement.className).toContain('p-radiobutton-label-focus');
        expect(value).toEqual(5);
        inputEl.nativeElement.dispatchEvent(new Event('blur'));
        fixture.detectChanges();

        expect(radiobutton.focused).toEqual(false);
        expect(onBlurSpy).toHaveBeenCalled();
    });

    it('should call writeValue', () => {
        radiobutton.label = 'qius';
        radiobutton.value = 'qius';
        fixture.detectChanges();

        const writeValueSpy = spyOn(radiobutton, 'writeValue').and.callThrough();
        radiobutton.writeValue('qius');
        fixture.detectChanges();

        expect(writeValueSpy).toHaveBeenCalled();
        expect(radiobutton.checked).toEqual(true);
    });
});
