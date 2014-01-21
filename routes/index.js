
/*
 * GET home page.
 */

module.exports = function(app){
	app.get('/',function(req,res){
		res.redirect(301, '/file/')
		res.render('index.html', {
			title: 'Quartz'
		});
	});
	app.get('/search*',function(req,res){
		var data = {};
		data.url = req.query.url;
		data.title = '搜索结果';
		res.render('search.html',data);
	});	
	app.get('/file/',function(req,res){
		res.render('file/index.html', {
			title: '文件管理'
		});
	});
	app.get('/file/search',function(req,res){
		res.render('file/search.html', {
			title: '路径查询'
		});
	});
	app.get('/file/edit',function(req,res){
		res.render('file/edit.html', {
			title: '文件修改'
		});
	});	
};