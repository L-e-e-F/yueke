package com.example.demo.Controller;

import com.google.gson.Gson;
import com.example.demo.Dao.Mapper.UserMapper;
import com.example.demo.Dao.Model.UserModel;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value = {"/user"})
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    UserMapper userMapper;

    @PostMapping(value = {"/login"})
    public ResponseEntity<UserModel> login(@RequestBody UserModel userModel) throws Exception {
        UserModel result = userService.login(userModel);
        System.out.println(result);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping(value = {"/login1"})
    public ResponseEntity<UserModel> login1(@RequestParam String userModel) throws Exception {
        System.out.println(userModel);
        Gson gson = new Gson();
        UserModel model = gson.fromJson(userModel, UserModel.class);
        UserModel result = userService.login(model);
        System.out.println(result.toString());
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping(value = {"/"})
    public ResponseEntity<UserModel> insert(@RequestBody UserModel userModel) throws Exception {
        UserModel result = userService.insert(userModel);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @PostMapping(value = {"/regist"})
    public ResponseEntity<UserModel> register(@RequestBody UserModel userModel) throws Exception {
        UserModel result = userService.register(userModel);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @PutMapping(value = {"/"})
    public ResponseEntity<UserModel> update(@RequestBody UserModel userModel) throws Exception {
        UserModel result = userService.update(userModel);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping(value = {"/state"})
    public ResponseEntity<UserModel> updateState(@RequestBody UserModel userModel) throws Exception {
        UserModel model = userMapper.selectByPrimaryKey(userModel.getUserId());
        model.setState(userModel.getState());
        UserModel result = userService.update(model);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping(value = {"/user"})
    public ResponseEntity<UserModel> selectByOptions(@RequestParam("account") String account) throws Exception {
        UserModel result = userMapper.selectByAccount(account);
        if (null == result) {
            throw new Exception("用户名错误");
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @DeleteMapping(value = {"/"})
    public ResponseEntity<Integer> logicalDelete(@RequestParam("id") Long id) {
        Integer result = userService.delete(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping(value = {"/"})
    public ResponseEntity<List<UserModel>> selectAll() {
        List<UserModel> result = userService.search();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping(value = {"/user"})
    public ResponseEntity<UserModel> selectByOptions(@RequestBody UserModel account) throws Exception {
        UserModel result = userMapper.recovery(account);
        if (null == result) {
            throw new Exception("用户名或邮箱错误");
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
