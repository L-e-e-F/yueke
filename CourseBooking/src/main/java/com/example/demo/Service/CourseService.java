package com.example.demo.Service;

import com.example.demo.Dao.Model.CourseModel;

import java.util.List;

public interface CourseService {
    List<CourseModel> insert(CourseModel model) throws Exception;

    List<CourseModel> update(CourseModel model) throws Exception;

    int delete(Long id) ;

    List<CourseModel> search();

    List<CourseModel> searchByTeacherId(Long id);

    List<CourseModel> searchByStatus(String courseStatus, Long id);
}
