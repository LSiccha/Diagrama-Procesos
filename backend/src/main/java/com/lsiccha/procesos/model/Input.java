package com.lsiccha.procesos.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "input")
public class Input {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JsonBackReference
    @ManyToOne(
    )
    @JoinColumn(
            name = "id_proceso",
            nullable = false,
            foreignKey = @ForeignKey(name="FK_input_proceso")
    )
    private Proceso proceso;

    @Column(name = "nombre", nullable = false)
    private String nombre;


}
