package com.lsiccha.procesos.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.*;


@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="username" , nullable = false)
    private String username;


}
