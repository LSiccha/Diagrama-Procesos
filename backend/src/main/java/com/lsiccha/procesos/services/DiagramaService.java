package com.lsiccha.procesos.services;

import com.lsiccha.procesos.model.Diagrama;
import com.lsiccha.procesos.model.Proceso;
import com.lsiccha.procesos.model.User;
import jdk.jshell.Diag;

import java.util.List;

public interface DiagramaService {

    Diagrama create(Diagrama diagrama);
    List<Diagrama> getAll();
    Diagrama get(Integer id);
    Diagrama update(Diagrama diagrama);
    void delete(Integer id);

    List<Diagrama> getByUser(User user);

}
