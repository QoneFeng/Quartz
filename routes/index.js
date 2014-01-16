
/*
 * GET home page.
 */

module.exports = function(app){
	app.get('/',function(req,res){
		res.render('index.html', {
			title: 'Upload'
		});
	});
	app.get('/file',function(req,res){
		res.render('index.html', {
			title: 'File'
		});
	});	
};