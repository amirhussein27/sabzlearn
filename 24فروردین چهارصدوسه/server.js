const http=require('http')

http.createServer((req,res)=>{
	if (req.url==='/') {
		res.write('sabzlearn is the best')
		res.end()
	}
	else if (req.url==='/api/users') {
		res.write('list of sabzlearn users')
		res.end()
	}
	else if(req.url==='/api/courses'){
		res.write('list of sabzlearn courses')
		res.end()
	}
}).listen(3000)
console.log('server run on port 3000');