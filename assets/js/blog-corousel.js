$('.owl-carousel').owlCarousel({
              loop:true,
              items:10, 
              margin:10,
              nav:true,
              dots: false,
              navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:3
                  }
                  
              }
          })