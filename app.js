function handleClick() {
    alert('');
}

for(let i = 1;i<31;i++)
{
    var button = document.getElementById("Day"+i);
    button.addEventListener('click', handleClick);
}

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