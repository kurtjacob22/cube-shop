function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var t_str = hours + ":" + minutes + ":" + seconds + " ";
  if (hours > 11) {
    t_str += "PM";
  } else {
    t_str += "AM";
  }
  document.getElementById("dateTime").innerHTML =
    currentTime.toDateString() + "<br>" + t_str;
}
setInterval(updateTime, 1000);
