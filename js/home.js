
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})

function send_email() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (name == "") {
    alert("Please enter your name.");
    return false;
  }
  if (email == "") {
    alert("Please enter your email address.");
    return false;
  } else if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }
  alert("message send successfully")
}
