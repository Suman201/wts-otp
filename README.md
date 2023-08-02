# Angular OTP

Simple and Customizable One-time password input component for Angular.
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Installation

Install OTP-Input through npm:

```
 npm install --save wts-otp
```

Next import the OTP-Input module into your app's module:

```typescript
import { NgModule } from "@angular/core";
import { OTPInputModule } from "wts-otp";

@NgModule({
  imports: [OTPInputModule],
})
export class MyModule {}
```

Finally connect the OTP-Input to an input via a template property:

```
<wts-otp (getOTP)="getOTP($event)" [digits]="4" placholder="-"></wts-otp>

```

on component.ts page

```typescript
getOTP(e: string){
  console.log(e) // output OTP
}
```

Selector: `wts-otp`

**Properties**

| Name                                     | Description                   |
| ---------------------------------------- | ----------------------------- |
| @Input() digits: Number                  | Default 4                     |
| @Input() placholder: string              | Default -                     |
| @Input() type: <Input type>string        | Default text                  |
| @Output() getOTP: EventEmitter\<string\> | Emits time when that was set. |

**CSS Customization**
on style.scss

```css
.___wts___OTP {
  --inputBorderColor: #000;
  --inputErrorBorderColor: rgb(255, 3, 3);
  --inputErrorBackgroundColor: transparent;
  --inputBackgroundColor: transparent;
  --inputPlaceHolderColor: #000;
  --inputWidth: 40px;
  --inputHeight: 32px;
  --inputBorderRadius: 4px;
  --inputFontSize: 16px;
  --inputGap: 5px;
  --inputParentGapAdjustment: -5px;
  --inputAlignment: center;
}
```
