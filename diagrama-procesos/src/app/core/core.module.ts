import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CanvasComponent } from './editor/canvas/canvas.component';
import { ProcessComponent } from './editor/process/process.component';
import { LayoutComponent } from './layout/layout.component';
import {MaterialModule} from "../material/material.module";
import {SharedModule} from "../shared/shared.module";
import { LeftPanelComponent } from './editor/left-panel/left-panel.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditorComponent } from './editor/editor.component';
import {FlexModule} from "@angular/flex-layout";
import { StartComponent } from './editor/start/start.component';
import { EndComponent } from './editor/end/end.component';
import {IconsModule} from "../icons/icons.module";
import { DiagramasComponent } from './diagramas/diagramas.component';
import { LeftMenuComponent } from './diagramas/left-menu/left-menu.component';
import { DiagramaCardComponent } from './diagramas/diagrama-card/diagrama-card.component';
import { ProcessFormComponent } from './editor/shared/process-form/process-form.component';


@NgModule({
  declarations: [
    CanvasComponent,
    ProcessComponent,
    LayoutComponent,
    LeftPanelComponent,
    EditorComponent,
    StartComponent,
    EndComponent,
    DiagramasComponent,
    LeftMenuComponent,
    DiagramaCardComponent,
    ProcessFormComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    FlexModule,
    IconsModule
  ]
})
export class CoreModule { }
