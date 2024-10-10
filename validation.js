function validateForm() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let ageGroup = document.getElementById('ageGroup').value;

    // Clear previous error styles
    document.querySelectorAll('label').forEach(label => {
        label.classList.remove('error', 'invalid');
    });

    let valid = true;

    // Validate Username
    const usernameRegex = /^[a-z0-9]{4,12}$/;
    if (!usernameRegex.test(username)) {
        valid = false;
        document.querySelector('label[for="username"]').classList.add('invalid');
    }

    // Validate Email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[a-z]{2,4}$/;
    if (!emailRegex.test(email)) {
        valid = false;
        document.querySelector('label[for="email"]').classList.add('invalid');
    }

    // Validate Phone Number
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        valid = false;
        document.querySelector('label[for="phone"]').classList.add('invalid');
    }

    // Validate Password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;
    if (!passwordRegex.test(password)) {
        valid = false;
        document.querySelector('label[for="password"]').classList.add('invalid');
    }

    // Confirm Password Match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        valid = false;
    }

    // Validate Gender Selection
    if (!gender) {
        valid = false;
        document.querySelector('label[for="gender"]').classList.add('invalid');
    }

    // Validate Age Group
    if (!ageGroup) {
        valid = false;
        document.querySelector('label[for="ageGroup"]').classList.add('invalid');
    }

    // Submit if valid
    if (valid) {
        alert("Form submitted successfully!");
        // Here you could add form submission logic
    }
}
