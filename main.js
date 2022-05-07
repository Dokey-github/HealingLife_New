// const { response } = require('express');
const express = require('express');
const app = express();
const qs = require('querystring');
//var path = require('path');
//app.use(express.static(__dirname + '/public'));


// var static = require('serve-static');
// app.use(serveStatic(path.join(__dirname, 'public')));
// app.use('/public', express.static(path.join(__dirname, '/public')));

app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, "public")));


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'platinum1225!',
    database: 'healinglife'
});

// connection.connect(); // mysql에 접속




// index.html(홈화면)
app.get('/', function (req, res) {

    // 홈페이지 전체 틀
    var html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome To Healing Life</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>



<body>

    <h1 class="title"><a class="title" href="/">Healing Life</a></h1>


    <div class="header">

        <a class="brand_Logo" href="/">
            <img class="brand_Logo" src="HealingLife_Logo_YellowGreen.png" alt="대표홈페이지">
        </a>



        <div class="gnb">
            <ul class="navbar-nav">
                <li>
                    <a>
                        회사소개
                    </a>
                </li>
                <li>
                    <a>
                        주요사업영역
                    </a>
                </li>
                <li>
                    <a>
                        구축실적
                    </a>
                </li>
                <li>
                    <a>
                        홍보센터
                    </a>
                </li>
                <li>
                    <a>
                        고객센터
                    </a>
                </li>
            </ul>
        </div>



        <div class="community">
            <ul class="float-right">
                <li>
                    <a href="">LOGIN</a>
                </li>
                <li>
                    <a href="">인트라넷</a>
                </li>
                <li>
                    <a href="">개인정보처리방침</a>
                </li>
            </ul>
        </div>

    </div>



    <div class="sub-top">
        <div class="container">
            <div class="tit">
                <h2>
                    <span id="sub_title_HongBo">홍보센터</span>
                </h2>
                <span class="copy">Healing Life는 프로페셔녈한 자세와 진정성으로 고객의 마음을 열어 다가가도록 하겠습니다.</span>
            </div>
        </div>
    </div> <!-- <sub-top div> -->

 
    `;

    var writingHtml = ``;    // 글 목록 전체를 표현해주는 HTML식

    // DB에서 글목록 불러오기
    connection.query('SELECT * FROM topic ORDER BY id DESC', function (err, topics) {

        if (err) {
            throw err;
        }

        //  글목록 HTML 작성 시작
        writingHtml = writingHtml + `
        <div class="list"> 
        `;

        var rowHtml = ``;

        // 글목록의 row 작성 시작
        for (var i = 0; i < topics.length; i++) {
            var topic = topics[i];
            var id = topic.id;                  // 글(row)의 id값
            var title = topic.title;            // 글 제목
            var descript = topic.description;   // 글 내용
            var date = topic.created;           // 글 작성 날짜
            var author_id = topic.author_id;    // 글 작성자 id값

            // console.log(topic);
            // console.log(title);
            // console.log(descript);
            // console.log(date);


            rowHtml = rowHtml + `
            <div class="row">
                <a href="/readScript/${id}">
                    <h3 class="row_title">
                        ${title}
                    </h3>
                </a>
                <a href="/readScript/${id}">
                    <div class="row_description">
                        <p>
                            ${descript}
                        </p>
                    </div>
                </a>
                <div class="row_date">
                    ${date}
                </div>
            </div> <!-- row div -->
            `;


        }
        //console.log(rowHtml);
        writingHtml = writingHtml + rowHtml;
        // 글목록 HTML 작성 마침
        writingHtml = writingHtml + `
        </div><!-- list div -->
        `;


        html = html + writingHtml;



        // chatBox 이미지(글쓰기 기능 버튼)
        html = html + `
        <div id="div_chatshow">
            <a class="btn_open" href="/tempWrite">
                <img src="btn_open.png">
            </a>
        </div>
        `;

        // 끝맺음
        html = html + `
        </body>
        </html>
        `;




        console.log('[Query Success] SELECT * FROM topic ');
        return res.send(html);
    });

});

// 글 작성 화면 -> write_process
app.get('/tempWrite', function (req, res) {

    var html = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Writing Page</title>
        <link rel="stylesheet" href="style.css">
    </head>
    
    
    
    <body>
    
    
        <h1 class="title"><a class="title" href="/">Healing Life</a></h1>
    
    
        <div class="header">
    
            <a class="brand_Logo" href="/">
                <img class="brand_Logo" src="HealingLife_Logo_YellowGreen.png" alt="대표홈페이지">
            </a>
    
    
    
            <div class="gnb">
                <ul class="navbar-nav">
                    <li>
                        <a>
                            회사소개
                        </a>
                    </li>
                    <li>
                        <a>
                            주요사업영역
                        </a>
                    </li>
                    <li>
                        <a>
                            구축실적
                        </a>
                    </li>
                    <li>
                        <a>
                            홍보센터
                        </a>
                    </li>
                    <li>
                        <a>
                            고객센터
                        </a>
                    </li>
                </ul>
            </div>
    
    
    
            <div class="community">
                <ul class="float-right">
                    <li>
                        <a href="">LOGIN</a>
                    </li>
                    <li>
                        <a href="">인트라넷</a>
                    </li>
                    <li>
                        <a href="">개인정보처리방침</a>
                    </li>
                </ul>
            </div>
    
        </div>
    
    
    
        <div class="sub-top">
            <div class="container">
                <div class="tit">
                    <h2>
                        <span id="sub_title_HongBo">홍보센터</span>
                    </h2>
                    <span class="copy">Healing Life는 프로페셔녈한 자세와 진정성으로 고객의 마음을 열어 다가가도록 하겠습니다.</span>
                </div>
            </div>
        </div> <!-- <sub-top div> -->
    
    
        <form name="writing_form" action="/write_process" method="post" onsubmit="return checkIsEmpty_Insert();">
            <div class="write_area">
                <div class="left_text">
                    <div class="left_title">Title</div>
                    <div class="left_description">Description</div>
                </div>
    
                <div class="input_boxes">
                    <div class="inner_boxes">
    
                        <div class="input_title">
                            <input name="title" id="title_box" placeholder="title">
                        </div>
    
                        <div>
                            <textarea name="description" id="descript_box" placeholder="description"></textarea>
    
                            <div class="buttons">
                                <div>
                                    <a href="/">
                                        <input id="cancel_button" type="button" value="CANCEL">
                                    </a>
                                </div>
                                <div>
                                    <input id="ok_button" type="submit" value="OK">
                                </div>
                            </div>
    
                        </div>
                    </div>
    
                </div>
            </div>
        </form>
    
    
    
    
    
        <script src="active.js"></script>
    </body>
    
    
    
    
    </html>
    `;


    // connection.query('SELECT * FROM topic', function (err, topics) {

    //     if (err) {
    //         throw err;
    //     }

    //     console.log('Nodejs Success!');
    //     return res.send(html);
    // });


    console.log('Load Writing page Success!');
    return res.send(html);
});
// 작성한 글 mysql에 전달 <- tempWrite
app.post('/write_process', function (request, response) {

    var body = '';

    request.on('data', function (data) {
        body = body + data;
    });


    request.on('end', function () {


        // var post = qs.parse(body);
        // var title = post.title;
        // var description = post.description;
        // fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        //   response.writeHead(302, {Location: `/?id=${title}`});
        //   response.end();
        // })
        //console.log(body);



        // var today = new Date();

        // var year = today.getFullYear();
        // var month = ('0' + (today.getMonth() + 1)).slice(-2);
        // var day = ('0' + today.getDate()).slice(-2);
        // var dateString = year + '-' + month + '-' + day;    
        // var hours = ('0' + today.getHours()).slice(-2);
        // var minutes = ('0' + today.getMinutes()).slice(-2);
        // var seconds = ('0' + today.getSeconds()).slice(-2);
        // var timeString = hours + ':' + minutes + ':' + seconds;
        // dateString = dateString + ' ' + timeString;

        // console.log(dateString);

        var writing = qs.parse(body);
        var title = writing.title;
        var descript = writing.description;

        // var query = `INSERT INTO topic (title, description, created, author_id) VALUES (${title}, ${descript}, ${dateString}, 1);`;
        var queryStr = `INSERT INTO topic 
        (title, description, created, author_id) 
        VALUES(?, ?, NOW(), ?)`;


        connection.query(queryStr, [title, descript, 1], function (err, topics) {
            if (err) {
                throw err;
            }

            console.log('title : ', title);
            console.log('description : ', descript);
            console.log("[POST Success]");
            console.log("[Query Success] INSERT");
            response.writeHead(302, { Location: '/' });
            // response.writeHead(200, {'Content-Type':'text/html'});
            response.end();

        });

    });




});


// 글 상세보기 화면
app.get('/readScript/:scriptId', function(req, res) {

    var html = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Writing Page</title>
        <base href="/" /><!--base 태그는 Unexpected token '<'과 같이 예기치 않은 토큰 값들의 유입을 막아준다 -> 모든 url이 아닌 미정의 url 에서 base url 이문제가 되는 경우가 생깁니다.-->
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>



    <body>


        <h1 class="title"><a class="title" href="/">Healing Life</a></h1>


        <div class="header">

            <a class="brand_Logo" href="/">
                <img class="brand_Logo" src="HealingLife_Logo_YellowGreen.png" alt="대표홈페이지">
            </a>



            <div class="gnb">
                <ul class="navbar-nav">
                    <li>
                        <a>
                            회사소개
                        </a>
                    </li>
                    <li>
                        <a>
                            주요사업영역
                        </a>
                    </li>
                    <li>
                        <a>
                            구축실적
                        </a>
                    </li>
                    <li>
                        <a>
                            홍보센터
                        </a>
                    </li>
                    <li>
                        <a>
                            고객센터
                        </a>
                    </li>
                </ul>
            </div>



            <div class="community">
                <ul class="float-right">
                    <li>
                        <a href="">LOGIN</a>
                    </li>
                    <li>
                        <a href="">인트라넷</a>
                    </li>
                    <li>
                        <a href="">개인정보처리방침</a>
                    </li>
                </ul>
            </div>

        </div>



        <div class="sub-top">
            <div class="container">
                <div class="tit">
                    <h2>
                        <span id="sub_title_HongBo">홍보센터</span>
                    </h2>
                    <span class="copy">Healing Life는 프로페셔녈한 자세와 진정성으로 고객의 마음을 열어 다가가도록 하겠습니다.</span>
                </div>
            </div>
        </div> <!-- <sub-top div> -->   
    `;

    //var filteredId = path.parse(req.params.scriptId).base;
    var sid = req.params.scriptId;
    //console.log('The script Id is : ', sid);


    var reading = `
    <div class="write_area">
        <div class="left_text">
            <div class="left_title">Title</div>
            <div class="left_description">Description</div>
        </div>

        <div class="input_boxes">
            <div class="inner_boxes">

                
    `;
 

    connection.query('SELECT * FROM topic WHERE id=?', [sid], function (err, script) {
        if(err){
            throw err;
        }

        //console.log(script);
        var _title = script[0].title;
        var _descript = script[0].description;
        //console.log(_descript);
        
        var title = `
        <div class="input_title">
            <input name="title" id="title_box_read" placeholder="title" value="${_title}" readonly>
        </div>
        
        `;
        var descript = `
            <div>
                <textarea name="description" id="descript_box_read" placeholder="description" readonly>${_descript}</textarea>
        
                <div class="buttons_read">
                    <form id="delete_form" action="/delete_process" method="post" onsubmit="return checkAgain_Delete();">
                        <div>
                            <input type="hidden" name="sid" value="${sid}">
                            <input id="delete_button" type="submit" value="Delete">
                        </div>
                    </form>
                    <div>
                        <a href="/">
                            <input id="list_button" type="button" value="Go List">
                        </a>
                    </div>
                    <div>
                        <a href="/modify/${sid}">
                            <input id="modify_button" type="button" value="Modify">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        `;
        
        
        
        
        
        
        reading = reading + title + descript;
        html = html + reading;   
        html = html + `        
                    <script src="active.js"></script>
                </body>
        
            </html>
        `;
        
        
        
        
        
        console.log('[Query Success] SELECT WHERE id =', sid);
        res.send(html);
        
    });


   

});


// 글 수정 화면
app.get('/modify/:scriptId', function(req, res) {

    var sid = req.params.scriptId;

    var html = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Writing Page</title>
        <base href="/" />  <!--base 태그는 Unexpected token '<'과 같이 예기치 않은 토큰 값들의 유입을 막아준다 -> 모든 url이 아닌 미정의 url 에서 base url 이문제가 되는 경우가 생깁니다.-->
        <link rel="stylesheet" href="style.css">
    </head>
    
    
    
    <body>
    
    
        <h1 class="title"><a class="title" href="/">Healing Life</a></h1>
    
    
        <div class="header">
    
            <a class="brand_Logo" href="/">
                <img class="brand_Logo" src="HealingLife_Logo_YellowGreen.png" alt="대표홈페이지">
            </a>
    
    
    
            <div class="gnb">
                <ul class="navbar-nav">
                    <li>
                        <a>
                            회사소개
                        </a>
                    </li>
                    <li>
                        <a>
                            주요사업영역
                        </a>
                    </li>
                    <li>
                        <a>
                            구축실적
                        </a>
                    </li>
                    <li>
                        <a>
                            홍보센터
                        </a>
                    </li>
                    <li>
                        <a>
                            고객센터
                        </a>
                    </li>
                </ul>
            </div>
    
    
    
            <div class="community">
                <ul class="float-right">
                    <li>
                        <a href="">LOGIN</a>
                    </li>
                    <li>
                        <a href="">인트라넷</a>
                    </li>
                    <li>
                        <a href="">개인정보처리방침</a>
                    </li>
                </ul>
            </div>
    
        </div>
    
    
    
        <div class="sub-top">
            <div class="container">
                <div class="tit">
                    <h2>
                        <span id="sub_title_HongBo">홍보센터</span>
                    </h2>
                    <span class="copy">Healing Life는 프로페셔녈한 자세와 진정성으로 고객의 마음을 열어 다가가도록 하겠습니다.</span>
                </div>
            </div>
        </div> <!-- <sub-top div> -->
    
    
        <form action="/modify_process/${sid}" method="post">
            <div class="write_area">
                <div class="left_text">
                    <div class="left_title">Title</div>
                    <div class="left_description">Description</div>
                </div>
    
                <div class="input_boxes">
                    <div class="inner_boxes">
    
                        
    `;


    connection.query('SELECT * FROM topic WHERE id=?', [sid], function (err, script) {
        if(err){
            throw err;
        }


        var _title = script[0].title;
        var _descript = script[0].description;



        var title = `
        <div class="input_title">
            <input name="title" id="title_box" placeholder="title" value="${_title}">
        </div>
    
    
        `;
        var descript = `
        <div>
            <textarea name="description" id="descript_box" placeholder="description">${_descript}</textarea>
    
            <div class="buttons">
                <div>
                    <a href="/readScript/${sid}">
                        <input id="cancel_button" type="button" value="CANCEL">
                    </a>
                </div>
                <div>
                    <input id="ok_button" type="submit" value="OK">
                </div>
            </div>
        </div>
        </div>
    
        </div>
        </div>
        </form>
    
    
    
        <script src="active.js"></script>
        </body>
    
    
    
    
        </html>
        `;
    
        console.log('Load Modify page Success!');

        html = html + title + descript;
        
        res.send(html);

    });

});
// 글 수정 프로세스
app.post('/modify_process/:scriptId', function (request, response) {

    var sid = request.params.scriptId;

    var body = '';

    request.on('data', function (data) {
        body = body + data;
    });


    request.on('end', function () {


        var writing = qs.parse(body);
        var title = writing.title;
        var descript = writing.description;

        // var query = `INSERT INTO topic (title, description, created, author_id) VALUES (${title}, ${descript}, ${dateString}, 1);`;
        var queryStr = `UPDATE topic 
        SET title = ?, description = ?, created = NOW() 
        WHERE id = ?`;



        var url = `/readScript/${sid}`;

        connection.query(queryStr, [title, descript, sid], function (err, topics) {
            if (err) {
                throw err;
            }

            console.log('[Query Success] UPDATE WEHRE id =', sid);

            response.writeHead(302, { Location: url });
            response.end();

        });

    });


});


// 글 삭제 처리 프로세스
app.post('/delete_process', function (request, response) {

    var body = '';

    request.on('data', function (data) {
        body = body + data;
    });


    request.on('end', function () {


        var writing = qs.parse(body);
        var scriptId = writing.sid;
        var queryStr = `DELETE FROM topic WHERE id = ?`;



        

        connection.query(queryStr, [scriptId], function (err, topics) {
            if (err) {
                throw err;
            }

            console.log('[Query Success] DELETE script');

            response.writeHead(302, { Location: '/' });
            response.end();

        });

    });


});


app.listen(3000, () => console.log('Healing Life is listening on port 3000!'));
// connection.end(); // mysql 종료

