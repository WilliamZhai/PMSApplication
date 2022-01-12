package com.main.entities.course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

    // looking for id property of the Employee property
    public List<Course> findByEmployeeId (Long employeeId);

    // update a course's employee(teacher) field
}
