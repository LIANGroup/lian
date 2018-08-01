$(function () {
  $(document).scroll(function () {
    var $nav = $("#navbar");
    $nav.toggleClass('bg-white', $(this).scrollTop() > $nav.height()).toggleClass('bg-transparent', $(this).scrollTop() <= $nav.height());
  });
});
