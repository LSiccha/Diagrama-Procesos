package com.lsiccha.procesos.services;

import com.lsiccha.procesos.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {

    User create(User user);
    List<User> getAll();
    User get(Integer id);
    User update(User user);
    void delete(Integer id);

    User getByUsername(String username);
}
