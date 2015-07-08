// Listener 1) Mousedown on the image that sends an information alert to user when the .png is clicked

document.getElementById('goldsquadron').addEventListener('mousedown', function() {
    alert( 'Koensayr BTL Y-wing Starfighter designed by Josh Bassett - For more like this, visit JoshBassettDesign.com');
})

// Listener 2) Copy listener used to alert user about copyright information upon adding content in the section to their clipboard

document.getElementById('custom').addEventListener('copy', function() {
    alert( 'This material is copyright protected © Josh Bassett Design - 2015');
})

// Listener 3) Mouseover on the Unordered list writes a message to the console that the user's pointer has hovered over the list,
// but not the list items indiviually.

document.getElementById('fighters').addEventListener('mouseover', function() {
    console.log( 'User has moused over the listed Rebel starfighters');
})
