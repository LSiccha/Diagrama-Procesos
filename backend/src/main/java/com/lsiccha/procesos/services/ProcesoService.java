package com.lsiccha.procesos.services;

import com.lsiccha.procesos.model.Diagrama;
import com.lsiccha.procesos.model.Proceso;
import com.lsiccha.procesos.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ProcesoService {

    Proceso create(Proceso proceso);
    List<Proceso> getAll();
    Proceso get(Integer id);
    Proceso update(Proceso proceso);
    void delete(Integer id);

    List<Proceso> getByDiagrama(Diagrama diagrama);

}
