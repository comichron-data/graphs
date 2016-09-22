var Awesomplete = require('awesomplete');

module.exports = {
  init: init
};

/**
 * @param  {Object[]} titles - Array from titles.json
 * @param  {Function} onSelect - Called with selected comic's id
 */
function init(titles, onSelect) {
  var input = element();

  var awesomplete = new Awesomplete(input, {
    list: titles.map(toItem),
    /**
     * @param  {String} itemLabel
     * @param  {String} input - User input
     * @return {Boolean} true if input matches itemLabel, false otherwise
     */
    filter: function(itemLabel, input) {
      return itemLabel.toLowerCase().indexOf(input.toLowerCase()) !== -1;
    },
    // sets input value after selection is made
    replace: function(selectedItem) {
      this.input.value = selectedItem.label;
    }
  });

  Awesomplete.$.bind(input, {
    'awesomplete-selectcomplete': function(event) {
      var selectedItem = event.text;

      onSelect(selectedItem.value);
    }
  });
}

// convert titles.json record to item for awesomplete
function toItem(titleRecord) {
  return {
    label: titleRecord.title + ' (' + titleRecord.publisher + ')',
    value: titleRecord.id
  };
}

function element() {
  return document.querySelector('#title-picker');
}