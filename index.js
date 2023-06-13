const overlay = $('.overlay');
const text = $('.text');
const button = $('.button');

button.click(onModalOpen);
overlay.click(onBackDropClick);

function onModalOpen() {
    overlay.removeClass('is-hidden');
}

function onBackDropClick() {
    overlay.addClass('is-hidden');
}

