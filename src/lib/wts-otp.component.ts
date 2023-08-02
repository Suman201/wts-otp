import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, Self, Optional, ViewContainerRef } from '@angular/core';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'wts-otp',
  templateUrl: './wts-otp.component.html',
  styleUrls: ['./wts-otp.component.scss'],
  
})
export class WtsOtpComponent {
  @Input() digits: number = 4;
  @Input() placholder: string = '-';
  @Input() type: string = 'text';
  @Output() getOTP: EventEmitter<any> = new EventEmitter();
  @ViewChild('OTPMaster', { read: ElementRef, static: true }) private OTPMaster!: ElementRef;
 
  protected OTP: string = '';
  protected inputs: Array<any> = []

  constructor( ) {
    this.init();
  }




  private inputInit(): void {
    const otp = this.OTPMaster.nativeElement;
    let allValue: any = [], oldvalue: any;
    if (otp) {
      const inputs = otp.querySelectorAll('input');
       for (let index = 0; index < inputs.length; index++) {
        const item = inputs.item(index);
        const nextItem = inputs.item(index + 1);

        item.addEventListener('input', (e:Event) => {
          let value: Number|any = parseInt((<HTMLInputElement>e.target).value);

     
          if (!isNaN(parseInt((<HTMLInputElement>e.target).value)) && !isNaN(value)) {
            if (oldvalue) {
              const oldvalueIndex = (<HTMLInputElement>e.target).value.indexOf(oldvalue);
              oldvalueIndex === 0 ? (value = parseInt((<HTMLInputElement>e.target).value.slice(1))) : value = parseInt((<HTMLInputElement>e.target).value.slice(0, 1));
              item.value = value.toString();
            }

            if (value.toString().length > 1) {
              item.value = value.toString()[0];
              let remainInputs = inputs.length - index, count = 0;
              while (count < Math.min(remainInputs, value.toString().length)) {
                inputs.item(index + count).value = value.toString()[count];
                allValue[index + count] = inputs.item(index + count).value;
                const nextItem = inputs.item(count + index + 1)
                if (nextItem) nextItem.focus();
                count++;
              }
            } else {
              if (nextItem) nextItem.focus();
            }
          } else {
            item.value = oldvalue;
          }
          allValue[index] = item.value;

          const t = (allValue.toString()).replaceAll(',', '');
          t.length === this.digits && this.getOTP.next(t);
          this.OTP = t;

        });
        item.addEventListener('keydown', (e:KeyboardEvent) => {
          oldvalue = inputs.item(index).value;
          if (e.key === 'Backspace' || e.key === 'Delete') {
            delete allValue[index];
            inputs.item(index).value = '';
            !oldvalue && index > 0 && setTimeout(() => { inputs.item(index - 1).focus() }, 0);
            const t = (allValue.toString()).replaceAll(',', '');
            this.OTP = t;

          }
        });
      }
    }

  }


 

  private init(): void | any {
    if (!this.OTPMaster) return setTimeout(() => { this.init(); }, 100);
    let count = 0;
    while (count < this.digits) {
      this.inputs.push({ item: count })
      count++;
    }
 
    setTimeout(() => {
      this.inputInit(); 
    }, 100);
  }

}
