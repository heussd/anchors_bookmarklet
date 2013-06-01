function appendAnchorLink(elements) {
  for (var i = 0; i < elements.snapshotLength; i++) {
    var element = elements.snapshotItem(i);
    identfier = element.id == "" ? element.name : element.id;
    
    var a = document.createElement('a');
    a.appendChild(document.createTextNode("#"));
    a.href = location.protocol + '//' + location.host + location.pathname + "#" + identfier;
  
    element.insertBefore(a, element.firstChild);
  }
	return;
}


var ids = document.evaluate('//*[@id]',document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
var names = document.evaluate('//a[@name]',document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
  
appendAnchorLink(ids);
appendAnchorLink(names);
