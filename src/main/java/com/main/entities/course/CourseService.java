package com.main.entities.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.apache.commons.lang.NotImplementedException;

import java.util.ArrayList;
import java.util.List;

// a singleton class
@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllCourses() {
        return new ArrayList<>(courseRepository.findAll());
    }

    public Course getCourse(Long id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Course with id " + id + " does not exist"));
    }

    public void addCourse(Course course){
        courseRepository.save(course);
    }

    public void updateCourse(Long id, Course course) {
        boolean exists = courseRepository.existsById(id);
        System.out.println(exists);
        if (!exists) {
            System.out.println("IllegalArgumentException");
            throw  new IllegalStateException("Course with id " + id + " does not exist");
        }

        courseRepository.save(course);
    }

    public void deleteCourse(Long id) {
        boolean exists = courseRepository.existsById(id);
        if (!exists) {
            throw  new IllegalStateException("Course with id " + id + " does not exist");
        }

        courseRepository.deleteById(id);
    }

    // Complex Services


    public List<Course> getAllCoursesByTeacher(Long employeeId) {
        return courseRepository.findByEmployeeId(employeeId);
    }

    public void updateTeacherForCourse(Long courseId, Long teacherId) {
        throw new NotImplementedException();
    }
}
