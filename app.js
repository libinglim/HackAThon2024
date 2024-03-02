
function handleClick(evt) {
    day = evt.currentTarget.clicked_id;
    document.getElementById("day-text").innerHTML =  "Day "+day;
    load();
}

for(let i = 1;i<32;i++)
{
    var button = document.getElementById("Day"+i);
    button.addEventListener('click', handleClick);
    button.clicked_id = i;
}

var day = 1;

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var month_index = 2;

var month_add = document.getElementById("MonthAdd");
var month_sub = document.getElementById("MonthSub");
var month_text = document.getElementById("MonthText");
month_add.addEventListener('click', incrementMonth);
month_sub.addEventListener('click', decrementMonth);

function decrementMonth()
{
    month_index--;
    if(month_index < 0)
    {
        month_index=11;
    }
    else if (month_index > 11)
    {
        month_index = 0;
    }
    month_text.innerHTML = months[month_index];
}

function incrementMonth()
{
    month_index++;
    if(month_index < 0)
    {
        month_index=11;
    }
    else if (month_index > 11)
    {
        month_index = 0;
    }
    month_text.innerHTML = months[month_index];
}

document.getElementById("save").addEventListener('click',save);
function save()
{
    localStorage.setItem(month_index+"-"+day,document.getElementById("text-box").value);
}
load();
function load()
{
    document.getElementById("text-box").value = localStorage.getItem(month_index+"-"+day);
    if (localStorage.getItem(month_index+"-"+day) == null)
    {
        document.getElementById("text-box").placeholder = "No event data entered for "+ months[month_index] + " "+day+", Enter and load data by clicking through the calendar!";
    }
}