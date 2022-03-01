package com.lsiccha.procesos.model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "output")
public class Output {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(
            name = "id_proceso",
            nullable = false,
            foreignKey = @ForeignKey(name="FK_output_proceso")
    )
    private Proceso proceso;

    @Column(name = "nombre", nullable = false)
    private String nombre;

}
