package com.lsiccha.procesos.controller;

import com.lsiccha.procesos.model.Diagrama;
import com.lsiccha.procesos.model.User;
import com.lsiccha.procesos.services.DiagramaService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/diagrama")
@AllArgsConstructor
public class DiagramaController {

    private DiagramaService diagramaService;

    @PostMapping
    public ResponseEntity<Diagrama> create(@RequestBody Diagrama diagrama){
        return new ResponseEntity<>(this.diagramaService.create(diagrama), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Diagrama>> getAll(){
        return new ResponseEntity<>(this.diagramaService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Diagrama> get(@PathVariable("id") Integer id){
        return new ResponseEntity<>(this.diagramaService.get(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id){
        this.diagramaService.delete(id);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @GetMapping("/byUser")
    public ResponseEntity<List<Diagrama>> getByUser(@RequestParam User user){
        return new ResponseEntity<>(this.diagramaService.getByUser(user), HttpStatus.OK);
    }



}
