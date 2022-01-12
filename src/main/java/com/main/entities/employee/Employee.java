package com.main.entities.employee;

import com.main.entities.course.Course;

import javax.persistence.*;
import java.util.List;

@Entity
public class Employee {

    @Id
    @SequenceGenerator(
            name = "employee_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "employee_seq"
    )
    private Long id;
    private String name;
    private String email;

    @OneToMany(mappedBy = "employee")
    private List<Course> courses;

    public Employee() {

    }

    public Employee(String name, String email) {
        super();
        this.name = name;
        this.email = email;
    }

    public Employee(Long id, String name, String email) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
