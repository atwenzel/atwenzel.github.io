var capsbox = document.getElementById('capsbox');
var capsbox_is_open = false;

capsbox_HTML = "CAPS";
capsbox_expanded_HTML = "CAPS";

capsbox.addEventListener('click', function (event) {
    if (capsbox_is_open) {
        capsbox.innerHTML = capsbox_HTML;
        capsbox.style.height = "10%";
        capsbox_is_open = false;
    } else {
        capsbox.innerHTML = capsbox_expanded_HTML; 
        capsbox.style.height = "20%";
        capsbox_is_open = true;
    }
});

var medbox = document.getElementById('meditationbox');
var medbox_is_open = false;

medbox_HTML = "Meditation Resources";
medbox_expanded_HTML = "Meditation Resources";

medbox.addEventListener('click', function (event) {
    if (medbox_is_open) {
        medbox.innerHTML = medbox_HTML;
        medbox.style.height = "10%";
        medbox_is_open = false;
    } else {
        medbox.innerHTML = medbox_expanded_HTML;
        medbox.style.height = "20%";
        medbox_is_open = true;
    }
});
