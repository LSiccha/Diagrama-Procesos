package com.lsiccha.procesos.controller;

import com.lsiccha.procesos.dto.LoginRequest;
import com.lsiccha.procesos.model.User;
import com.lsiccha.procesos.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {

    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user){
        User userFromDb = this.userService.create(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginRequest request){
        User user = this.userService.getByUsername(request.getUsername());
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<User>> getAll(){
        return new ResponseEntity<>(this.userService.getAll(), HttpStatus.OK);
    }
}
