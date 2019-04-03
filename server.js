let http = require('http')

//서버 객체를 하나 생성
let httpd = http.createServer(function(request, response){
   console.log("request["+ request.url+"]");
   response.writeHead(200, {
       "Content-Type" : "text/html"
   });

   response.end("<h1>Hello World</h1>");
});

// 실행
 httpd.listen(8088, function(){
     console.log("httpd starts....");
 });