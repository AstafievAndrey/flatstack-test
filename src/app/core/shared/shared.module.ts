import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent, HeaderComponent } from './layouts';
import { ButtonComponent, InputComponent, SelectComponent } from './ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent
  ],
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
    InputComponent,
    SelectComponent
  ]
})
export class SharedModule { }
