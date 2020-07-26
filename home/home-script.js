
// When the user clicks the button, open the modal 
document.getElementById('surpriseBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.add('is-visible');
    document.getElementById('overlay').classList.add('is-visible');
});

// When the user clicks on <span> (x), close the modal
document.getElementById('close').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');
});

// When the user clicks anywhere outside of the modal, close it
    document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');
});


