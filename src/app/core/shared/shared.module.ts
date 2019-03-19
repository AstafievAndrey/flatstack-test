import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent, HeaderComponent } from './layouts';
import { ButtonComponent, InputComponent } from './ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MainComponent, HeaderComponent, ButtonComponent, InputComponent],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    MainComponent,
    ButtonComponent,
    InputComponent
  ]
})
export class SharedModule { }
