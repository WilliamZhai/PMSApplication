package com.main.entities;

import com.main.entities.course.Course;
import com.main.entities.course.CourseRepository;
import com.main.entities.employee.Employee;
import com.main.entities.employee.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class DemoDataConfiguration {

    @Bean
    CommandLineRunner commandLineRunner(EmployeeRepository employeeRepository, CourseRepository courseRepository) {
        return args -> {
            Employee e1 = new Employee("Lily", "lily@wl.com");
            Employee e2 = new Employee("Jane", "Jane@wl.com");
            Employee e3 = new Employee("Hu", "Hu@wl.com");

            employeeRepository.saveAll(
                    Arrays.asList(e1, e2, e3)
            );

            Course c1 = new Course("G6-Math", "G-6 Math Curriculum", e1);
            Course c2 = new Course("G9-Math", "G-9 Math Curriculum", e2);
            Course c3 = new Course("Euclid", "Euclid math contest");

            courseRepository.saveAll(
                    Arrays.asList(c1, c2, c3)
            );
        };
    }

}
