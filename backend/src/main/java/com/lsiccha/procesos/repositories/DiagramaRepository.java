package com.lsiccha.procesos.repositories;

import com.lsiccha.procesos.model.Diagrama;
import com.lsiccha.procesos.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiagramaRepository extends JpaRepository<Diagrama, Integer> {

    List<Diagrama> getByUser(User user);

}
