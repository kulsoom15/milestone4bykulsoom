document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('resumeform');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            var nameElement = document.getElementById('name');
            var emailElement = document.getElementById('email');
            var phoneElement = document.getElementById('phone');
            var educationElement = document.getElementById('education');
            var experienceElement = document.getElementById('experience');
            var skillsElement = document.getElementById('skills');

            if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
                var name = nameElement.value;
                var email = emailElement.value;
                var phone = phoneElement.value;
                var education = educationElement.value;
                var experience = experienceElement.value;
                var skills = skillsElement.value;

                // Create Resume Output
                var resumeOutput = `
                    <h2>Resume</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone Number:</strong> ${phone}</p>
                    
                    <h3>Education</h3>
                    <p>${education}</p>
                    
                    <h3>Experience</h3>
                    <p>${experience}</p>
                    
                    <h3>Skills</h3>
                    <p>${skills}</p>
                `;

                var resumeOutputElement = document.getElementById('resumeOutput');
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                } else {
                    console.error('The resume output element is missing');
                }
            } else {
                console.error('One or more form elements are missing');
            }
        });
    } else {
        console.error('The form element is missing');
    }
});
