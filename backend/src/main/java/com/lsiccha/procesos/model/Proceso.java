package com.lsiccha.procesos.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "proceso")
public class Proceso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "duration", nullable = false)
    private Integer duration;


    @Column(name = "state", nullable = false)
    private String state;


    @JsonManagedReference
    @OneToMany(
            mappedBy = "proceso",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY
    )
    private List<Input> inputs;


    @OneToMany(
            mappedBy = "proceso",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY
    )
    private List<Output> outputs;



    @OneToMany(
            mappedBy = "proceso",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY
    )
    private List<Tool> tools;

    @ManyToOne
    @JoinColumn(
            name = "id_diagrama",
            nullable = false,
            foreignKey = @ForeignKey(name = "FK_proceso_diagrama")
    )
    private Diagrama diagrama;
}
