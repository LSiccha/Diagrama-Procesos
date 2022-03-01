package com.lsiccha.procesos.services.impl;

import com.lsiccha.procesos.model.Diagrama;
import com.lsiccha.procesos.model.Proceso;
import com.lsiccha.procesos.model.User;
import com.lsiccha.procesos.repositories.ProcesoRepository;
import com.lsiccha.procesos.services.ProcesoService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProcesoServiceImpl implements ProcesoService {

    private ProcesoRepository procesoRepository;

    @Override
    public Proceso create(Proceso proceso) {
        return this.procesoRepository.save(proceso);
    }

    @Override
    public List<Proceso> getAll() {
        return this.procesoRepository.findAll();
    }

    @Override
    public Proceso get(Integer id) {
        return this.procesoRepository.findById(id).get();
    }

    @Override
    public Proceso update(Proceso proceso) {
        return this.procesoRepository.save(proceso);
    }

    @Override
    public void delete(Integer id) {
        this.procesoRepository.deleteById(id);
    }

    @Override
    public List<Proceso> getByDiagrama(Diagrama diagrama) {
        return this.procesoRepository.getByDiagrama(diagrama);
    }
}
