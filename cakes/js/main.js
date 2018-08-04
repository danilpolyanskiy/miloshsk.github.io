'use strict';

$(document).ready(function () {
  $('.filling-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 350,
    cssEase: 'ease-out',
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ],
    nextArrow: '<button class="slider-btn filling-slider-btn-next"><svg class="slider-icon"><use xlink:href="img/svg/symbol//sprite.svg#next"/></svg></button>',
    prevArrow: '<button class="slider-btn filling-slider-btn-prev"><svg class="slider-icon"><use xlink:href="img/svg/symbol//sprite.svg#back"/></svg></button>'
  });
  $('.size-slider').slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          cssEase: 'ease-out',
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 350,
        }
      }
    ]
  })
  $('.decor-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 350,
    cssEase: 'ease-out',
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ],
    nextArrow: '<button class="slider-btn decor-slider-btn-next"><svg class="slider-icon"><use xlink:href="img/svg/symbol//sprite.svg#next"/></svg></button>',
    prevArrow: '<button class="slider-btn decor-slider-btn-prev"><svg class="slider-icon"><use xlink:href="img/svg/symbol//sprite.svg#back"/></svg></button>'
  });
  $('.reviews-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 350,
    arrows: true,
    dots: false,
    cssEase: 'ease-out',
     responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ],
    nextArrow: '<button class="slider-btn reviews-slider-btn-next"><svg class="slider-icon"><use xlink:href="img/svg/symbol/sprite.svg#next"/></svg></button>',
    prevArrow: '<button class="slider-btn reviews-slider-btn-prev"><svg class="slider-icon"><use xlink:href="img/svg/symbol//sprite.svg#back"/></svg></button>'
  });


  $('.burger').click(function() {
    $(this).toggleClass('burger-open');
    $('.header-nav').toggleClass('header-nav-toggle');
  })
});