import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/mycrm.css';
import '../css/all.min.css';
import $ from 'jquery';
import initialClients from './classes';

if (typeof sessionStorage["clients"] === "undefined")
    sessionStorage.setItem("clients", JSON.stringify(initialClients));

$(document).ready(function() {
    $(function(){
        var current_page_URL = window.location.href;
        var urlHash = window.location.hash;
        if (urlHash) {
            $('.nav-tabs a[href="' + urlHash + '"]').tab('show');
        }
        $('.nav-tabs a').on('show.bs.tab', function (e) {
            window.location.hash = $(this).prop('href').split("#")[1];
            $("#clientsubmenu li").removeClass('active');
            $('#clientsubmenu a[href="clients.html'+window.location.hash+'"]').parent('li').addClass('active');
        });

        $( ".sidebar-sticky .nav .nav-link" ).each(function() {

            if ($(this).attr("href") !== "#") {

                var target_URL = $(this).prop("href");

                if (target_URL === current_page_URL) {
                    $(this).parents('li, ul').removeClass('active');
                    $(this).parent('li').addClass('active');

                    return false;
                }
            }
        });
    });

    $("#clientsubmenu a").click(function(e) { // работает при переключении на clients.html
        $('.nav-tabs a[href="#' + $(this).prop("href").split("#")[1] + '"]').tab('show');
        //$("#clientsubmenu li").removeClass('active');
        //$(this).parent('li').addClass('active');
    });
});