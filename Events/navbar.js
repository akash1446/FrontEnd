let prevScrollPos = window.pageYOffset;
    var navbar = document.querySelector('.navbar');
     console.log(navbar)
    window.addEventListener('scroll', () => {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
      } else {
        navbar.style.top = '-60px'; 
      }
      prevScrollPos = currentScrollPos;
    });