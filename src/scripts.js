'use strict'

function Search() {
  var $input = document.querySelector('.search__query');
  var $dictionary = document.querySelector('.dictionary');
  
  function init() {
    $input.addEventListener('input', function(event) {

      var $terms = document.querySelectorAll('.dictionary__term');
      
      $dictionary.style.display = 'none';

      for(var i = 0, word_count = $terms.length; i < word_count; i++) {
        var item = $terms[i];
        item.parentNode.style.display = item.textContent.startsWith(this.value) ? 'block' : 'none';
      }

      $dictionary.style.display = 'block';
      
    });
  }
  
  return {
    init: init
  }
  
}

Search().init();
