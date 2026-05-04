let count = 0;
function increaseCount ()
{
    count++;
    displayCount();
    checkCountValue()
}
function displayCount()
{
    document.getElementById('countDisplay').innerHTML = count;
}
function checkCountValue()
{
    switch (count)
    {
        case 10: 
            alert('follower reached 10');
            break;
        case 20: 
            alert('reached 20 wooh');
            break;
    }
}
