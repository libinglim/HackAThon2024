function handleClick() {
    alert('1');
}

for(let i = 1;i<25;i++)
{
    var button = document.getElementById("Day"+i);
    button.addEventListener('click', handleClick);
}