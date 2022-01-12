package com.main.entities.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

// a singleton class
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return new ArrayList<>(employeeRepository.findAll());
    }

    public Employee getEmployee(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Employee with id " + id + " does not exist"));
    }

    public void addEmployee(Employee Employee){
        employeeRepository.save(Employee);
    }

    public void updateEmployee(Long id, Employee Employee) {
        boolean exists = employeeRepository.existsById(id);
        System.out.println(exists);
        if (!exists) {
            System.out.println("IllegalArgumentException");
            throw  new IllegalStateException("Employee with id " + id + " does not exist");
        }

        employeeRepository.save(Employee);
    }

    public void deleteEmployee(Long id) {
        boolean exists = employeeRepository.existsById(id);
        if (!exists) {
            throw  new IllegalStateException("Employee with id " + id + " does not exist");
        }

        employeeRepository.deleteById(id);
    }
}
