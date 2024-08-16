function updateTime() {

        var monthNames = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ]; 
        var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

        var today = new Date();

        document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " + 
        today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear());

    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();
