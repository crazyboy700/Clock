if(pb.plugin.get('clock').settings.ax_enable == 1)
// Create a clock
function printTime() {
    var amorpm = 'am';
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    if(hours < 12) {
    document.getElementById('axdate').innerHTML = hours+':'+mins+':'+secs+' '+'am';
    }else if(hours > 12){
    document.getElementById('axdate').innerHTML = hours+':'+mins+':'+secs+' '+'pm';
    }
    // Add a 0 if seconds < 10
    if(secs < 10){
        document.getElementById('axdate').innerHTML = hours+':'+mins+':'+0+secs+' '+amorpm;
    }
}
setInterval(printTime, 1000);
