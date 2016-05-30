
function update(result) {
  $('div').append(result + " ");
}

$(document).ready(function() {
  $('#input').on('focus', function() {
    update('<strong>The first box is focused!</strong>')
  });

  $('#input2').on('focus', function() {
    update('<strong>The second box is focused!</strong>')
  });

  $('.texty').on('keypress', function() {
    update('A key has been pressed!')
  });

  $('input').on('mouseEnter', function() {
    update('Get your filthy mouse off me!')
  });

  $('#button').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    update('Argh I am being clicked!');
  });

  $('#reset').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.result').empty();
    $('#input').val('');

  });
});