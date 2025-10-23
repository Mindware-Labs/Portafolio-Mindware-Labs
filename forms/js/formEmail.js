document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;


    const mailtoLink = `mailto:labsmindware@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      "Nombre: " + name + "\nCorreo: " + email + "\n\nMensaje:\n" + message
    )}`;


    window.location.href = mailtoLink;
});