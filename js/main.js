$(function () {

  // Marca nav ativo
  var page = window.location.pathname.split('/').pop() || 'index.html';
  $('nav a').each(function () {
    if ($(this).attr('href').split('/').pop() === page) $(this).addClass('active');
  });

  // Scroll to top
  $(window).on('scroll', function () {
    $('#go-top').toggleClass('on', $(this).scrollTop() > 220);
  });
  $('#go-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
  });

  // Partículas no header
  var cont = document.getElementById('sparks');
  if (cont) {
    for (var i = 0; i < 16; i++) {
      var d = document.createElement('div');
      d.className = 'spark';
      var s = Math.random() * 4 + 2;
      d.style.cssText = 'width:' + s + 'px;height:' + s + 'px;left:' + (Math.random() * 100) + '%;top:' + (Math.random() * 100) + '%;--d:' + (Math.random() * 2 + 2) + 's;--delay:' + (Math.random() * 4) + 's;';
      cont.appendChild(d);
    }
  }

  // Toast
  window.toast = function (msg, ms) {
    var $t = $('#toast');
    $t.text(msg).addClass('on');
    setTimeout(function () { $t.removeClass('on'); }, ms || 2600);
  };

  // Fade-in animado ao scroll (Bootstrap + jQuery)
  function checkFade() {
    $('.fade-up').each(function () {
      var top = $(this).offset().top;
      if ($(this).css('opacity') === '0' && top < $(window).scrollTop() + $(window).height() - 60) {
        $(this).animate({ opacity: 1 }, 420).css('transform', 'translateY(0)');
      }
    });
  }
  $(window).on('scroll', checkFade);
  checkFade();

  // Tooltip Bootstrap em todos os elementos com data-bs-toggle="tooltip"
  $('[data-bs-toggle="tooltip"]').each(function () {
    new bootstrap.Tooltip(this);
  });

  // Popover Bootstrap
  $('[data-bs-toggle="popover"]').each(function () {
    new bootstrap.Popover(this);
  });

});
