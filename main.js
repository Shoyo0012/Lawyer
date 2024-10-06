(function(){
  'use strict';

  var suteMenuClone = function() {
    var jsCloneNavs = document.querySelectorAll('.js-clone-nav'),
        siteMobilMenubody = document.querySelector('.site-mobile-menu-body');

    // Clone navs
    jsCloneNavs.forEach(nav => {
      var navCloned = nav.cloneNode(true);
      navCloned.setAttribute('class', 'site-nav-wrap');
      siteMobilMenubody.appendChild(navCloned);
    });

    setTimeout(function(){
      var hasChildren = document.querySelectorAll('.site-mobile-menu .has-children');
      var counter = 0;

      hasChildren.forEach(hasChild => {
        // Create span for arrow
        var newElspan = document.createElement('span');
        newElspan.setAttribute('class', 'arrow-collapse collapsed');
        hasChild.insertBefore(newElspan, hasChild.firstChild);

        // Set data-toggle for the arrow-collapse
        var arrowCollapse = hasChild.querySelector('.arrow-collapse');
        arrowCollapse.setAttribute('data-toggle', '#collapseItem' + counter );

        // Set up dropdown collapse
        var dropdown = hasChild.querySelector('.dropdown');
        dropdown.setAttribute('class', 'collapse');
        dropdown.setAttribute('id', 'collapseItem' + counter);

        counter++;
      });
    }, 1000);

    // Menu toggle functionality
    var menuToggle = document.querySelectorAll('.js-menu-toggle');
    menuToggle.forEach(mtoggle => {
      mtoggle.addEventListener('click', (e) => {
        if (document.body.classList.contains('offcanvas-menu')) {
          document.body.classList.remove('offcanvas-menu');
          mtoggle.classList.remove('active');
        } else {
          document.body.classList.add('offcanvas-menu');
          mtoggle.classList.add('active');
        }
      });
    });

    // Close menu when clicking outside
    var specifiedElement = document.querySelector('.site-mobile-menu');
    document.addEventListener('click', function(event) {
      var isClickInside = specifiedElement.contains(event.target);
      var isMenuToggleClicked = Array.from(menuToggle).some(mtoggle => mtoggle.contains(event.target));

      if (!isClickInside && !isMenuToggleClicked) {
        if (document.body.classList.contains('offcanvas-menu')) {
          document.body.classList.remove('offcanvas-menu');
          menuToggle.forEach(mtoggle => mtoggle.classList.remove('active'));
        }
      }
    });
  };

  suteMenuClone();
})();

//menu-close------


//---swiper--------

$(function () {

 var swiperinit = function() {
   new Swiper('.testimonialSwiper' ,{
    loop: true,
    slidesPerView: 1,
    speed: 700,
    spaceBetween: 20,
    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },
    pagination: {
    el:".swiper-pagination",
    clickable: true,
    }


   });

  };
 swiperinit();


});









