window.onload = function () {
    history.replaceState(null, document.title, location.pathname + "#no-back");
    history.pushState(null, document.title, location.pathname);

    window.addEventListener("popstate", function (event) {
        if (location.hash === "#no-back") {
            history.replaceState(null, document.title, location.pathname);
            setTimeout(function(){
                alert("impossible de retourner en arrière")
            }, 0)
        }
    });
};

document.getElementById('icon-hidden-bloc-header') . addEventListener('click', function(){
    var bloc = document.getElementById('bloc-hidden-result');
    var body = document.getElementById('main');
    if (bloc.style.display === 'none' && body.style.position === 'absolute') {
        bloc.style.display = 'block';
        body.style.position = 'fixed'
    } else {
        bloc.style.display = 'none';
        body.style.position = 'absolute'
    }
});

document.getElementById('icon-close') . addEventListener('click', function(){
    var bloc = document.getElementById('bloc-hidden-result');
    var body = document.getElementById('main');
    if (bloc.style.display === 'block' && body.style.position === 'fixed') {
        bloc.style.display = 'none';
        body.style.position = 'absolute';
    } else {
        bloc.style.display = 'block';
        body.style.position = 'fixed';
    }
});

document.getElementById('monplan-0')  . addEventListener('click', function(){
    var bloc = document.getElementById('resultmonplan');

    if (bloc.style.display === 'none') {
        bloc.style.display = 'block';

    } else {
        bloc.style.display = 'none';

    }
});

document.getElementById('monplan-1')  . addEventListener('click', function(){
    var bloc = document.getElementById('resultmonplan');

    if (bloc.style.display === 'none') {
        bloc.style.display = 'block';

    } else {
        bloc.style.display = 'none';

    }
});

document.getElementById('monplan-2')  . addEventListener('click', function(){
    var bloc = document.getElementById('resultmonplan');

    if (bloc.style.display === 'none') {
        bloc.style.display = 'block';

    } else {
        bloc.style.display = 'none';

    }
});

document.getElementById('monplan-3')  . addEventListener('click', function(){
    var bloc = document.getElementById('resultmonplan');

    if (bloc.style.display === 'none') {
        bloc.style.display = 'block';

    } else {
        bloc.style.display = 'none';

    }
});

document.getElementById('monplan-4')  . addEventListener('click', function(){
    var bloc = document.getElementById('resultmonplan');

    if (bloc.style.display === 'none') {
        bloc.style.display = 'block';

    } else {
        bloc.style.display = 'none';

    }
});

document.getElementById('monplan-5')  . addEventListener('click', function(){
    var bloc = document.getElementById('resultmonplan');

    if (bloc.style.display === 'none') {
        bloc.style.display = 'block';

    } else {
        bloc.style.display = 'none';

    }
});

document.getElementById('icon-close-link') . addEventListener('click', function(){
    var bloc = document.getElementById('resultmonplan');
    if (bloc.style.display === 'block') {
        bloc.style.display = 'none';
    } else {
        bloc.style.display = 'block';
    }
});
