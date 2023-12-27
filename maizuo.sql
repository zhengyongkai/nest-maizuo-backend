# Host:   (Version: 5.7.26)
# Date: 2023-12-27 22:47:15
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

INSERT INTO `coupon` VALUES (1,'长期优惠券',1735086603,2,'每单能够优惠2元钱','长期'),(2,'临时优惠券',1703723403,2,'每单能够优惠2元钱',NULL),(3,'过期优惠券',1703291403,2,'每单能够优惠2元钱',NULL);

#
# Structure for table "order"
#

CREATE TABLE `order` (
  `userId` int(255) NOT NULL,
  `cinemaId` int(255) NOT NULL,
  `cinemaName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `showAt` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `endAt` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hallId` int(50) DEFAULT NULL,
  `hallName` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `filmId` int(11) DEFAULT NULL,
  `filmName` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `scheduleId` int(50) DEFAULT NULL,
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(1) DEFAULT '0' COMMENT '0:未支付，1:已支付',
  `price` int(11) DEFAULT '0',
  `poster` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "order"
#

INSERT INTO `order` VALUES (1,4601,'深圳百川影城IMAX新沙天虹店','1703905800','1703912220',4,'4号厅',6666,'一闪一闪亮星星',398664868,37,0,4290,NULL,NULL),(1,4601,'深圳百川影城IMAX新沙天虹店','1703905800','1703912220',4,'4号厅',6666,'一闪一闪亮星星',398664868,38,0,4290,NULL,NULL),(1,4601,'深圳百川影城IMAX新沙天虹店','1703905800','1703912220',4,'4号厅',6666,'一闪一闪亮星星',398664868,39,0,4290,'https://pic.maizuo.com/usr/movie/6c47eb5dc41e76cb7eaa8b48198cb486.jpg','宝安区沙井街道西环路2105号新沙天虹7楼'),(1,4601,'深圳百川影城IMAX新沙天虹店','1703913240','1703919660',4,'4号厅',6666,'一闪一闪亮星星',396643718,40,0,8580,'https://pic.maizuo.com/usr/movie/6c47eb5dc41e76cb7eaa8b48198cb486.jpg','宝安区沙井街道西环路2105号新沙天虹7楼'),(1,4601,'深圳百川影城IMAX新沙天虹店','1703905800','1703912220',4,'4号厅',6666,'一闪一闪亮星星',398664868,41,0,8580,'https://pic.maizuo.com/usr/movie/6c47eb5dc41e76cb7eaa8b48198cb486.jpg','宝安区沙井街道西环路2105号新沙天虹7楼'),(1,4601,'深圳百川影城IMAX新沙天虹店','1703905800','1703912220',4,'4号厅',6666,'一闪一闪亮星星',398664868,42,0,4290,'https://pic.maizuo.com/usr/movie/6c47eb5dc41e76cb7eaa8b48198cb486.jpg','宝安区沙井街道西环路2105号新沙天虹7楼');

#
# Structure for table "seat"
#

CREATE TABLE `seat` (
  `seatId` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` int(11) NOT NULL DEFAULT '0',
  `columnId` int(11) NOT NULL DEFAULT '0',
  `columnNum` int(11) NOT NULL DEFAULT '0',
  `rowId` int(11) NOT NULL DEFAULT '0',
  `rowNum` int(11) NOT NULL DEFAULT '0',
  `sectionId` int(11) NOT NULL DEFAULT '0',
  `sectionName` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`seatId`)
) ENGINE=MyISAM AUTO_INCREMENT=54 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "seat"
#

INSERT INTO `seat` VALUES (43,30,5,0,3,3,1,'普通'),(44,30,6,0,3,3,1,'普通'),(45,31,7,0,4,4,1,'普通'),(46,31,8,0,4,4,1,'普通'),(47,32,6,0,3,3,1,'普通'),(48,32,7,0,4,4,1,'普通'),(49,32,8,0,4,4,1,'普通'),(50,33,3,0,7,7,1,''),(51,34,4,0,5,5,1,''),(52,34,7,0,8,8,1,''),(53,35,2,0,3,3,1,''),(54,36,3,0,4,4,1,''),(55,36,4,0,6,6,1,''),(56,37,4,0,4,4,1,''),(57,38,5,0,7,7,1,''),(58,39,3,0,6,6,1,''),(59,40,8,0,9,9,1,''),(60,40,9,0,9,9,1,''),(61,41,5,10,3,3,1,''),(62,41,6,11,3,3,1,''),(63,42,10,12,8,8,1,'');

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

INSERT INTO `user` VALUES (1,'https://tse1-mm.cn.bing.net/th/id/OIP-C.DJPdaeUJcdUoF_cACpWRRAAAAA?w=157&h=180&c=7&r=0&o=5&pid=1.7','1','1','1','打洗臭臭猪','打洗臭臭猪',1,'13247526905');

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

INSERT INTO `user_coupon` VALUES (1,1,1),(2,1,2),(3,1,3);

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

