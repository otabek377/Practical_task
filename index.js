var x = document.getElementById("button");
x.addEventListener('click', changeHandler);
function changeHandler(e) {
    e.preventDefault();
    document.getElementById('heading').innerHTML = 'Thank you for subscribing';
    document.getElementById('subHeading').innerHTML = 'You have succesfully subscribed for our email listing. Check your email for discount code';
    document.getElementById('form').style.display = "none";
    document.getElementById('success-logo').style.display = "block";
}