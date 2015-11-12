var http 	= require("http")
var express = require("express");
var app     = express();
var path    = require("path");
var url = require('url')

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/index.html'));
});

var data =[
		{
			header: 'Junior Java developer',
			company: 'Luxoft',
			description: 'High paid vacancy in the office on Beresteyskia underground station',
			salary: 500,
			currency: '$'
		},
		{
			header: 'Junior Python developer',
			company: 'Prom.ua',
			description: 'High paid vacancy in the office on Boryspilska underground station',
			salary: 10000,
			currency: 'grn'
		},
		{
			header: 'Junior Python developer',
			company: 'Prom.ua',
			description: 'High paid vacancy in the office on Boryspilska underground station',
			salary: 10000,
			currency: 'grn'
		},
		{
			header: 'Junior Python developer',
			company: 'Prom.ua',
			description: 'High paid vacancy in the office on Boryspilska underground station',
			salary: 400,
			currency: '$'
		},
		{
			header: 'Junior Java developer',
			company: 'Luxoft',
			description: 'High paid vacancy in the office on Beresteyskia underground station',
			salary: 500,
			currency: '$'
		},
		{
			header: 'Junior Python developer',
			company: 'Prom.ua',
			description: 'High paid vacancy in the office on Boryspilska underground station',
			salary: 8000,
			currency: 'grn'
		},
		{
			header: 'Middle Python developer',
			company: 'Prom.ua',
			description: 'High paid vacancy in the office on Boryspilska underground station',
			salary: 12000,
			currency: 'grn'
		},
		{
			header: 'Senior Python developer',
			company: 'Prom.ua',
			description: 'High paid vacancy in the office on Boryspilska underground station',
			salary: 10000,
			currency: 'grn'
		},

		{
			header: 'Senior Java developer',
			company: 'Luxoft',
			description: 'High paid vacancy in the office on Beresteyskia underground station',
			salary: 4000,
			currency: '$'
		},
		
	]

var per_page = 5

app.get('/feed', function(req,res) {
	console.log(req.url)
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query
	var i = query['page']
	console.log(query)
	if (data.length-i*per_page <=5)
		res.send(JSON.stringify({ data: data.slice(i*per_page)}))
	else
		res.send(JSON.stringify({ data: data.slice(i*per_page,(i+1)*per_page)}))
})

app.use('/static', express.static('static'));
app.use('/bower_components', express.static('bower_components'));

app.listen(3000);

console.log("Running at Port 3000");