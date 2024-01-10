# Host: localhost  (Version: 5.7.26)
# Date: 2024-01-10 20:42:34
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "coupon"
#

CREATE TABLE `coupon` (
  `couponId` int(11) NOT NULL,
  `couponName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `expiration` int(20) NOT NULL DEFAULT '0',
  `remission` double NOT NULL DEFAULT '0',
  `descption` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tag` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`couponId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='优惠券';

#
# Data for table "coupon"
#

REPLACE INTO `coupon` VALUES (1,'长期优惠券',1735086603,2,'每单能够优惠2元钱','长期'),(2,'临时优惠券',1703723403,2,'每单能够优惠2元钱',NULL),(3,'过期优惠券',1703291403,2,'每单能够优惠2元钱',NULL);

#
# Structure for table "dict"
#

CREATE TABLE `dict` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `dictParam` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `dictName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dictValue` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "dict"
#

REPLACE INTO `dict` VALUES (1,'order_status','未支付',0),(2,'order_status','出票成功',1),(3,'order_status','订单取消',2);

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
  `oNum` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  `status` int(1) DEFAULT '0' COMMENT '0:未支付，1:已支付',
  `price` int(11) DEFAULT '0',
  `poster` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `createDate` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `cinemaPhone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tradeNo` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `tradeTime` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=MyISAM AUTO_INCREMENT=108 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "order"
#

REPLACE INTO `order` VALUES (1,876,'中影德金影城和平店','1703689200','1703696700','71512177','1号厅 双人观影免费停车',6681,'海王2：失落的王国',404066829,30,'0',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(1,876,'中影德金影城和平店','1703689200','1703696700','71512177','1号厅 双人观影免费停车',6681,'海王2：失落的王国',404066829,31,'0',0,62,NULL,NULL,NULL,NULL,NULL,NULL),(1,876,'中影德金影城和平店','1703689200','1703696700','71512177','1号厅 双人观影免费停车',6681,'海王2：失落的王国',404066829,32,'0',0,9300,NULL,NULL,NULL,NULL,NULL,NULL),(1,4601,'深圳百川影城IMAX新沙天虹店','1704112020','1704119040','0000000000000008','8号厅',6664,'年会不能停！',405987764,89,'n4v-8os-3ht-5et-uataggoj9',1,3890,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区沙井街道西环路2105号新沙天虹7楼','1704109944','0755-29891309','2024010122001411230501768673','1704109958'),(1,876,'中影德金影城和平店','1704114600','1704121620','71512181','5号厅 双人观影免费停车',6664,'年会不能停！',405707090,90,'7kv-kph-g9r-a6h-fh6pn2mc3',2,3800,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）','1704113621','0755-29971666',NULL,NULL),(1,4601,'深圳百川影城IMAX新沙天虹店','1704288900','1704295920','0000000000000007','7号厅',6664,'年会不能停！',405503865,91,'ld6-jbh-5lo-7of-vgoej9uc4',2,3890,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区沙井街道西环路2105号新沙天虹7楼','1704285953','0755-29891309',NULL,NULL),(1,4601,'深圳百川影城IMAX新沙天虹店','1704288900','1704295920','0000000000000007','7号厅',6664,'年会不能停！',405503865,92,'259-3u1-i30-vg8-3lqjivss8',2,3890,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区沙井街道西环路2105号新沙天虹7楼','1704286240','0755-29891309',NULL,NULL),(1,4601,'深圳百川影城IMAX新沙天虹店','1704288900','1704295920','0000000000000007','7号厅',6664,'年会不能停！',405503865,93,'f9u-3l7-gi6-tlh-a810adqu6',1,3890,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区沙井街道西环路2105号新沙天虹7楼','1704287346','0755-29891309','2024010322001411230501787956','1704287426'),(1,876,'中影德金影城和平店','1704463800','1704470820','71512181','5号厅 双人观影免费停车',6664,'年会不能停！',407736337,94,'a0q-ip8-djf-6me-jt53g1i22',1,3800,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）','1704452898','0755-29971666','2024010522001411230501801223','1704452958'),(1,876,'中影德金影城和平店','1704463800','1704470820','71512181','5号厅 双人观影免费停车',6664,'年会不能停！',407736337,95,'rn6-6il-r0f-ahr-apkou4057',2,11400,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）','1704455699','0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1704463800','1704470820','71512181','5号厅 双人观影免费停车',6664,'年会不能停！',407736337,96,'19h-pk5-e94-p2g-b9panq9a7',2,7600,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）','1704456277','0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1704463800','1704470820','71512181','5号厅 双人观影免费停车',6664,'年会不能停！',407736337,97,'q5k-bfg-0uu-4aq-mbda2fue9',0,11400,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）','1704457281','0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1704463800','1704470820','71512181','5号厅 双人观影免费停车',6664,'年会不能停！',407736337,98,'dnv-9pn-fi5-gj9-bchql7943',0,3800,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）','1704459650','0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1704463800','1704470820','71512181','5号厅 双人观影免费停车',6664,'年会不能停！',407736337,99,'f7u-t7h-qlf-ab6-jcknbe6tm',0,3800,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）','1704461783','0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1704463800','1704470820','71512181','5号厅 双人观影免费停车',6664,'年会不能停！',407736337,100,'li7-gua-dom-bu0-dlfht6t1h',0,7600,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）','1704461794','0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1704463800','1704470820','71512181','5号厅 双人观影免费停车',6664,'年会不能停！',407736337,101,'8pb-oeh-9lc-kcn-cgmhour5d',0,3800,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）','1704462445','0755-29971666',NULL,NULL),(1,876,'中影德金影城和平店','1704522000','1704529020','71512179','3号厅 双人观影免费停车',6664,'年会不能停！',407908838,102,'3dl-59t-lch-iev-snk16pbci',1,19000,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）','1704463140','0755-29971666','2024010522001411230501816229','1704463255'),(1,876,'中影德金影城和平店','1704718200','1704725220','71512179','3号厅 双人观影免费停车',6664,'年会不能停！',408787458,103,'e56-37k-kr5-fsk-kt59argf3',0,3800,'https://pic.maizuo.com/usr/movie/24c343e5bed9f0e75b4a676e77d591ae.jpg','宝安区福永镇和平村桥和路315号（德金财富广场）','1704714776','0755-29971666',NULL,NULL),(1,8119,'英皇电影城（东海缤纷店）','1704720600','1704728100','0000000000000007','7号VIP厅',6661,'金手指',407894937,104,'10b-j5m-v43-lpu-fm6vbj79d',0,14300,'https://pic.maizuo.com/usr/movie/37c604f9c5c165b8fd110a926037f8c1.jpg','深圳市福田区东海缤纷天地商场B1层','1704717485','0755-32935088',NULL,NULL),(1,8119,'英皇电影城（东海缤纷店）','1704720600','1704728100','0000000000000007','7号VIP厅',6661,'金手指',407894937,105,'afo-6oj-sao-ll3-p8orv3bqm',0,14300,'https://pic.maizuo.com/usr/movie/37c604f9c5c165b8fd110a926037f8c1.jpg','深圳市福田区东海缤纷天地商场B1层','1704717517','0755-32935088',NULL,NULL),(1,8119,'英皇电影城（东海缤纷店）','1704720600','1704728100','0000000000000007','7号VIP厅',6661,'金手指',407894937,106,'q56-oeb-blg-ml4-2lunjcrqe',0,14300,'https://pic.maizuo.com/usr/movie/37c604f9c5c165b8fd110a926037f8c1.jpg','深圳市福田区东海缤纷天地商场B1层','1704717593','0755-32935088',NULL,NULL),(1,4601,'深圳百川影城IMAX新沙天虹店','1704803700','1704810120','0000000000000003','3号厅',6666,'一闪一闪亮星星',407922546,107,'8t8-rsv-s4v-1ql-hbnk8o9nf',0,3890,'https://pic.maizuo.com/usr/movie/6c47eb5dc41e76cb7eaa8b48198cb486.jpg','宝安区沙井街道西环路2105号新沙天虹7楼','1704799533','0755-29891309',NULL,NULL);

#
# Structure for table "seat"
#

CREATE TABLE `seat` (
  `seatId` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` int(11) NOT NULL DEFAULT '0',
  `columnId` varchar(11) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  `columnNum` int(11) NOT NULL DEFAULT '0',
  `rowId` varchar(11) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  `rowNum` int(11) NOT NULL DEFAULT '0',
  `sectionId` int(11) NOT NULL DEFAULT '0',
  `sectionName` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`seatId`)
) ENGINE=MyISAM AUTO_INCREMENT=153 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "seat"
#

REPLACE INTO `seat` VALUES (43,30,'5',0,'3',3,1,'普通'),(44,30,'6',0,'3',3,1,'普通'),(45,31,'7',0,'4',4,1,'普通'),(46,31,'8',0,'4',4,1,'普通'),(47,32,'6',0,'3',3,1,'普通'),(48,32,'7',0,'4',4,1,'普通'),(49,32,'8',0,'4',4,1,'普通'),(50,33,'3',0,'7',7,1,''),(51,34,'4',0,'5',5,1,''),(52,34,'7',0,'8',8,1,''),(53,35,'2',0,'3',3,1,''),(54,36,'3',0,'4',4,1,''),(55,36,'4',0,'6',6,1,''),(56,37,'4',0,'4',4,1,''),(57,38,'5',0,'7',7,1,''),(58,39,'3',0,'6',6,1,''),(59,40,'8',0,'9',9,1,''),(60,40,'9',0,'9',9,1,''),(61,41,'5',10,'3',3,1,''),(62,41,'6',11,'3',3,1,''),(63,42,'10',12,'8',8,1,''),(64,43,'6',8,'1',1,1,''),(65,43,'5',10,'3',3,1,''),(66,44,'9',11,'1',1,1,''),(67,44,'7',12,'5',5,1,''),(68,45,'2',7,'2',2,1,''),(69,46,'5',7,'1',1,1,''),(70,47,'8',8,'5',5,5119,''),(71,47,'9',9,'5',5,5119,''),(72,48,'9',9,'4',4,1,'普通'),(73,48,'10',10,'5',5,1,'普通'),(74,49,'9',11,'6',6,5119,''),(75,49,'10',12,'7',7,5119,''),(76,50,'8',8,'4',4,1,'普通'),(77,50,'9',9,'4',4,1,'普通'),(78,51,'6',8,'6',6,1,'普通'),(79,51,'7',9,'6',6,1,'普通'),(80,52,'7',7,'5',5,1,'普通'),(81,52,'8',8,'5',5,1,'普通'),(82,53,'8',8,'4',4,1,'普通'),(83,53,'9',9,'2',2,1,'普通'),(84,54,'1',9,'7',7,1,'普通'),(85,55,'3',10,'3',3,1,'普通'),(86,55,'4',9,'3',3,1,'普通'),(87,56,'5',8,'3',3,1,'普通'),(88,56,'4',9,'3',3,1,'普通'),(89,56,'3',10,'3',3,1,'普通'),(90,57,'3',10,'5',5,1,'普通'),(91,58,'2',11,'3',3,1,'普通'),(92,59,'1',9,'6',6,1,'普通'),(93,60,'8',8,'4',4,1,'普通'),(94,60,'8',8,'5',5,1,'普通'),(95,61,'8',8,'3',3,1,'普通'),(96,61,'9',9,'4',4,1,'普通'),(97,62,'8',8,'5',5,1,'普通'),(98,62,'9',9,'5',5,1,'普通'),(99,63,'7',7,'5',5,1,'普通'),(100,64,'11',13,'8',8,1,''),(101,65,'11',13,'7',7,1,''),(102,66,'5',15,'3',3,1,''),(103,67,'2',10,'3',3,1,''),(104,68,'4',17,'2',2,1,''),(105,69,'2',20,'10',10,1,''),(106,70,'2',20,'10',10,1,''),(107,71,'4',9,'4',4,1,'普通'),(108,72,'6',11,'6',6,1,''),(109,73,'4',9,'5',5,1,''),(110,74,'7',12,'6',6,1,''),(111,75,'7',12,'3',3,1,''),(112,76,'6',11,'6',6,1,''),(113,77,'8',13,'5',5,1,''),(114,78,'9',14,'7',7,1,''),(115,79,'7',12,'7',7,1,''),(116,80,'7',12,'4',4,1,''),(117,81,'7',12,'6',6,1,''),(118,82,'5',8,'3',3,1,'普通'),(119,82,'4',9,'4',4,1,'普通'),(120,83,'3',10,'4',4,1,'普通'),(121,84,'2',8,'6',6,1,'普通'),(122,85,'5',15,'8',8,1,''),(123,86,'13',16,'1',1,1,''),(124,87,'6',6,'2',2,1,'普通'),(125,88,'11',15,'6',7,1,'优选区'),(126,89,'1',6,'3',3,1,''),(127,90,'7',7,'1',1,1,'普通'),(128,91,'2',10,'3',3,1,''),(129,92,'4',8,'4',4,1,''),(130,93,'2',10,'4',4,1,''),(131,94,'6',6,'3',3,1,'普通'),(132,95,'5',5,'2',2,1,'普通'),(133,95,'6',6,'2',2,1,'普通'),(134,95,'6',6,'3',3,1,'普通'),(135,96,'6',6,'2',2,1,'普通'),(136,96,'6',6,'3',3,1,'普通'),(137,97,'7',7,'3',3,1,'普通'),(138,97,'6',6,'2',2,1,'普通'),(139,97,'6',6,'3',3,1,'普通'),(140,98,'4',4,'4',4,1,'普通'),(141,99,'5',5,'3',3,1,'普通'),(142,100,'6',6,'4',4,1,'普通'),(143,100,'7',7,'2',2,1,'普通'),(144,101,'5',5,'2',2,1,'普通'),(145,102,'5',8,'2',2,1,'普通'),(146,102,'5',8,'4',4,1,'普通'),(147,102,'6',7,'3',3,1,'普通'),(148,102,'4',9,'3',3,1,'普通'),(149,102,'6',7,'4',4,1,'普通'),(150,103,'5',8,'3',3,1,'普通'),(151,106,'5',6,'B',2,3076,'优享区'),(152,107,'14',14,'8',8,1,'');

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
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='用户表';

#
# Data for table "user"
#

REPLACE INTO `user` VALUES (1,'https://tse1-mm.cn.bing.net/th/id/OIP-C.DJPdaeUJcdUoF_cACpWRRAAAAA?w=157&h=180&c=7&r=0&o=5&pid=1.7','1','1','1','打洗臭臭猪','打洗臭臭猪',1,'12345678');

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

REPLACE INTO `user_coupon` VALUES (1,1,1),(2,1,2),(3,1,3);

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
