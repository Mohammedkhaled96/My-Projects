$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate( {
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
});


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};



webix.ui({
  type:"space",
  id:"a1", 
  rows:[
    {
      type:"space",
      padding:0, 
      responsive:"a1", 
      cols:[
        { 
          view:"list", 
          data:["Users", "Reports", "Settings"],
          ready:function(){ 
            this.select(this.getFirstId()); 
          },
          select:true,
          scroll:false,
          width:120 
        },
        { template:"column 2", width:120 },
        { 
          view:"datatable", 
          scrollX: false,
          select:true, 
          columns:[
            { id:"title", fillspace:1 }, 
            { id:"votes"}
          ], 
          data:grid_data,
          minWidth:250 
        }
      ]
    }
  ]
});