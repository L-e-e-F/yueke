package com.example.demo.Dao.Mapper;

import com.example.demo.Dao.Model.ApplyModel;
import com.example.demo.Dao.Model.UserModel;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ApplyMapper {
    int deleteByPrimaryKey(Long applyId);

    int insert(ApplyModel record);

    int insertSelective(ApplyModel record);

    ApplyModel selectByPrimaryKey(Long applyId);

    int updateByPrimaryKeySelective(ApplyModel record);

    int updateByPrimaryKey(ApplyModel record);

    List<ApplyModel> selectAll();

    List<ApplyModel> selectByCourseId(Long courseId);

    List<ApplyModel> selectByUserId(Long id);

    List<ApplyModel> selectByTeacherId(Long id);
}
