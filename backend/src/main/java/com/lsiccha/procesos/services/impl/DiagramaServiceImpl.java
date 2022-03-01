package com.lsiccha.procesos.services.impl;

import com.lsiccha.procesos.model.Diagrama;
import com.lsiccha.procesos.model.User;
import com.lsiccha.procesos.repositories.DiagramaRepository;
import com.lsiccha.procesos.services.DiagramaService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.Entity;
import java.util.List;

@Service
@AllArgsConstructor
public class DiagramaServiceImpl implements DiagramaService {


    private DiagramaRepository diagramaRepository;

    @Override
    public Diagrama create(Diagrama diagrama) {
        return this.diagramaRepository.save(diagrama);
    }

    @Override
    public List<Diagrama> getAll() {
        return this.diagramaRepository.findAll();
    }

    @Override
    public Diagrama get(Integer id) {
        return this.diagramaRepository.getById(id);
    }

    @Override
    public Diagrama update(Diagrama diagrama) {
        return null;
    }

    @Override
    public void delete(Integer id) {
        this.diagramaRepository.deleteById(id);
    }

    @Override
    public List<Diagrama> getByUser(User user) {
        return this.diagramaRepository.getByUser(user);
    }
}
