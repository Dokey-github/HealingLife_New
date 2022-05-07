
// Function Line

// function MsgBox() {
//    var inputText = document.getElementById("SearchingBar").value;
//    alert(inputText);



// }
// function EnterKey() {
//    if (window.event.keyCode == 13) {
//       MsgBox();
//       document.getElementById("SearchingBar").value = "";
//    }
// }

// function FetchFile(fileName, tagName) {
//    fetch(fileName).then(function (response) {
//       response.text().then(function (text) {
//          document.querySelector(tagName).innerHTML = text;
//       })
//    });
// }



// 
// function ChangeMouseStyle(idName) {

//    var obj = document.getElementById(idName);
//    obj.style = "cursor:pointer";


// }

// function AddNewEventClick(idName, otherFunction) {
//    var temp = document.getElementById(idName);
//    temp.addEventListener('click', function() {
//       //otherFunction();
//       Testing();
//    });

// }
// function AddNewEventKeyDown(idName, otherFunction) {
//    var temp = document.getElementById(idName);
//    temp.addEventListener('keydown', function() {
//       otherFunction();
//    });

// }
// function Testing() {
//    alert('Happy Day');
// }

//=====================================================================================
//=====================================================================================
// Real Code Line

// 돋보기에 Fetch()를, Onclick 이벤트에 붙여준다
// var rglass = document.getElementById('Rglass');
// rglass.addEventListener('click', function(){
//    FetchFile('SourcePages/Happy', 'article');
//    //alert("Testing");
// });

//AddNewEventClick('Rglass', FetchFile('Happy', 'article'));


// var xMark = document.getElementById('Xmark');
// var art = document.getElementById('Art');
// xMark.addEventListener('click', function() {

//    art.innerHTML = ""; 
//    //Testing(); 
//    //var temp = document.getElementsById('Art');   // 오류 발생 document.getElementById()는 이곳에서 호출되면 오류가 발생한다
//                                                    // document.querySelector()는 오류가 발생하지 않는다.
// });


// var search = document.getElementById('SearchingBar');
// search.addEventListener('keydown', function(){
//    EnterKey();
// });

//AddNewEventKeyDown('SearchingBar', EnterKey());
//AddNewEventClick("Xmark", Testing());







/* (!)Recover Here

function ShowMenu(fileName) {
   fetch(fileName).then(function (response) {
      response.text().then(function (text) {
         var inText = '<ol>';
         var menus = text.split(',');
         //console.log(menus);
         
         
         for(var i in menus) {
            //console.log(menus[i]);
            //inText = inText +
            //Full Command : <ol><li><a href = "../Pages/menus[i].html">menus[i]</a><li></ol>
            inText = inText + '<li>';
            inText = inText + '<a';
            inText = inText + ' href="../Pages/';
            inText = inText + menus[i];
            inText = inText + '.html">';
            inText = inText + menus[i];
            inText = inText + '</a>';
            inText = inText + '</li>';


         }
         
         inText = inText + '</ol>';
         console.log(inText);
         document.querySelector('article').innerHTML = inText;

      })
   });

   isClicked = 0;
}
function HideMenu() {
   document.querySelector('article').innerHTML = "";
   isClicked = -1;
}


var isClicked = -1;
var menu = document.getElementById('Menu');
menu.addEventListener('click', function() {

   if(isClicked == -1)
      ShowMenu('../SourcePages/Menu');
   else
      HideMenu();

});

*/


//var connection = require('../main.js');
//import connection from 'main.js';

// var button = document.getElementById('ok_button');
// button.addEventListener('click', function (event) {
//    //alert('Hello world, ' + event.target.value);
//    // alert('Happy Day:D');
//    var title = document.getElementById('title_box').value;
//    var descript = document.getElementById('descript_box').value;
//    var today = new Date();
//    //var connection = con.connection;


//    // if(title)
//    //    alert(title);
//    // else
//    //    alert('Empty value');

//    // if(descript)
//    //    alert(descript);
//    // else
//    //    alert('Empty value');

//    var query = `INSERT INTO topic
//     (title, description, created, author_id)
//     VALUES (${title}, ${descript}, ${today}, 1)`;

//    // connection.query(query, function (err, topics) {
//    //    if (err) {
//    //        throw err;
//    //    }

//    //    console.log('Insert Success!');
//    // });


// //   alert('Happy Day:D');


// });


// var submitAction = function(e) {
// 	e.preventDefault();
//    e.stopPropagation();
// };
// var submitActionNull = function(){};

// var delete_button = document.getElementById('delete_button');
// var delete_form   = document.getElementById('delete_form');
// delete_button.addEventListener('click', function(event){


//    var con_res = confirm("Do you really want to delete this script?");
//    // 확인 버튼을 누른다면
//    if(con_res == true) {
//       delete_form.bind('submit', submitActionNull);
//       return;
//    }
//    // 취소 버튼을 누른다면
//    else{
//       delete_form.bind('submit', submitAction);
//       return;
//    }


// });
var isEmpty = function (value) {
   if (value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
      return true
   }
   else {
      return false
   }
};

// 글 삭제 여부를 한번 더 물어보게 하는 함수
function checkAgain_Delete() {

   var con_res = confirm("Do you really want to delete this script?");

   // 확인 버튼을 누른다면
   if (con_res == true) {
      return true;
   }
   // 취소 버튼을 누른다면
   else {
      return false;
   }

}

// 글 작성시 input value의 empty여부를 확인해주는 함수
function checkIsEmpty_Insert() {

   var title_box = document.getElementById('title_box');
   var descript_box = document.getElementById('descript_box');
   
   var title = title_box.value;
   var descript = descript_box.value;  // descript_box.val();로 textarea value값 접근 시 일렬의 과정을 생략하고 무조건 함수를 return true로 하는 오류가 발생함


   if (isEmpty(title)) {
      alert('title is empty. Please fill the title');
      return false;
   }
   else if (isEmpty(descript)) {
      alert('description is empty. Please fill the description');
      return false;
   }

   return true;
}


