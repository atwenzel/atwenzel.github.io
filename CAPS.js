//get the caps info div
var capsbox = document.getElementById('capsbox');
var capsbox_is_open = false;

//HTML to populate the div with depending on its expanded status
capsbox_HTML = '<div class="infohead" id="caps_infohead">CAPS</div>'
capsbox_expanded_HTML = '<div class="infohead" id="caps_infohead">CAPS<ul class="infolist" id="capslist"></ul></div>';

//collapse/expand on click
capsbox.addEventListener('click', function (event) {
    if (capsbox_is_open) {
        capsbox.innerHTML = capsbox_HTML;
        capsbox.style.height = "10%";
        capsbox_is_open = false;
    } else {
        capsbox.style.backgroundColor = "#e5e7ea"
        capsbox.innerHTML = capsbox_expanded_HTML;
        caps_ul = document.getElementById("capslist");
        //phone number
        caps_phone = document.createElement("li");
        caps_phone.appendChild(document.createTextNode("Phone: 847-494-9494"));
        caps_phone.setAttribute("class", "infoitem");
        caps_ul.appendChild(caps_phone);
        caps_ul.appendChild(document.createElement("br"));
        //website
        caps_site = document.createElement("li");
        caps_site.appendChild(document.createTextNode("Website: https://northwestern.edu/caps.html"));
        caps_site.setAttribute("class", "infoitem");
        caps_ul.appendChild(caps_site);
        capsbox.style.height = "25%";
        capsbox_is_open = true;
    }
});

//higlight on mouseover if not expanded
capsbox.onmouseover = function() {
    if (!capsbox_is_open) {
        capsbox.style.backgroundColor = "#ffa3a3"
    }
}

//unhighlight after mouseover
capsbox.onmouseout = function() {
    if (!capsbox_is_open) {
        capsbox.style.backgroundColor = "#e5e7ea"
    }
}

//get the meditation info div
var medbox = document.getElementById('meditationbox');
var medbox_is_open = false;

//html to population the div with depending on its expanded status
medbox_HTML = '<div class="infohead" id="med_infohead">Meditation Resources</div>';
medbox_expanded_HTML = '<div class="infohead" id="med_infohead">Meditation Resources<ul class=infolist id="medlist"></ul></div>';

//collapse/expand on click
medbox.addEventListener('click', function (event) {
    if (medbox_is_open) {
        medbox.innerHTML = medbox_HTML;
        medbox.style.height = "10%";
        medbox_is_open = false;
    } else {
        medbox.style.backgroundColor = "#e5e7ea"
        medbox.innerHTML = medbox_expanded_HTML;
        med_ul = document.getElementById("medlist");
        //resource 1
        res1 = document.createElement("li");
        res1.appendChild(document.createTextNode("Resource 1: link to resource 1"));
        res1.setAttribute("class", "infoitem");
        med_ul.appendChild(res1);
        med_ul.appendChild(document.createElement("br"));
        //resource 2
        res2 = document.createElement("li");
        res2.appendChild(document.createTextNode("Resource 2: link to resource 2"));
        res2.setAttribute("class", "infoitem");
        med_ul.appendChild(res2);
        med_ul.appendChild(document.createElement("br"));
        medbox.style.height = "25%";
        medbox_is_open = true;
    }
});

//highlight on mouseover if not expanded
medbox.onmouseover = function() {
    if (!medbox_is_open) {
        medbox.style.backgroundColor = "#ffa3a3"
    }
}

//unhighlight after mouseover
medbox.onmouseout = function() {
    if (!medbox_is_open) {
        medbox.style.backgroundColor = "#e5e7ea"
    }
}
