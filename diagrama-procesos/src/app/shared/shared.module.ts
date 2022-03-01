import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MaterialModule} from "../material/material.module";
import {IconsModule} from "../icons/icons.module";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    IconsModule,
    FlexModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ]
})
export class SharedModule {

}
