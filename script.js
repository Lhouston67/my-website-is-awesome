function changeTheme() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("theme-button");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Switch to Light Mode";
    } else {
        button.textContent = "Switch to Dark Mode";
    }
}

function showInformation() {
    const information = document.getElementById("extra-information");

    if (window.getComputedStyle(information).display === "none") {
        information.style.display = "block";
    } else {
        information.style.display = "none";
    }
}

window.addEventListener("scroll", function() {
    const button = document.getElementById("back-to-top");

    if (window.scrollY > 300) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("main section");

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    });

    sections.forEach(function(section) {
        section.classList.add("fade-in");
        observer.observe(section);
    });
});

/* Reading progress bar */
function updateReadingProgress() {
    const bar = document.getElementById("reading-progress");

    if (!bar) {
        return;
    }

    const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    if (pageHeight > 0) {
        const progress = (window.scrollY / pageHeight) * 100;
        bar.style.width = progress + "%";
    } else {
        bar.style.width = "0%";
    }
}

window.addEventListener("scroll", updateReadingProgress);
window.addEventListener("resize", updateReadingProgress);
window.addEventListener("load", updateReadingProgress);
