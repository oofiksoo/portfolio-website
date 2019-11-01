/*
	ZeroFour by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: [null, '736px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Dropdowns.
    $('#nav > ul').dropotron({
        offsetY: -22,
        mode: 'fade',
        noOpenerFade: true,
        speed: 300,
        detach: false
    });

    // Nav.

    // Title Bar.
    $(
            '<div id="titleBar">' +
            '<a href="#navPanel" class="toggle"></a>' +
            '<span class="title">' + $('#logo').html() + '</span>' +
            '</div>'
        )
        .appendTo($body);

    // Panel.
    $(
            '<div id="navPanel">' +
            '<nav>' +
            $('#nav').navList() +
            '</nav>' +
            '</div>'
        )
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'navPanel-visible'
        });

})(jQuery);

axios
    .get("https://api.github.com/users/oofiksoo/repos")
    .then(response => {
        response.data.forEach(element => { //loop data for seperate topics

            const tpc = gthbrp(element);

            prjloc.appendChild(tpc); //append to parent location

        });

    })

.catch(error => {

    console.log(error);

});


prjloc = document.querySelector('.box .excerpt')

function gthbrp(obj) {
    const newrepo = document.createElement('div'), //main card
        reponm = document.createElement('h3'),
        repodte = document.createElement('h4'),
        repodsc = document.createElement('p'),
        repolnk = document.createElement('a')
    newrepo.appendChild(reponm);
    newrepo.appendChild(repodte);
    newrepo.appendChild(repodsc);
    newrepo.appendChild(repolnk);
    newrepo.classList.add('rpocard');
    repodsc.classList.add('repodsc');
    reponm.textContent = obj.full_name;
    repodte.textContent = `Date created: ${obj.created_at}`;
    repodsc.textContent = obj.description;
    repolnk.textContent = `View Repo: ${obj.name}`;
    repolnk.href = obj.html_url;

    return newrepo

}