package com.example.demo.Controller;

import com.example.demo.Dao.Model.ApplyModel;
import com.example.demo.Dao.Model.CourseModel;
import com.example.demo.Service.ApplyService;
import com.example.demo.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value = {"/apply"})
public class ApplyController {

    @Autowired
    ApplyService applyService;
    @PostMapping(value = {"/"})
    public ResponseEntity<ApplyModel> insert(@RequestBody ApplyModel applyModel) throws Exception {
        ApplyModel result = applyService.insert(applyModel);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @PutMapping(value = {"/"})
    public ResponseEntity<ApplyModel> update(@RequestBody ApplyModel applyModel) throws Exception {
        ApplyModel result = applyService.update(applyModel);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @DeleteMapping(value = {"/"})
    public ResponseEntity<Integer> logicalDelete(@RequestParam("id") Long id)  {
        Integer result = applyService.delete(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping(value = {"/{userId}"})
    public ResponseEntity<List<ApplyModel>> selectAll(@PathVariable String userId)  {
        Long id = Long.getLong(userId);
        List<ApplyModel> result = applyService.search(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @GetMapping(value = {"userId/{userId}"})
    public ResponseEntity<List<ApplyModel>> selectByUserId(@PathVariable String userId)  {
        Long id = Long.parseLong(userId);
        List<ApplyModel> result = applyService.searchByUserId(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @GetMapping(value = {"teacherId/{teacherId}"})
    public ResponseEntity<List<ApplyModel>> selectByTeacherId(@PathVariable String teacherId)  {
        Long id = Long.parseLong(teacherId);
        List<ApplyModel> result = applyService.searchByTeacherId(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
