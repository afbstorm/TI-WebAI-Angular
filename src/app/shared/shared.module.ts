import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddEuroSymbolPipe} from "./pipes/add-euro-symbol.pipe";



@NgModule({
  declarations: [
    AddEuroSymbolPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AddEuroSymbolPipe
  ]
})
export class SharedModule { }
