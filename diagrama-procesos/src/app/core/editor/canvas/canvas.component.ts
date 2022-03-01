import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {SharedService} from "../shared/shared.service";
import {Process} from "../../../model/process.model";
import {ProcesoService} from "../../../services/proceso.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CanvasComponent implements OnInit, OnDestroy {

  @ViewChild('canvas', {static: true}) canvas!: ElementRef;
  private ctx!: CanvasRenderingContext2D

  procesos: Process[] = []
  contador: number = 0

  subscription: Subscription
  processes : Process[] = []

  constructor(
    private sharedService: SharedService,
    private processService: ProcesoService,
    private router: ActivatedRoute
  ) {
    this.subscription = this.sharedService.event$.subscribe(
      (data) =>{
        console.log('Canvas: '+data)
        if( data === 'proceso'){
          console.log('Canvas: Mock Process')
          this.newProcess()
        }
        if( data === 'procesoDB'){
          console.log('Canvas: Proceso Saved to DB')
          this.saveProcess()
        }

      }
    )
  }

  ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

  getAll(){
    const diagrama = this.router.snapshot.paramMap.get('id')
    this.processService.getByDiagrama(Number(diagrama)).subscribe(
      (data) => {
        this.procesos = data;
      }
    )
  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')
    this.drawGrid()
    this.getAll()
  }

  start(){
    console.log('started')
  }

  saveProcess(){
    const cid = this.router.snapshot.paramMap.get('id')
    let proceso :  Process = {
      name : 'Proceso',
      state: 'UNFINISHED',
      duration: 0,
      diagrama : {
        id : Number(cid)
      }

    }
    this.processService.create(proceso).subscribe(
      data => {
        this.procesos.push(data)
        console.log(this.procesos)
      }
    )
  }

  test(){
  }

  newProcess(){
    let proceso :  Process = {
      name : 'Proceso',
      state: 'UNINITIATED',
      duration: 0,
      id : this.contador++
    }
    this.procesos.push(proceso)
  }

  updateProcess(process: Process){
    this.processService.update(process).subscribe(
      (data) => {
        this.replaceProcess(data);
        console.log(this.procesos)
      }
    )
  }

  replaceProcess(process: Process){
    let processPos = this.procesos.map((p) => {return p.id}).indexOf(process.id);
    console.log(this.procesos.map((p) => {return p.id}))
    console.log(processPos)
    //Replace OBJECT in Array, relocates html element
    //this.procesos[processPos] = process;
    let processFromArray = this.procesos[processPos];

    processFromArray.name = process.name;
    processFromArray.state = process.state;
    processFromArray.duration = process.duration;
    processFromArray.diagrama = process.diagrama;
    processFromArray.outputs = process.outputs;
    processFromArray.tools = process.tools;
    processFromArray.inputs = process.inputs;
    processFromArray.parentIds = process.parentIds;
  }

  deleteProcess(id: number) {

    console.log(id)
    this.processService.delete(id).subscribe(
      () => {
        console.log('Canvas: Eliminado')
      }
    )
    let process = this.procesos.find(process => process.id === id)
    if (process){
      let index = this.procesos.indexOf(process)
      this.procesos = this.procesos.filter(proceso => proceso.id != id)
      console.log('Canvas: ')
      console.log(this.procesos)
    }

  }

  drawGrid() {
    this.canvas.nativeElement.height = window.innerHeight
    this.canvas.nativeElement.width = window.innerWidth

    this.ctx.strokeStyle = '#f5f5f5';
    const w = this.canvas.nativeElement.width;
    const h = this.canvas.nativeElement.height;
    const s = 40

    let ch = s
    for (let i = 0; i<=(h/s)-2; i++){


      this.ctx.beginPath();
      this.ctx.moveTo(0,ch)
      this.ctx.lineTo(w,ch);
      this.ctx.stroke();

      ch += s
    }

    let cw = s
    for (let i = 0; i<=(w/s)-2; i++){


      this.ctx.beginPath();
      this.ctx.moveTo(cw,0)
      this.ctx.lineTo(cw,h);
      this.ctx.stroke();

      cw += s
    }

  }


}
