package com.example.demo.Service;

import com.example.demo.Dao.Model.ApplyModel;
import com.example.demo.Dao.Model.CourseModel;

import java.util.List;

public interface ApplyService {

    ApplyModel insert(ApplyModel model) throws Exception;

    ApplyModel update(ApplyModel model) throws Exception;

    int delete(Long id) ;

    List<ApplyModel> search(Long courseId);

    List<ApplyModel> searchByUserId(Long id);

    List<ApplyModel> searchByTeacherId(Long id);
}
