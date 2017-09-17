import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { ValidationOnBlurDirective } from './validate-onblur.directive';


@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective,
    ValidationOnBlurDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
