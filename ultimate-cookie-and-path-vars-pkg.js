function getVarParse(){
    var getVars = new Array();
    var locvartemp = ( window.location.href.indexOf( "?" ) + 1 ) ? window.location.href.substr( window.location.href.indexOf( "?" ) + 1 ) : "";
    locvartemp = locvartemp.split( "&" );
    for( var x = 0; x < locvartemp.length; x++ ) {
        var lvTempVar = locvartemp[x].split( "=" );
        getVars[ unescape( lvTempVar[0] ) ] = unescape( lvTempVar[1] );
    }
    return getVars;
}
function setCookie(cname, cvalue, exdays) {
    if (exdays != undefined) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
    }
    else {
        document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + ";path=/";
    }
}
function getCookie(cname) {
  var name = encodeURIComponent(cname) + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return decodeURIComponent(c.substring(name.length, c.length));
    }
  }
  return null;
}
function deleteCookie(cname){
    document.cookie = encodeURIComponent(cname) +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}