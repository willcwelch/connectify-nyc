// Dropdown Menu


var $document = $('document'),
    $dropdownButton = $('.js-toggle-dropdown'),
    $dropdownList = $('.select__list'),
    $dropdownArrow = $('.arrow-container'),
    $dropdownSelector = $('.js-dropdown-select'),
    $dropdownSpan = $('.dropdown-text');


$dropdownButton.on('click', function(){
    $dropdownList.slideToggle('fast');
    $dropdownArrow.toggleClass('is-flipped');
});

$dropdownSelector.on('click', function(){
    var $this = (this),
        $selectedOption = $this.innerHTML;

    $dropdownSpan.html($selectedOption);
    $dropdownSpan.removeClass('is-dim');
    $dropdownList.slideToggle('fast');
    $dropdownArrow.toggleClass('is-flipped');
});

// Modals

var $toggleModal = $('.js-toggle-modal'),
    $backdrop = $('.modal-overlay'),
    $body = $('body'),
    $modal = $('[class*="modal--"]'),
    $closeButton = $('.exit');

$toggleModal.on('click', function(){
    $body.addClass('is-showing-modal');
    $backdrop.removeClass('is-hidden');
});

$backdrop.on('click', function(){
    $body.removeClass('is-showing-modal');
    $backdrop.addClass('is-hidden');
    $modal.addClass('is-hidden');
});

$closeButton.on('click', function(){
    $body.removeClass('is-showing-modal');
    $backdrop.addClass('is-hidden');
    $modal.addClass('is-hidden');
});

// Toggling specific modals

function openModal() {
    $body.addClass('is-showing-modal');
    $backdrop.removeClass('is-hidden');
}

var $signUpModal = $('.modal--register'),
    $signInModal = $('.modal--signin'),
    $messageModal = $('.modal--message');

$('.js-sign-up').on('click', function(){
    $signUpModal.removeClass('is-hidden');
    openModal();
});

$('.js-log-in').on('click', function(){
    $signInModal.removeClass('is-hidden');
    openModal();
});

$('.js-message').on('click', function(){
    $messageModal.removeClass('is-hidden');
    openModal();
});