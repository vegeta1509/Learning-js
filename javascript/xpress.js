var express= require('express');

var app= express();

var bodyparser= require('body-parser');

var urlencodedParser = bodyparser.urlencoded({ extended: false });


app.set('view engine','ejs');

/*app.use('/assets',function(req,res,next){
    next();
});*/
app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
/*app.get('/contacts',function(req,res){
    res.send('contact us');
});*/
app.get('/profile/:name',function(req,res){
    //res.send('id is'+req.params.id);
    var data={age: 19,job: 'student',hobbies: ['learning','singing','dancing']};
    res.render('profile',{person: req.params.name, data: data,qs: req.query});
});
app.post('/profile',urlencodedParser,function(req,res){
    //res.send('id is'+req.params.id);
    console.log(req.body);
    res.render('success',{data: req.body});
});
app.listen(4000);