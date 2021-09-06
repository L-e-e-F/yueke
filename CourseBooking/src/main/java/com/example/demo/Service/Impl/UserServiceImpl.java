package com.example.demo.Service.Impl;


import com.example.demo.Dao.Mapper.UserMapper;
import com.example.demo.Dao.Model.UserModel;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    @Override
    public UserModel insert(UserModel model) throws Exception {
        if (!"".equals(model.getAccount()) && model.getAccount() != null) {
            UserModel model1 = userMapper.selectByAccount(model.getAccount());
            if (null != model1) {
                throw new Exception("账号已存在");
            }
        }
        if (!"".equals(model.getPassword()) && model.getPassword() != null) {
            model.setPassword(DigestUtils.md5DigestAsHex(model.getPassword().getBytes()));
        }
        int result = userMapper.insert(model);
        if (result > 0) {
            return userMapper.selectByPrimaryKey(model.getUserId());
        } else {
            throw new Exception("注册失败");
        }
    }

    @Override
    public UserModel update(UserModel model) throws Exception {
        if (!"".equals(model.getAccount()) && model.getAccount() != null) {
            UserModel model1 = userMapper.selectByAccount(model.getAccount());
            if (null != model1 && !model1.getUserId().equals(model.getUserId())) {
                throw new Exception("账号已存在");
            }
            if (!"".equals(model.getPassword()) && model.getPassword() != null  && !model.getPassword().equals(model1.getPassword())) {
                model.setPassword(DigestUtils.md5DigestAsHex(model.getPassword().getBytes()));
            }
        }
        int result = userMapper.updateByPrimaryKeySelective(model);
        if (result == 0) {
            throw new Exception("修改失败");
        }
        return userMapper.selectByPrimaryKey(model.getUserId());
    }

    @Override
    public int delete(Long id) {
        return userMapper.deleteByPrimaryKey(id);
    }

    @Override
    public List<UserModel> search() {
        return userMapper.selectAll();
    }

    @Override
    public UserModel login(UserModel model) throws Exception {
        if ("".equals(model.getAccount()) || "".equals(model.getPassword())) {
            throw new Exception("账号密码不能为空");
        }
        model.setPassword(DigestUtils.md5DigestAsHex(model.getPassword().getBytes()));
        UserModel result = userMapper.login(model);
        if (result == null) {
            throw new Exception("密码错误");
        }
        return result;
    }

    @Override
    public UserModel register(UserModel model) throws Exception {
        UserModel model1 = userMapper.recovery(model);
        if (null != model1) {
            throw new Exception("账号已存在");
        }
        if (!"".equals(model.getPassword()) && model.getPassword() != null) {
            model.setPassword(DigestUtils.md5DigestAsHex(model.getPassword().getBytes()));
        }
        int result = userMapper.insert(model);
        if (result < 1) {
            throw new Exception("注册失败");
        }
        return userMapper.selectByPrimaryKey(model.getUserId());
    }
}
