import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CanvasComponent} from "./editor/canvas/canvas.component";
import {LayoutComponent} from "./layout/layout.component";
import {EditorComponent} from "./editor/editor.component";
import {DiagramasComponent} from "./diagramas/diagramas.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'diagramas',
        component: DiagramasComponent
      },
      {
        path:'diagramas/:id',
        component: EditorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
