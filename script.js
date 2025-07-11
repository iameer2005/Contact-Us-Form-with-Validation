
let namereq = document.getElementById('name-req');
let emailreq = document.getElementById('email-req');
let subreq = document.getElementById('sub-req');
let msgreq = document.getElementById('message-req');
let submitreq = document.getElementById('submit-req');

emailreq.style.display = 'none';
submitreq.style.display = 'none';

function validateDetails(e) {
    e.preventDefault();

    let isValid = true;

    let nameval = document.getElementById('namevalue').value.trim();
    let emailval = document.getElementById('mailvalue').value.trim();
    let subval = document.getElementById('subvalue').value.trim();
    let msgval = document.getElementById('msgvalue').value.trim();

    namereq.innerHTML = '';
    emailreq.innerHTML = '';
    subreq.innerHTML = '';
    msgreq.innerHTML = '';
    submitreq.style.display = 'none';

    if (nameval.length === 0) {
        namereq.innerHTML = '! Name is Required';
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailval.length === 0) {
        emailreq.innerHTML = '! Email is Required';
        emailreq.style.display = 'inline';
        isValid = false;
    } else if (!emailPattern.test(emailval)) {
        emailreq.innerHTML = '! Invalid Email Format';
        emailreq.style.display = 'inline';
        isValid = false;
    } else {
        emailreq.style.display = 'none';
    }

    if (subval.length === 0) {
        subreq.innerHTML = '! Subject is Required';
        isValid = false;
    }

    if (msgval.length === 0) {
        msgreq.innerHTML = '! Message is Required';
        isValid = false;
    }

    if (!isValid) {
        submitreq.style.display = 'flex';
    } else {
        submitreq.style.display = 'none';
        alert("Thank you! Your message has been submitted.");
        document.getElementById('contactForm').reset();
    }
}