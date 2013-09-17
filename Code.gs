function doGet() {
 
  // Fetch XML
  var response = UrlFetchApp.fetch("http://wordcentral.com/buzzword/rss.xml").getContentText();

  // Parse XML
  var parsedResponse = Xml.parse(response, false);
  var word = parsedResponse.getElement().getElement('channel').getElement('item').getElement('title').getText(); 
  var desc = parsedResponse.getElement().getElement('channel').getElement('item').getElement('description').getText(); 
  
   var re = new RegExp('<div class="defset".*</div></div>', "g");
   var myArray = desc.match(re);
   var def = myArray[0];


return HtmlService.createHtmlOutput( '<div style="background-color:#e9eccf"><h2>' + word + "</h2>" + def + "</div>");

}
