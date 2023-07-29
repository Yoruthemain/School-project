let splide = new Splide( '#thumbnail-slider', {
    // fixedWidth: 100,
    // fixedHeight: 60,
    gap       : 10,
    type       : 'loop',
    cover      : true,
    heightRatio: 0.5,
    autoplay    : true,
    rewind      : true,
    pauseOnHover: false,
    pauseOnFocus: false,
    pagination: true,
    focus      : 'center',
    breakpoints: {
        600: {
        fixedWidth : 60,
        fixedHeight: 44,
        },
    },
} ).mount();

let toggleButton = splide.root.querySelector( '.my-toggle-button' );
splide.on( 'autoplay:play', function () {
toggleButton.setAttribute( 'aria-label', 'Pause autoplay' );
toggleButton.textContent = 'Pause';
} );

splide.on( 'autoplay:pause', function () {
toggleButton.setAttribute( 'aria-label', 'Start autoplay' );
toggleButton.textContent = 'Play';
} );