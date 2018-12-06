//GEO
var geoPos = '';
var geo = function() {
     if (YMaps.location.country != 'Россия') {
        geoPos = 'Странах СНГ';
        document.write('Странах СНГ');
    } else {
        /*Cities*/
        var citiesList = [];
        for (var i = 0; i < citiesListBase.length; i++) {
            var strJoin = citiesListBase[i].join(',');
            var strSplit = strJoin.split(',');
            citiesList.push(strSplit);
        }
        console.log(citiesList);
        var gorod = YMaps.location.city;
        for (var i = 0; i < citiesList.length; i++) {
            for (var j = 0; j < citiesList.length; j++) {
                if (citiesList[i][j] == gorod) {
                    return geoPos = (citiesList[i][5]);
                }
            }
        }
        }
};
//Вызов
document.getElementById('CountryStr').innerHTML = (geo());

//Date + 2
/*var dateTime = function() {
    var nowDate = new Date();
    document.getElementById('date').innerHTML = ((nowDate.getDate() + 2) + '.' + (nowDate.getMonth()) + '.' + (nowDate.getFullYear()));
};
dateTime();//Вызов*/

//Num--
if (localStorage.timeNumber < 61 || localStorage.timeNumber > 7) {
    for (var i = 0; i < document.getElementsByClassName('numbersjs').length; i++) {
    document.getElementsByClassName('numbersjs')[i].innerHTML = localStorage.timeNumber;
    }
}
var timeNumber = setInterval(function() {
    if (document.getElementsByClassName('numbersjs')[0].innerHTML > 7) {
        for (var i = 0; i < document.getElementsByClassName('numbersjs').length; i++) {
        document.getElementsByClassName('numbersjs')[i].innerHTML = document.getElementsByClassName('numbersjs')[i].innerHTML - 1;
        }
    }
    localStorage.setItem('timeNumber', document.getElementsByClassName('numbersjs')[0].innerHTML);
}, 15000);

//Phone-mask
$(".phone_mask").mask("+7(999)999-99-99");

//Popup
$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
     PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
}

//Вызов popup, когда мышь уходит за пределы окна браузера
$(window).on('mouseleave', function(e) {
    if (e.relatedTarget == null) {
        PopUpShow();
    }
});

//Search 'callback'
var u = new Url(window.location.pathname);
if (u.query.callback == true) {
    alert('Есть параметр callback, со значением: ' + u.query.callback);
}