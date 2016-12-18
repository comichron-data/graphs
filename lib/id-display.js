module.exports = {
  render: render
};

function render(id) {
  var display = document.getElementById('id-display');
  display.textContent = '(id: ' + id + ')';
}
