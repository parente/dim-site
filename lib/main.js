$(function() {
    console.log('here');
    if(webkitAudioContext &&
       !('ontouchstart' in document.documentElement)) {
        $('#play-nav').show();
        $('#play-button').show();
    }
});