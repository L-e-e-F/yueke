package com.example.demo.Service.Impl;

import com.example.demo.Dao.Mapper.ApplyMapper;
import com.example.demo.Dao.Mapper.CourseMapper;
import com.example.demo.Dao.Model.ApplyModel;
import com.example.demo.Dao.Model.CourseModel;
import com.example.demo.Service.ApplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ApplyServiceImpl implements ApplyService {

    @Autowired
    ApplyMapper applyMapper;
    @Autowired
    CourseMapper courseMapper;

    @Override
    public ApplyModel insert(ApplyModel model) throws Exception {
        int result = new Integer(0);
        if (!"".equals(model.getCourseName()) && model.getCourseName() != null) {
            result = applyMapper.insert(model);
        }
        if (result > 0) {
            model.getCourseId();
            CourseModel courseModel = courseMapper.selectByPrimaryKey(model.getCourseId());
            courseModel.setApplyNumber(courseModel.getApplyNumber() + 1);
            if(courseModel.getApplyNumber().equals(courseModel.getCourseNumber())){
                courseModel.setCourseStatus("已满人");
            }
            courseMapper.updateByPrimaryKey(courseModel);
            return null;
        } else {
            throw new Exception("添加失败");
        }
    }

    @Override
    public ApplyModel update(ApplyModel model) throws Exception {
        int result = new Integer(0);
        if (model.getCourseId() != null) {
        }
        result = applyMapper.updateByPrimaryKeySelective(model);
        if (result > 0) {
            return null;
        } else {
            throw new Exception("修改失败");
        }
    }

    @Override
    public int delete(Long id) {
        return applyMapper.deleteByPrimaryKey(id);
    }

    @Override
    public List<ApplyModel> search(Long courseId) {
        List<ApplyModel> list = applyMapper.selectByCourseId(courseId);
        GetStatus(list);
        return list;
    }

    private void GetStatus(List<ApplyModel> list) {
        for (ApplyModel data: list
             ) {
            CourseModel courseModel = courseMapper.selectByPrimaryKey(data.getCourseId());
            if(courseModel.getCourseStatus().equals("开课")){
                data.setStatus(1);
                applyMapper.updateByPrimaryKey(data);
            } else if(courseModel.getCourseStatus().equals("开课失败")){
                data.setStatus(2);
                applyMapper.updateByPrimaryKey(data);
            }
        }
    }

    @Override
    public List<ApplyModel> searchByUserId(Long id) {
        List<ApplyModel> list = applyMapper.selectByUserId(id);
        GetStatus(list);
        return list;
    }

    @Override
    public List<ApplyModel> searchByTeacherId(Long id) {
        List<ApplyModel> list = applyMapper.selectByTeacherId(id);
        GetStatus(list);
        return list;
    }
}
