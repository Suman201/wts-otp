import { NgModule, forwardRef } from '@angular/core';
import { WtsOtpComponent } from './wts-otp.component';
import {  NgFor } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

 

@NgModule({
  declarations: [
    WtsOtpComponent
  ],
  imports: [
    NgFor, FormsModule
  ],
  exports: [
    WtsOtpComponent
  ]
 
})
export class OTPInputModule { }
