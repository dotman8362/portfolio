// Function to open modal and display the clicked image
function viewImage(imageElement) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");

    // Set the source of the clicked image to the modal
    modalImage.src = imageElement.src;

    // Display the modal
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}





let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar')


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


var typed = new Typed(".multiple-text", {
    strings: ["E-Commerce Website Developer", "Email Marketer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})
var typed = new Typed(".multiple", {
    strings: ["E-Commerce Website Developer", "Email Marketer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})

let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });



        };
    });
    // stick navbar
    let header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}; 


// *****************scroll reveal**************
ScrollReveal({
    // reset: true,
    distanc: '80px',
    duration: 2000,
    delay:200

});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// ****************contact form****************
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Phone number: ${phone.value} <br> Message: ${mess.value}`;



    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "israelmarketingexpert@gmail.com",
        Password : "A32D5E80445EE166149D461CC9D57F64685F",
        To : 'israelmarketingexpert@gmail.com',
        From : "israelmarketingexpert@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully !",
                icon: "success"
              });
        }
      }
    );
    
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
})
