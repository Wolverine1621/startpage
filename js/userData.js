var local = false;

if (local) {
  throw new Error("Development")
} else {
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

var checkUsername = getCookie("username")
var checkApiKey = getCookie("apiKey")

if (checkUsername === "") {
    checkUsername = prompt("Enter your LastFM username:", "")
    setCookie("username", checkUsername, 4000)
}



if (checkApiKey === "") {
    checkApiKey = prompt("Enter your LastFM API Key (Note: API Keys are stored on the user's machine ONLY):", "")
    setCookie("apiKey", checkApiKey, 4000)
}}



