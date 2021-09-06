package com.example.demo.Dao.Mapper;

import com.example.demo.Dao.Model.UserModel;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    int deleteByPrimaryKey(Long userId);

    int insert(UserModel record);

    int insertSelective(UserModel record);

    UserModel selectByPrimaryKey(Long userId);

    int updateByPrimaryKeySelective(UserModel record);

    int updateByPrimaryKey(UserModel record);

    List<UserModel> selectAll();

    UserModel selectByAccount(String account);

    UserModel recovery(UserModel model);

    UserModel login(UserModel model);
}
