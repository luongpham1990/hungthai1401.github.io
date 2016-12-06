/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : todo

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-12-06 15:43:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for todo
-- ----------------------------
DROP TABLE IF EXISTS `todo`;
CREATE TABLE `todo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `status` int(11) DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modify_at` datetime DEFAULT NULL,
  `id_user` int(8) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user_fk` (`id_user`),
  CONSTRAINT `id_user_fk` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=206 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todo
-- ----------------------------
INSERT INTO `todo` VALUES ('148', 'Ã¡dadasd', '3', '2016-12-01 15:20:31', null, '2');
INSERT INTO `todo` VALUES ('184', 'sadasd', '1', '2016-12-02 10:04:51', null, '1');
INSERT INTO `todo` VALUES ('185', 'sadasd', '2', '2016-12-02 10:04:57', '2016-12-06 04:27:21', '1');
INSERT INTO `todo` VALUES ('187', 'sdadas', '3', '2016-12-02 10:05:54', '2016-12-06 04:20:43', '1');
INSERT INTO `todo` VALUES ('189', 'ggkjgh', '3', '2016-12-02 10:07:42', '2016-12-06 04:27:26', '1');
INSERT INTO `todo` VALUES ('190', 'abc', '3', '2016-12-02 10:09:27', '2016-12-02 05:57:42', '1');
INSERT INTO `todo` VALUES ('192', 'abc', '1', '2016-12-06 09:44:26', null, '1');
INSERT INTO `todo` VALUES ('193', 'deg', '1', '2016-12-06 09:45:03', null, '1');
INSERT INTO `todo` VALUES ('194', 'ref', '2', '2016-12-06 09:47:21', '2016-12-06 04:17:41', '1');
INSERT INTO `todo` VALUES ('195', 'reda', '2', '2016-12-06 09:48:28', '2016-12-06 04:27:23', '1');
INSERT INTO `todo` VALUES ('196', 'abc', '1', '2016-12-06 10:28:49', null, '5');
INSERT INTO `todo` VALUES ('197', 'def', '1', '2016-12-06 10:29:56', '2016-12-06 04:30:06', '5');
INSERT INTO `todo` VALUES ('198', 'ref', '1', '2016-12-06 10:32:23', null, '5');
INSERT INTO `todo` VALUES ('199', 'fgh', '2', '2016-12-06 10:55:02', '2016-12-06 04:59:05', '5');
INSERT INTO `todo` VALUES ('200', 'rtg', '3', '2016-12-06 10:57:13', '2016-12-06 04:59:03', '5');
INSERT INTO `todo` VALUES ('201', 'rtg', '3', '2016-12-06 10:57:13', '2016-12-06 04:59:03', '5');
INSERT INTO `todo` VALUES ('202', 'ewt', '2', '2016-12-06 10:57:27', '2016-12-06 04:59:06', '5');
INSERT INTO `todo` VALUES ('205', 'ref', '2', '2016-12-06 11:05:42', '2016-12-06 09:32:38', '9');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '123456', null);
INSERT INTO `user` VALUES ('2', 'ti', '2', null);
INSERT INTO `user` VALUES ('3', 'chanboba', '123456', 'thuongmai@gmail.com');
INSERT INTO `user` VALUES ('4', 'chanboba1', '23456', 'thuongmai@gmail.com');
INSERT INTO `user` VALUES ('5', 'hungthai1401', '123456', 'hungthai1401@gmail.com');
INSERT INTO `user` VALUES ('6', 'user', '123456', 'hungthai1401@gmail.com');
INSERT INTO `user` VALUES ('7', 'abcdefg', '123456', 'abc@gmail.com');
INSERT INTO `user` VALUES ('8', 'maihuythuong', '123456', 'hungthai1401@gmail.com');
INSERT INTO `user` VALUES ('9', 'deptrai', '123456', 'hungthai1401@gmail.com');
