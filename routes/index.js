/*
 * GET home page.
 */
var mongodb = require('../models/db');
module.exports = function(app) {
	app.get('/', function(req, res) {
		res.redirect(301, '/file/');
		res.render('index.html', {
			title: 'Quartz'
		});
	});
	app.get('/search*', function(req, res) {
		var data = {};
		data.url = req.query.url;
		data.title = '搜索结果';
		res.render('search.html', data);
	});

	app.get('/file/', function(req, res) {
		res.render('file/index.html', {
			title: '文件管理'
		});
		
	});
	app.get('/file/search', function(req, res) {
		res.render('file/search.html', {
			title: 'URL查询'
		});
	});
	app.get('/file/edit', function(req, res) {
		res.render('file/edit.html', {
			title: '文件修改'
		});
	});

	app.get('/file/add', function(req, res) {
		res.render('file/add.html', {
			title: '新增文件',
			success: req.flash('success').toString(),
			error: req.flash('error').toString()
		});
	});
	app.post('/file/add', function(req, res) {
		var file = {};
		var folderArray = req.body.folder; //文件夹
		var num = folderArray.length - 1;
		file.folder = folderArray[num];
		file.name = req.body.name; //名称
		file.qFileName = req.body.qFileName; //文件名
		file.qTitle = req.body.qTitle; //页面名称
		file.qIsEdit = req.body.qIsEdit; //是否编辑
		file.qUrl = req.body.qUrl; //访问地址
		file.qPathUrl = req.body.qPathUrl; //文件路径
		//存储各种时间格式，方便以后扩展
		var date = new Date();
		var time = {
			date: date,
			year: date.getFullYear(),
			month: date.getFullYear() + "-" + (date.getMonth() + 1),
			day: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
			minute: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
				date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
		}
		file.time = time;
		//打开数据库
		mongodb.open(function(err, db) {
			if (err) {
				req.flash('error', err);
				return res.redirect('/file/add');
			}
			//读取 file 集合
			db.collection('file', function(err, collection) {
				if (err) {
					mongodb.close();
					req.flash('error', err);
					return res.redirect('/file/add');
				}
				
				collection.insert(file, {
					safe: true
				}, function(err) {
					mongodb.close();
					if (err) {
						req.flash('error', err); //失败！返回 err
						return res.redirect('/file/add');
					}
					req.flash('success', '发布成功!');
					res.redirect('/file/'); //添加成功后返回首页
				});
			});
		});

	});

	app.get('/upload/', function(req, res) {
		res.render('upload/index.html', {
			title: '上传'
		});
	});
	app.get('/upload/search', function(req, res) {
		res.render('upload/search.html', {
			title: '路径查询'
		});
	});

	app.get('/monitor/', function(req, res) {
		res.redirect(301, '/monitor/jobui/weixin');
	});	
	app.get('/monitor/jobui/weixin', function(req, res) {
		res.render('monitor/jobui/weixin.html', {
			title: '微信公众号'
		});
	});
};