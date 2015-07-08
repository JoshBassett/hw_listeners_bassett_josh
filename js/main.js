var clickMe = document.getElementById('h1Click');

var clickCounter = 0;

clickMe.addEventListener('click', function() {
    clickCounter++;
    var clickWriter = '<p>This is click number ' + clickCounter + '</p>';
    document.getElementById('clickWriter').innerHTML += clickWriter;
});
