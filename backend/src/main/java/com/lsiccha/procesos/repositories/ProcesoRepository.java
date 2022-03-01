package com.lsiccha.procesos.repositories;

import com.lsiccha.procesos.model.Diagrama;
import com.lsiccha.procesos.model.Proceso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProcesoRepository extends JpaRepository<Proceso, Integer> {

    List<Proceso> getByDiagrama(Diagrama diagrama);
}
