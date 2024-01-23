﻿# Host: localhost  (Version: 5.7.26)
# Date: 2024-01-23 21:23:07
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "coupon"
#

CREATE TABLE `coupon` (
  `couponId` int(11) NOT NULL,
  `couponName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `expiration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remission` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `descption` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tag` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`couponId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='优惠券';

#
# Data for table "coupon"
#

REPLACE INTO `coupon` VALUES (1,'永久优惠券','1904771514','200','一张长期的优惠券','长期'),(2,'临时优惠券','1704771514','200','短期内会过期',NULL);

#
# Structure for table "dict"
#

CREATE TABLE `dict` (
  `id` int(11) NOT NULL,
  `dictParam` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dictName` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dictValue` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "dict"
#

REPLACE INTO `dict` VALUES (1,'order_status','出票成功',1),(2,'order_status','未支付',0),(3,'order_status','已过期',2);

#
# Structure for table "order"
#

CREATE TABLE `order` (
  `userId` int(255) NOT NULL,
  `cinemaId` int(255) NOT NULL,
  `cinemaName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `showAt` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `endAt` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hallId` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `hallName` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `filmId` int(11) DEFAULT NULL,
  `filmName` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `scheduleId` int(50) DEFAULT NULL,
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(1) DEFAULT '0' COMMENT '0:未支付，1:已支付',
  `price` int(11) DEFAULT '0',
  `actualPrice` int(11) DEFAULT NULL COMMENT '实际价格',
  `oNum` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `poster` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createDate` int(11) DEFAULT NULL,
  `cinemaPhone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tradeNo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tradeTime` int(255) DEFAULT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=MyISAM AUTO_INCREMENT=69 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "order"
#

REPLACE INTO `order` VALUES (1,876,'中影德金影城和平店','1704942600','1704949620','71512181','5号厅 双人观影免费停车',6664,'年会不能停！',409653423,45,2,3800,34,'k3a-8cc-k0s-3ta-4abt7odjk','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1704937366,'0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1704942600','1704949620','71512181','5号厅 双人观影免费停车',6664,'年会不能停！',409653423,46,2,3800,3400,'oef-85l-h2h-66e-ojfsqtsgo','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1704938667,'0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1705112400','1705119420','71512179','3号厅 双人观影免费停车',6664,'年会不能停！',409668261,47,2,3800,NULL,'d50-vkh-5tf-3vr-2klr2an0j','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1704938867,'0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1704943200','1704950700','71512177','1号厅 双人观影免费停车',6661,'金手指',409653424,48,2,3800,NULL,'ask-iiv-4qb-8ud-8qp3aqeo8','https://pic.maizuo.com/usr/movie/37c604f9c5c165b8fd110a926037f8c1.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1704939366,'0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1704943200','1704950700','71512177','1号厅 双人观影免费停车',6661,'金手指',409653424,49,2,3800,NULL,'m3g-hpm-pi9-vk3-vt90ub7ui','https://pic.maizuo.com/usr/movie/37c604f9c5c165b8fd110a926037f8c1.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1704939500,'0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1704954000','1704961020','71512179','3号厅 双人观影免费停车',6664,'年会不能停！',409653431,50,2,3800,3800,'p3a-t4v-sq7-crm-lg2ocoj84','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1704951699,'0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1704961800','1704968820','71512179','3号厅 双人观影免费停车',6664,'年会不能停！',409653436,51,2,7600,NULL,'j05-nli-do9-5sc-cgvr0raqd','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1704959505,'0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1705028400','1705035420','71512179','3号厅 双人观影免费停车',6664,'年会不能停！',410125047,52,2,3800,3800,'8uu-2je-15o-dbt-duf9mitei','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705026044,'0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1705044300','1705051320','71512179','3号厅 双人观影免费停车',6664,'年会不能停！',410125057,53,2,11400,11000,'1ch-a6n-e4i-nl7-2gr67p0c7','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705041139,'0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1705053600','1705059360','71512181','5号厅 双人观影免费停车',6729,'动物园里有什么？',409905555,54,2,7600,7200,'n20-tp5-9h6-q8t-866hqfr8l','https://pic.maizuo.com/usr/movie/2f70f5ba75603b41a6934cfbf95372d1.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705049820,'0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1705053600','1705059360','71512181','5号厅 双人观影免费停车',6729,'动物园里有什么？',409905555,55,2,7600,NULL,'cga-nl8-8uc-hhk-0ltspjbp0','https://pic.maizuo.com/usr/movie/2f70f5ba75603b41a6934cfbf95372d1.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705049892,'0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1705236600','1705243620','71512178','2号厅 双人观影免费停车',6664,'年会不能停！',410768092,56,0,3800,3800,'ask-dp4-924-eae-u8oph0cjs','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705233337,'0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1705236600','1705243620','71512178','2号厅 双人观影免费停车',6664,'年会不能停！',410768092,57,1,3800,3800,'tcq-99c-au4-hs9-40ad49d4p','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705234754,'0755-29971666','2024011422001411230501894728',1705234772),(1,876,'中影德金影城和平店','1705236600','1705243620','71512178','2号厅 双人观影免费停车',6664,'年会不能停！',410768092,58,1,3800,3800,'b6u-19q-s5i-rms-796jmt09q','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705234801,'0755-29971666','2024011422001411230501896165',1705234823),(1,876,'中影德金影城和平店','1705236600','1705243620','71512178','2号厅 双人观影免费停车',6664,'年会不能停！',410768092,59,1,3800,3800,'fut-hvj-090-ufq-ngdr6ev5g','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705234857,'0755-29971666','2024011422001411230501897683',1705234912),(1,876,'中影德金影城和平店','1705236600','1705243620','71512178','2号厅 双人观影免费停车',6664,'年会不能停！',410768092,60,1,3800,3800,'ajt-nkg-1lo-j2g-b2p8849d6','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705234923,'0755-29971666','2024011422001411230501893350',1705234979),(1,876,'中影德金影城和平店','1705236600','1705243620','71512178','2号厅 双人观影免费停车',6664,'年会不能停！',410768092,61,1,3800,3800,'eat-qcd-g9d-k0d-6mr423mfb','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705234990,'0755-29971666','2024011422001411230501898796',1705235034),(1,876,'中影德金影城和平店','1705236600','1705243620','71512178','2号厅 双人观影免费停车',6664,'年会不能停！',410768092,62,1,3800,3800,'gdt-9o9-386-drt-46e5l3gg0','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705235043,'0755-29971666','2024011422001411230501896166',1705235175),(1,876,'中影德金影城和平店','1705236600','1705243620','71512178','2号厅 双人观影免费停车',6664,'年会不能停！',410768092,63,0,3800,3800,'lsl-4ik-fh3-b99-gtggt5jru','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705235185,'0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1705236600','1705243620','71512178','2号厅 双人观影免费停车',6664,'年会不能停！',410768092,64,1,3800,3800,'9m0-rd7-m7v-fbu-pg3tcouba','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705235191,'0755-29971666','2024011422001411230501896167',1705235276),(1,876,'中影德金影城和平店','1705323000','1705330020','71512178','2号厅 双人观影免费停车',6664,'年会不能停！',411269019,65,1,3800,3800,'35s-f0v-i68-o6m-j50q3o7bp','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705320463,'0755-29971666','2024011522001411230501905089',1705322173),(1,4703,'期遇·UUE巨幕影城公明店','1705498200','1705505220','97212','2号厅',6664,'年会不能停！',411692391,66,0,3490,3490,'rnu-d0n-li6-k6d-ssqml3lli','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','广东省深圳市光明新区公明街道合水口新天地购物中心（原亿佰家）3楼',1705494899,'0755-27688520',NULL,NULL),(1,876,'中影德金影城和平店','1705658400','1705664220','71512177','1号厅 双人观影免费停车',6714,'临时劫案',410647866,67,0,7600,NULL,'gfp-bog-sa7-gtk-86k0mv8o4','https://pic.maizuo.com/usr/movie/0b878942790318d209c1ba4acda296e5.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705494969,'0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1705678200','1705684020','71512177','1号厅 双人观影免费停车',6714,'临时劫案',410647869,68,0,7600,7600,'jf6-mks-h78-qp5-eg5a4pe14','https://pic.maizuo.com/usr/movie/0b878942790318d209c1ba4acda296e5.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）',1705672184,'0755-29971666',NULL,NULL),(1,848,'北京博纳影城悠唐店','1706019000','1706026020','e97e685174fdda8a','7号激光厅',6664,'年会不能停！',412366237,69,1,22050,22050,'ubp-k3p-t4m-bk4-4b501s4md','https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','三丰北里2号楼悠唐生活广场B1层（朝阳门钱柜对面）',1706014374,'010-59775660','2024012322001411230501986824',1706014484);

#
# Structure for table "seat"
#

CREATE TABLE `seat` (
  `seatId` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` int(11) NOT NULL DEFAULT '0',
  `columnId` varchar(11) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `columnNum` int(11) NOT NULL DEFAULT '0',
  `rowId` varchar(11) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `rowNum` int(20) NOT NULL DEFAULT '0',
  `sectionId` bigint(20) NOT NULL DEFAULT '0',
  `sectionName` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`seatId`)
) ENGINE=MyISAM AUTO_INCREMENT=178 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "seat"
#

REPLACE INTO `seat` VALUES (43,30,'5',0,'3',3,1,'普通'),(44,30,'6',0,'3',3,1,'普通'),(45,31,'7',0,'4',4,1,'普通'),(46,31,'8',0,'4',4,1,'普通'),(47,32,'6',0,'3',3,1,'普通'),(48,32,'7',0,'4',4,1,'普通'),(49,32,'8',0,'4',4,1,'普通'),(50,33,'3',0,'7',7,1,''),(51,34,'4',0,'5',5,1,''),(52,34,'7',0,'8',8,1,''),(53,35,'2',0,'3',3,1,''),(54,36,'3',0,'4',4,1,''),(55,36,'4',0,'6',6,1,''),(56,37,'4',0,'4',4,1,''),(57,38,'5',0,'7',7,1,''),(58,39,'3',0,'6',6,1,''),(59,40,'8',0,'9',9,1,''),(60,40,'9',0,'9',9,1,''),(61,41,'5',10,'3',3,1,''),(62,41,'6',11,'3',3,1,''),(63,42,'10',12,'8',8,1,''),(64,43,'6',6,'3',3,1,'普通'),(65,43,'6',6,'4',4,1,'普通'),(66,44,'7',7,'4',4,1,'普通'),(67,44,'9',9,'4',4,1,'普通'),(68,45,'8',8,'3',3,1,'普通'),(69,45,'9',9,'3',3,1,'普通'),(70,45,'10',10,'3',3,1,'普通'),(71,45,'10',10,'4',4,1,'普通'),(72,45,'8',8,'4',4,1,'普通'),(73,46,'4',6,'6',6,1,'普通'),(74,46,'5',7,'7',7,1,'普通'),(75,47,'7',7,'3',3,1,'普通'),(76,48,'8',8,'5',5,1,'普通'),(77,48,'9',9,'4',4,1,'普通'),(78,49,'8',8,'3',3,1,'普通'),(79,49,'9',9,'3',3,1,'普通'),(80,50,'8',8,'4',4,1,'普通'),(81,50,'9',9,'4',4,1,'普通'),(82,51,'6',6,'3',3,1,'普通'),(83,51,'6',8,'7',7,1,'普通'),(84,52,'9',9,'4',4,1,'普通'),(85,52,'9',9,'5',5,1,'普通'),(86,53,'8',8,'2',2,1,'普通'),(87,53,'9',9,'3',3,1,'普通'),(88,54,'5',5,'4',4,1,'普通'),(89,54,'6',6,'4',4,1,'普通'),(90,54,'7',7,'4',4,1,'普通'),(91,55,'6',6,'2',2,1,'普通'),(92,55,'6',6,'3',3,1,'普通'),(93,55,'7',7,'3',3,1,'普通'),(94,56,'5',5,'4',4,1,'普通'),(95,56,'4',4,'4',4,1,'普通'),(96,57,'5',5,'3',3,1,'普通'),(97,57,'6',6,'3',3,1,'普通'),(98,58,'7',7,'2',2,1,'普通'),(99,58,'7',7,'1',1,1,'普通'),(100,63,'6',17,'3',3,5625493863097993218,'普通区'),(101,63,'5',18,'4',4,5625493863097993218,'普通区'),(102,64,'9',14,'3',3,5625493863097993218,'普通区'),(103,64,'8',15,'3',3,5625493863097993218,'普通区'),(104,64,'7',16,'4',4,5625493863097993218,'普通区'),(105,65,'8',15,'7',7,5625493863097993218,'普通区'),(106,65,'9',16,'8',8,5625493863097993218,'普通区'),(107,66,'4',7,'7',7,1,'普通'),(108,67,'6',9,'6',6,1,'普通'),(109,68,'11',11,'3',3,1,'普通'),(110,69,'9',9,'3',3,1,'普通'),(111,70,'7',7,'3',3,1,'普通'),(112,70,'8',8,'4',4,1,'普通'),(113,71,'9',9,'3',3,1,'普通'),(114,72,'5',5,'2',2,1,'普通'),(115,73,'8',8,'3',3,1,'普通'),(116,74,'9',9,'4',4,1,'普通'),(117,75,'5',8,'6',6,1,'普通'),(118,76,'10',10,'5',5,1,'普通'),(119,77,'11',11,'3',3,1,'普通'),(120,78,'7',7,'3',3,1,'普通'),(121,79,'7',7,'3',3,1,'普通'),(122,80,'9',9,'3',3,1,'普通'),(123,33,'6',12,'3',3,1,''),(124,34,'7',6,'3',3,1,'普通'),(125,34,'6',7,'4',4,1,'普通'),(126,35,'5',8,'3',3,1,'普通'),(127,35,'4',9,'3',3,1,'普通'),(128,36,'4',9,'3',3,1,'普通'),(129,37,'6',7,'2',2,1,'普通'),(130,37,'7',6,'3',3,1,'普通'),(131,37,'7',6,'2',2,1,'普通'),(132,38,'4',6,'2',3,9999999999,'默认分区'),(133,38,'4',8,'4',7,9999999999,'默认分区'),(134,39,'10',15,'6',7,9999999999,''),(135,39,'11',16,'7',8,9999999999,''),(136,39,'12',17,'7',8,9999999999,''),(137,39,'14',17,'8',9,9999999999,''),(138,39,'13',16,'8',9,9999999999,''),(139,40,'14',25,'7',7,0,'默认分区'),(140,40,'14',25,'10',10,0,'默认分区'),(141,40,'16',26,'11',11,0,'默认分区'),(142,40,'16',26,'12',12,0,'默认分区'),(143,42,'4',7,'B',2,3076,'优享区'),(144,42,'3',8,'C',3,3076,'优享区'),(145,43,'5',6,'C',3,3076,'优享区'),(146,44,'6',6,'2',2,1,'普通'),(147,45,'6',6,'1',1,1,'普通'),(148,46,'3',3,'2',2,1,'普通'),(149,47,'8',5,'5',5,1,'普通'),(150,48,'8',8,'3',3,1,'普通'),(151,49,'7',7,'3',3,1,'普通'),(152,50,'5',8,'3',3,1,'普通'),(153,51,'4',9,'2',2,1,'普通'),(154,51,'4',9,'3',3,1,'普通'),(155,52,'5',8,'3',3,1,'普通'),(156,53,'6',7,'2',2,1,'普通'),(157,53,'5',8,'3',3,1,'普通'),(158,53,'5',8,'2',2,1,'普通'),(159,54,'7',7,'4',4,1,'普通'),(160,54,'7',7,'3',3,1,'普通'),(161,55,'6',6,'2',2,1,'普通'),(162,55,'5',5,'2',2,1,'普通'),(163,56,'8',8,'4',4,1,'普通'),(164,57,'8',8,'3',3,1,'普通'),(165,58,'8',11,'8',8,1,'普通'),(166,59,'8',11,'7',7,1,'普通'),(167,60,'10',10,'5',5,1,'普通'),(168,61,'9',9,'3',3,1,'普通'),(169,62,'8',8,'2',2,1,'普通'),(170,63,'8',11,'7',7,1,'普通'),(171,64,'7',10,'7',7,1,'普通'),(172,65,'9',9,'4',4,1,'普通'),(173,66,'09',11,'4',4,0,'默认分区'),(174,67,'7',7,'3',3,1,'普通'),(175,67,'6',6,'3',3,1,'普通'),(176,68,'8',8,'3',3,1,'普通'),(177,68,'9',9,'3',3,1,'普通'),(178,69,'9',9,'6',6,0,''),(179,69,'10',10,'6',6,0,''),(180,69,'10',10,'7',7,0,''),(181,69,'9',9,'7',7,0,''),(182,69,'9',9,'8',8,0,'');

#
# Structure for table "user"
#

CREATE TABLE `user` (
  `gender` int(11) NOT NULL,
  `headIcon` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `birthday` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `accountName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nickName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `uid` int(11) NOT NULL,
  `userId` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `balance` int(11) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='用户表';

#
# Data for table "user"
#

REPLACE INTO `user` VALUES (1,'https://th.bing.com/th/id/OIP.33QOjPO41FOqMft4mwRWlAHaHa?w=201&h=201&c=7&r=0&o=5&pid=1.7','1','1','1','1','13247526905',1,'13247526905',10000);

#
# Structure for table "user_coupon"
#

CREATE TABLE `user_coupon` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `couponId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "user_coupon"
#

REPLACE INTO `user_coupon` VALUES (1,1,1),(2,1,2);

#
# Structure for table "user_order"
#

CREATE TABLE `user_order` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "user_order"
#


#
# Procedure "NewProcedure"
#

CREATE PROCEDURE `NewProcedure`(Param int(11))
BEGIN
    UPDATE 
      `order` AS order_ 
    set
      order_.`status` = '2' 
    WHERE 1 = 1 
      AND order_.status = '0' 
      AND  (UNIX_TIMESTAMP() - order_.createDate) > 10 * 60 ;
END;
