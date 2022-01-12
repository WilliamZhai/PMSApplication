package com.main.entities.course;

import javax.persistence.*;
import com.main.entities.employee.Employee;

@Entity
public class Course {

    @Id
    @SequenceGenerator(
            name = "course_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "course_seq"
    )
    private Long id;
    private String name;
    private String description;

    @ManyToOne
    private Employee employee;

    // course creation date
    // course instructor
    // course status {active, closed}

    public Course() {

    }

    public Course(String name, String description) {
        super();
        this.name = name;
        this.description = description;
    }

    public Course(String name, String description, Employee employee) {
        super();
        this.name = name;
        this.description = description;
        this.employee = employee;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    @Override
    public String toString() {
        return "Course{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
