
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







