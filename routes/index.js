
/*
 * GET home page.
 */

module.exports = function(app){
	app.get('/',function(req,res){
		res.render('index.html', {
			title: 'Quartz'
		});
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
};