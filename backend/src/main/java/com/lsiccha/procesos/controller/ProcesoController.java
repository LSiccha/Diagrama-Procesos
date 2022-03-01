package com.lsiccha.procesos.controller;

import com.lsiccha.procesos.model.Diagrama;
import com.lsiccha.procesos.model.Proceso;
import com.lsiccha.procesos.services.ProcesoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/procesos")
public class ProcesoController {

    private ProcesoService procesoService;

    @PostMapping
    public ResponseEntity<Proceso> create(@RequestBody Proceso proceso){
        Proceso savedProceso = this.procesoService.create(proceso);
        return new ResponseEntity<>(savedProceso, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Proceso>> getAll(){
        return new ResponseEntity<>(this.procesoService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Proceso> get(@PathVariable Integer id){
        return new ResponseEntity<>(this.procesoService.get(id), HttpStatus.OK);
    }

    @GetMapping("/byDiagrama")
    public ResponseEntity<List<Proceso>> get(@RequestParam Diagrama diagrama){
        return new ResponseEntity<>(this.procesoService.getByDiagrama(diagrama), HttpStatus.OK);
    }


    @PutMapping()
    public ResponseEntity<Proceso> update(@RequestBody Proceso proceso){
        Proceso savedProceso = this.procesoService.create(proceso);
        return new ResponseEntity<>(savedProceso, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id){
        this.procesoService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
