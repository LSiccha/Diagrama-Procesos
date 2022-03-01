package com.lsiccha.procesos.services.impl;

import com.lsiccha.procesos.model.User;
import com.lsiccha.procesos.repositories.UserRepository;
import com.lsiccha.procesos.services.UserService;
import org.springframework.stereotype.Service;


import javax.validation.ValidationException;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public User create(User user) {
        if (this.userRepository.findByUsername(user.getUsername()).isPresent()){
            throw new ValidationException("Ya existe un registro con ese username");
        }

        User newUser = this.userRepository.save(user);
        return newUser;
    }

    @Override
    public List<User> getAll() {
        return this.userRepository.findAll();
    }

    @Override
    public User get(Integer id) {
        return this.userRepository.findById(id).get();
    }

    @Override
    public User update(User user) {
        return null;
    }

    @Override
    public void delete(Integer id) {

    }

    @Override
    public User getByUsername(String username) {
        return this.userRepository.findByUsername(username).get();
    }
}
