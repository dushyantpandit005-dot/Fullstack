creating a server

// const http=require("http");

// function handler(req,res){
//     res.end("This is my first server");

// }

// const server=http.createServer(handler);

// server.listen(8000,()=>{
//     console.log(server is running at adddress http://localhost:8000);


// });

// 

// const http=require("http");

// function handler(req,res){
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.header);
//     res.end(this is first server);

// }

// const server=http.createServer(handler);

// server.listen(8000,()=>{
//     console.log(server is running at address http://localhost:8000);
// });


// const http=require("http");

// const server=http.createServer((req,res)=> {
//     res.writeHead(200,{"content-type":"text/html"});
//     // res.end("<h1> This is a heading </h1>");
//     res.write("<h1> this is a heading tag </h1>");
//     res.write("<p> this is a paragraph tag</p>");
//     res.end(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <table border="1">
//         <tr>
//             <th>Name</th>
//             <th>Age</th>
//         </tr>
//         <tr>
//             <th>Dushyant</th>
//             <th>20</th>
//         </tr>
//     </table>
// </body>
// </html>`)

// })

// server.listen(8000,()=>{
//     console.log(server is running at address http://localhost:8000);

// });

const http=require("http");

const server=http.createServer((req,res)=> {
    if(req.url==="/submission-form"){
        res.writeHead(200,{"content-type":"text/html"});
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <labelfor="name ">Name</label>
        <input type="text" placeholder="enter your name"> <br>
        <input type="radio" value="male" name="gender">male <br>
        <input type="radio" value="female" name="gender">female <br>
        <input type="submit" value="submit">
    </form>
</body>
</html>`);
    }
    else if(req.url==="/"){
        res.end("This is home page");
    }
})


server.listen(8000,()=>{
    console.log(`server is running at address http://localhost:8000`);

});