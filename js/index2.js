var $window = $(window),
    $document = $(document),
    $html = $('html'),
    $post = $('.post'),
    $footnotes = $('.footnotes'),
    noteTextArray = [];

function formatNotes() {
  var em = parseInt($html.css('font-size'));
  
  if ($window.width() >= 40*em) {
    setupSidenotes();
  } else {
    setupFootnotes();
  }
}

function setupSidenotes() {
  $post.addClass('has-sidenotes');
  $footnotes.hide();
  
  $('.sidenote').remove();
  
  // Remove, add, remove, add--there has to be a smarter way... Anyone?
  
  for (var i = 0; i < noteTextArray.length; i++) {
    $('[data-note=' + (i + 1) +']').parent().append("<p class='sidenote'>" + noteTextArray[i] + "</p>");
  }
}

function setupFootnotes() {
  $post.removeClass('has-sidenotes');
  $footnotes.show(); 
  
  $('.sidenote').remove();
}

$document.ready(function() {
  var $footnoteArray = $('.footnotes').children();
  
  for (var i = 0; i < $footnoteArray.length; i++) {
    noteTextArray.push($($footnoteArray[i]).html()); 
  }
  
  formatNotes();
});

$window.resize(function() {
  formatNotes();
});