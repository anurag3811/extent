document.addEventListener('DOMContentLoaded', function() {
  var getButton = document.getElementById('getButton');
  var textArea = document.getElementById('textArea');
  
  getButton.addEventListener('click', function() {
    chrome.tabs.executeScript({ code: 'document.body.innerText' }, function(result) {
      textArea.value = result[0];
    });
  });
});
