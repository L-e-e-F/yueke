package com.example.demo.Controller;

import com.example.demo.Dao.Model.ApplyModel;
import com.example.demo.Dao.Model.CourseModel;
import com.example.demo.Dao.Model.UserModel;
import com.example.demo.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value = {"/course"})
public class CourseController {
    @Autowired
    CourseService courseService;
    @PostMapping(value = {"/"})
    public ResponseEntity<List<CourseModel>> insert(@RequestBody CourseModel courseModel) throws Exception {
        List<CourseModel> result = courseService.insert(courseModel);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @PutMapping(value = {"/"})
    public ResponseEntity<List<CourseModel>> update(@RequestBody CourseModel courseModel) throws Exception {
        List<CourseModel> result = courseService.update(courseModel);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @DeleteMapping(value = {"/"})
    public ResponseEntity<Integer> logicalDelete(@RequestParam("id") Long id)  {
        Integer result = courseService.delete(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping(value = {"/"})
    public ResponseEntity<List<CourseModel>> selectAll()  {
        List<CourseModel> result = courseService.search();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @GetMapping(value = {"teacherId/{teacherId}"})
    public ResponseEntity<List<CourseModel>> selectByTeacherId(@PathVariable String teacherId)  {
        Long id = Long.parseLong(teacherId);
        List<CourseModel> result = courseService.searchByTeacherId(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @GetMapping(value = {"/status/{teacherId}"})
    public ResponseEntity<List<CourseModel>> selectByStatus(@PathVariable String teacherId)  {
        Long id = Long.parseLong(teacherId);
        List<CourseModel> result = courseService.searchByStatus("开课",id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
