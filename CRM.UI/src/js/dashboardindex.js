import $ from 'jquery';
import Chart from 'chart.js'

$("#mainpage").addClass('active');

let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
let date = new Date();
let weekday = date.toLocaleDateString("ru",  { weekday: 'long' });
$("#day").html(date.getDate());
$("#weekday").html(weekday);
$("#month").html(months[date.getMonth()]);

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
        labels: ["Новая", "В обработке", "Отклонена", "Закрыта"],
        datasets: [{
            label: "Количество заявок",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
            data: [2,5,1,7]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Статусы заявок'
        }
    }
});

new Chart(document.getElementById("donut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Высокий", "Средний", "Низкий"],
        datasets: [
            {
                label: "Приоритет",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
                data: [1,4,2]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Приоритеты активных заявок'
        }
    }
});