import $ from 'jquery';
import 'bootstrap';
import ReactDOM from 'react-dom';
import React from 'react';
import ClientPage from '../components/ClientPage.jsx';

ReactDOM.render(<ClientPage />, document.getElementById('root'));

$(document).ready(function(){
    
    // $(".btn-user-delete").on('click',function(e){ // функции-обработчики кнопок "Удалить"
    //     //удаление объекта
    //     const delClient = $(this).closest(".list-group-item");
    //     clients.splice(delClient.attr("id"),1);
    //     update();
    //     delClient.animate({borderWidth: "10px"},1000)
    //         .animate({opacity: 0.4}, 1000)
    //         .animate({height: "hide"}, 1000, "linear", function() {alert("Animation complete"); delClient.remove();});

    //     e.stopPropagation();
    //     return false;
    // });
    $("#clientsubmenu").collapse('show');
});


if(window.location.hash === "")
    $("#fizSubmenu").addClass('active');

    