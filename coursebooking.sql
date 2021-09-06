/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : localhost:3306
 Source Schema         : coursebooking

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 28/07/2021 07:58:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for apply
-- ----------------------------
DROP TABLE IF EXISTS `apply`;
CREATE TABLE `apply`  (
  `apply_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `course_id` bigint(20) DEFAULT NULL,
  `course_name` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `teacher_id` bigint(20) DEFAULT NULL,
  `teacher_name` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `user_id` bigint(20) DEFAULT NULL,
  `user_name` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `status` int(11) DEFAULT NULL,
  `course_time` datetime(0) DEFAULT NULL,
  `address` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  PRIMARY KEY (`apply_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 58 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of apply
-- ----------------------------
INSERT INTO `apply` VALUES (56, 1, 'JAVA', 1, '陈老师', 2, '何同学1', 1, '2021-07-01 00:00:00', 'A7-202');
INSERT INTO `apply` VALUES (57, 14, '123123', 1, '陈老师', 2, '何同学1', 0, '2021-01-01 00:00:00', '123');

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course`  (
  `course_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `course_name` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `type_id` bigint(20) DEFAULT NULL,
  `type_name` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `teacher_id` bigint(20) DEFAULT NULL,
  `teacher_name` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `course_time` datetime(0) DEFAULT NULL,
  `apply_number` int(11) DEFAULT NULL,
  `course_number` int(11) DEFAULT NULL,
  `pic` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `course_status` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `end_time` datetime(0) DEFAULT NULL,
  PRIMARY KEY (`course_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES (1, 'JAVA', 1, '专业课', 1, '陈老师', '2021-07-01 00:00:00', 33, 40, 'A7-202', '开课', '2021-05-30 00:00:00');
INSERT INTO `course` VALUES (2, 'C++', 1, '专业课', 1, '陈老师', '2021-07-01 00:00:00', 40, 40, 'A7-203', '已满人', '2021-07-30 00:00:00');
INSERT INTO `course` VALUES (3, 'Python', 1, '专业课', 3, '王老师', '2021-07-01 00:00:00', 41, 40, 'A7-204', '开课', '2021-07-30 00:00:00');
INSERT INTO `course` VALUES (4, '高数', 2, '公共必修课', 4, '李老师', '2021-07-01 00:00:00', 41, 40, 'A7-205', '开课失败', '2021-07-30 00:00:00');
INSERT INTO `course` VALUES (5, '嵌入式开发', 1, '专业课', 1, '陈老师', '2021-07-01 00:00:00', 32, 40, 'A7-202', '可预约', '2021-07-30 00:00:00');
INSERT INTO `course` VALUES (6, 'linux基础', 1, '专业课', 1, '陈老师', '2021-07-01 00:00:00', 32, 40, 'A7-202', '开课', '2021-07-21 00:00:00');
INSERT INTO `course` VALUES (11, '111', 2, '公共必须课', 1, '陈老师', '2021-01-01 00:00:00', 20, 100, '123', '开课', '2021-01-01 00:00:00');
INSERT INTO `course` VALUES (12, '111', 1, '专业课', 1, '陈老师', '2021-01-01 00:00:00', 0, 123, '123', '开课失败', '2021-01-01 00:00:00');
INSERT INTO `course` VALUES (13, '123', 2, '公共必须课', 1, '陈老师', '2021-01-01 00:00:00', 20, 123, '123', '开课', '2021-06-01 00:00:00');
INSERT INTO `course` VALUES (14, '123123', 2, '公共必须课', 1, '陈老师', '2021-01-01 00:00:00', 1, 100, '123', '可预约', '2021-09-01 00:00:00');
INSERT INTO `course` VALUES (15, '2321', 2, '公共必须课', 1, '陈老师', '2021-01-01 00:00:00', 0, 50, '123123', '可预约', '2021-09-01 00:00:00');
INSERT INTO `course` VALUES (16, 'aaa', 2, '公共必须课', 1, '陈老师', '2021-01-01 00:00:00', 20, 100, '123', '开课', '2021-06-01 00:00:00');
INSERT INTO `course` VALUES (17, '121132', 1, '专业课', 1, '陈老师', '2021-01-01 00:00:00', 0, 123, '123', '开课失败', '2021-01-01 00:00:00');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `password` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `user_name` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `role` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '111', '202cb962ac59075b964b07152d234b70', '陈老师', 0, 0);
INSERT INTO `user` VALUES (2, '222', '202cb962ac59075b964b07152d234b70', '何同学1', 1, 0);
INSERT INTO `user` VALUES (3, '333', '202cb962ac59075b964b07152d234b70', '王老师', 0, 0);
INSERT INTO `user` VALUES (4, '444', '202cb962ac59075b964b07152d234b70', '李老师', 0, 0);
INSERT INTO `user` VALUES (5, '555', '202cb962ac59075b964b07152d234b70', '张同学', 1, 0);
INSERT INTO `user` VALUES (6, '666', '202cb962ac59075b964b07152d234b70', '牛同学', 1, 0);

SET FOREIGN_KEY_CHECKS = 1;
