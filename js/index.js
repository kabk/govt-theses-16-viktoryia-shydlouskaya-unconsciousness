'use strict';

// This expects a modern browser, but does not require any libraries. (Yes, it does not use jQuery.)

// Enable some array methods for results of DOM selectors:
NodeList.prototype.__proto__ = Array.prototype;

function addSidenotes(content, i) {


  function convertFootnoteToSidenote(ref, i) {

    ref.href = '#fn'+(i+1);

    var footnote = document.querySelectorAll(ref.getAttribute('href'))[0];
    if (!footnote) {
      return;
    }

    ref.parentNode.insertAdjacentHTML('afterend', '<span class="sidenote">\n      <span class="sidenote-number">' + ref.textContent + '</span>\n      ' + footnote.innerHTML + '\n    </span>');

    return 1;

  }


  var footnotesConverted = content
                            .querySelectorAll('.footnote-ref > a')
                            .map(convertFootnoteToSidenote)
                            .filter(function (x) {
                                return !!x;
                            }).length;



  var linksConverted = content.querySelectorAll('a[title]').map(function convertLinkToSidenote(link) {
    if (link.href[0] === '#') {
      return;
    }
    if (link.matches('.sidenote a')) {
      return;
    }

    var title = link.getAttribute('title');
    var hostname = link.hostname;

    link.insertAdjacentHTML('afterend', '<span class="sidenote">\n      <span class="sidenote-title">' + title + '</span> &ndash;\n      <a href="' + link.href + '">' + hostname + '</a>\n    </span>');

    return 1;
  }).filter(function (x) {
    return !!x;
  }).length;

  if (0 < footnotesConverted + linksConverted) {
    content.classList.add('has-sidenotes');
  }
}

document.querySelectorAll('article .content').map(addSidenotes);