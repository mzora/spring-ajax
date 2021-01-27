package com.example.springajax.controller;

import com.example.springajax.dto.Person;
import com.example.springajax.dto.ServiceResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PersonController {
    List<Person> DB = new ArrayList<>();

    @PostMapping("/savePerson")
    public ResponseEntity<Object> addPerson(@RequestBody Person person){
        System.out.println(person.toString());
        DB.add(person);
        ServiceResponse<Person> response = new ServiceResponse<Person>("success",person);
        return new ResponseEntity<Object>(response, HttpStatus.OK);
    }

    @GetMapping("/getAllPersons")
    public ResponseEntity<Object> getAllPersons(){
        ServiceResponse<List<Person>> response = new ServiceResponse<>("success", DB);
        return new ResponseEntity<Object>(response,HttpStatus.OK);
    }
}
