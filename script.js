function enterWebsite() {
    document.body.classList.add("fade-out");

    setTimeout(function() {
        window.location.href = "birthday.html";
    }, 800);
}

function nextPage() {
    window.location.href = "certificate.html";
}

function goBack() {
    history.back();
}