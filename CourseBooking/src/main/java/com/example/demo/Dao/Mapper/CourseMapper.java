package com.example.demo.Dao.Mapper;

import com.example.demo.Dao.Model.ApplyModel;
import com.example.demo.Dao.Model.CourseModel;
import com.example.demo.Dao.Model.UserModel;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CourseMapper {
    int deleteByPrimaryKey(Long courseId);

    int insert(CourseModel record);

    int insertSelective(CourseModel record);

    CourseModel selectByPrimaryKey(Long courseId);

    int updateByPrimaryKeySelective(CourseModel record);

    int updateByPrimaryKey(CourseModel record);

    List<CourseModel> selectAll();

    List<CourseModel> selectByTeacherId(Long id);

    List<CourseModel> selectByStatus(CourseModel record);
}
