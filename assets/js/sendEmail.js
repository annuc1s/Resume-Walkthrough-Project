function sendMail(contactForm) {
    emailjs.send("gmail", "template_Ovzc1mGK", {
       "from_name": contactForm.name.value,
       "from-email": contactForm.emailaddress.value,
       "project_request": contactForm.projectsummary.value
    })
    .then(
        function(){
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}