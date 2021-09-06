package com.example.demo.Service.Impl;

import com.example.demo.Dao.Mapper.ApplyMapper;
import com.example.demo.Dao.Mapper.CourseMapper;
import com.example.demo.Dao.Model.ApplyModel;
import com.example.demo.Dao.Model.CourseModel;
import com.example.demo.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    CourseMapper courseMapper;
    @Autowired
    ApplyMapper applyMapper;
    @Override
    public List<CourseModel> insert(CourseModel model) throws Exception {
        int result = new Integer(0);
        if (!"".equals(model.getCourseName()) && model.getCourseName() != null) {
            model.setCourseStatus("可预约");
            result = courseMapper.insert(model);
        }
        if (result > 0) {
            return courseMapper.selectAll();
        } else {
            throw new Exception("添加失败");
        }
    }

    @Override
    public List<CourseModel> update(CourseModel model) throws Exception {
        int result = new Integer(0);
        if (model.getCourseId() != null) {
        }
        result = courseMapper.updateByPrimaryKeySelective(model);
        if (result > 0) {
            return courseMapper.selectAll();
        } else {
            throw new Exception("修改失败");
        }
    }

    @Override
    public int delete(Long id) {
        return courseMapper.deleteByPrimaryKey(id);
    }

    @Override
    public List<CourseModel> search() {
        List<CourseModel> list = courseMapper.selectAll();
        getCourseStatus(list);
        for (CourseModel data: list
             ) {
            if (applyMapper.selectByCourseId(data.getCourseId()).size() > 0 && !data.getCourseStatus().equals("开课")){
                data.setCourseStatus("已预约");
            }
        }
        return list;
    }

    @Override
    public List<CourseModel> searchByTeacherId(Long id) {
        List<CourseModel> list = courseMapper.selectByTeacherId(id);
        getCourseStatus(list);
        return list;
    }

    @Override
    public List<CourseModel> searchByStatus(String courseStatus, Long id) {
        CourseModel courseModel = new CourseModel();
        courseModel.setCourseStatus(courseStatus);
        courseModel.setTeacherId(id);
        List<CourseModel> list = courseMapper.selectByStatus(courseModel);
        return list;
    }

    private void getCourseStatus(List<CourseModel> list) {
        Date nowData = new Date();
        for (CourseModel data : list
        ) {
            if (nowData.compareTo(data.getEndTime()) > 0) {
                if (data.getApplyNumber() >= data.getCourseNumber() * 1.0 / 10) {
                    data.setCourseStatus("开课");
                    List<ApplyModel> applyModelList = applyMapper.selectByCourseId(data.getCourseId());
                    for (ApplyModel applyData: applyModelList
                    ) {
                        applyData.setStatus(1);
                    }
                } else {
                    data.setCourseStatus("开课失败");
                    List<ApplyModel> applyModelList = applyMapper.selectByCourseId(data.getCourseId());
                    for (ApplyModel applyData: applyModelList
                    ) {
                        applyData.setStatus(2);
                    }
                }
                courseMapper.updateByPrimaryKey(data);

            }
        }
    }
}
