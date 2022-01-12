package com.main.entities.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping(path = "{courseId}")
    public Course getCourse(@PathVariable Long courseId) {
        return courseService.getCourse(courseId);
    }

    @PostMapping
    public void addCourse(@RequestBody Course course) {
        courseService.addCourse(course);
    }

    @PutMapping(path = "{courseId}")
    public void updateCourse(@PathVariable Long courseId, @RequestBody Course course) {
        courseService.updateCourse(courseId, course);
    }

    @DeleteMapping(path = "{courseId}")
    public void deleteCourse(@PathVariable Long courseId) {
        courseService.deleteCourse(courseId);
    }

    // Complex APIs
    @GetMapping(path = {"/teacher/{teacherId}"})
    public List<Course> getCourseByTeacher(@PathVariable Long teacherId) {
        return courseService.getAllCoursesByTeacher(teacherId);
    }

    // todo: implement service
    @PutMapping(path = "{courseId}/{teacherId}")
    public void updateTeacherForCourse(@PathVariable Long courseId, @PathVariable Long teacherId) {
        courseService.updateTeacherForCourse(courseId, teacherId);
    }

}
