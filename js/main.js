document.addEventListener('submit', function (action) {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('textarea').value;
    console.log( 'The firstName is: ' + firstName );
    console.log( 'The lastName is: ' + lastName );
    console.log( 'The email is: ' + email );
    console.log( 'The message is: ' + message );
    action.preventDefault();
 });
