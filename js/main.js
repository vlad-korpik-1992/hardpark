$(document).ready(function() {
  $('.select__head_region').click(function (e) {
		e.preventDefault();
    $( ".checkbox__group_region" ).toggleClass('checkbox__group_active');
	});
  $('.select__head_city').click(function (e) {
		e.preventDefault();
    $( ".checkbox__group_city" ).toggleClass('checkbox__group_active');
	});
  $('.category__buttons__block_first').click(function (e) {
		e.preventDefault();
    $( ".popup" ).toggleClass('open');
	});
  $('.search__link').click(function (e) {
		e.preventDefault();
    $( ".search__box" ).toggleClass('search__box_active');
	});
  $('.popup__header_close').click(function (e) {
		e.preventDefault();
    $( ".popup" ).toggleClass('open');
	});
  $('.cart__btn_yellow').click(function (e) {
		e.preventDefault();
    $( ".popupmess" ).toggleClass('open');
	});
  $('.profile__sidebar__menu').click(function (e) {
		e.preventDefault();
    $( ".profile__sidebar__list" ).toggleClass('open');
	});
  $('.popupmess__close').click(function (e) {
		e.preventDefault();
    $( ".popupmess" ).toggleClass('open');
	});
  $('.menu__btn').on('click', function (e) {
    e.preventDefault();
    $('.menu__list').toggleClass('menu__list_active');
  });
  $('.cart_note').on('click', function (e) {
    e.preventDefault();
    $('.note').toggleClass('open');
  });
  $('.popupmess__close_note').on('click', function (e) {
    e.preventDefault();
    $('.note').toggleClass('open');
  });
  $('.catalog__btn_note').on('click', function (e) {
    e.preventDefault();
    let elem = e.target;
		let id = '1' + elem.getAttribute('id');
		jQuery("#"+id).toggleClass('catalog__form_active');
		let idElem = elem.getAttribute('id');
  });
  $('.catalog__icon_rect').on('click', function (e) {
    e.preventDefault();
    let elem = e.target;
		let id = '1' + elem.getAttribute('id');
		jQuery("#"+id).toggleClass('catalog__form_active');
		let idElem = elem.getAttribute('id');
  });
  $('.filter__btn').on('click', function (e) {
    e.preventDefault();
    $('.filter__box').toggleClass('filter__box_active');
    $('.filter__btn').toggleClass('filter__btn_active');
  });
  $('.filter__head').on('click', function (e) {
    e.preventDefault();
    $('.filter__form').toggleClass('filter__form_active');
    $('.filter__head').toggleClass('filter__head_active');
  });
  $('.cart__slider').slick({
		mobileFirst: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		infinite: true,
	});
  $('.similar__box').slick({
		mobileFirst: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		rows: 1,
		arrows: true,
		dots: false,
		autoplay: true,
		infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 280,
        settings: {
          dots: false,
          slidesToShow: 1
        }
      }
    ]
	});
})