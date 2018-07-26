$(document).ready(function(){
  $('.filling').slick({
  	 slidesToShow: 1,
  	 slidesToScroll: 1,
  	  speed: 350,
  	  cssEase: 'ease-out',
      nextArrow: `
        <button class="slider-btn filling-slider-btn-next">
        <svg class="slider-icon">
          <use xlink:href="img/svg/symbol//sprite.svg#next"/>
        </svg>
        </button>`,
      prevArrow: `
        <button class="slider-btn filling-slider-btn-prev">
          <svg class="slider-icon">
           <use xlink:href="img/svg/symbol//sprite.svg#back"/>
          </svg>
        </button>`
  });
  $('.decor-slider').slick({
  	 slidesToShow: 2,
  	 slidesToScroll: 1,
  	 speed: 350,
  	 cssEase: 'ease-out',
     nextArrow: `
       <button class="slider-btn decor-slider-btn-next">
        <svg class="slider-icon">
        <use xlink:href="img/svg/symbol//sprite.svg#next"/>
        </svg>
      </button>`,
     prevArrow: `
     <button class="slider-btn decor-slider-btn-prev">
      <svg class="slider-icon">
      <use xlink:href="img/svg/symbol//sprite.svg#back"/>
      </svg>
    </button>`
  });
    $('.reviews-slider').slick({
  	 slidesToShow: 1,
  	 slidesToScroll: 1,
  	 speed: 350,
  	 cssEase: 'ease-out',
     nextArrow: `
      <button class="slider-btn reviews-slider-btn-next">
      <svg class="slider-icon">
        <use xlink:href="img/svg/symbol/sprite.svg#next"/>
      </svg>
      </button>`,
     prevArrow: `
     <button class="slider-btn reviews-slider-btn-prev">
      <svg class="slider-icon">
        <use xlink:href="img/svg/symbol//sprite.svg#back"/>
      </svg>
    </button>`
  });
});