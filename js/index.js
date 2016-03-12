var $post = $('.post'),
    $markers = $('.post-marker'),
    $footnotes = $('.post-footnotes');

function createSidenotes() {
    var $footnoteArray = $footnotes.children();

    $markers.parent().wrap("<div class='post-subject'></div>");

    for (var i = 0, len = $markers.length; i < len; i++) {
        $($('.post-subject')[i]).append(
            // role='complementary' provided for ARIA support
            "<aside class='post-sidenote' role='complementary'><p>"
            + $($footnoteArray[i]).html()
            + "</p></aside>"
        );
    }
  
    $post.addClass('has-sidenotes');
}

createSidenotes();