// Horscontexte was here !
// ==============================LINK 1 =================================/
// On retire la classe .box-active pour permettre à l'animation de re-trigger
//return false rajouté par Alex pour ne pas avoir un retour en haut de page à chaque clic dans la nav

document.getElementById('link1').onmousedown = function() {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return;
};

// On ajoute la classe .box-active pour trigger l'animation CSS3
document.getElementById('link1').onclick = function() {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return;
};
//================================LINK 2 ================================/

document.getElementById('link2').onmousedown = function() {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return;
};

document.getElementById('link2').onclick = function() {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return;
};
//================================LINK 3 ==============================/
document.getElementById('link3').onmousedown = function() {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return;
};

document.getElementById('link3').onclick = function() {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return;
};

//================================LINK 0 ==============================/
document.getElementById('link0').onmousedown = function()
{
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return;
};

document.getElementById('link0').onclick = function()
{
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return;
};

//================================LINK 5 ==============================/
document.getElementById('link5').onmousedown = function() {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return;
};

document.getElementById('link5').onclick = function() {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return;
};

//================================LINK 6 ==============================/
document.getElementById('link6').onmousedown = function() {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return;
};

document.getElementById('link6').onclick = function() {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return;
};
//================================LINK 7 ==============================/
document.getElementById('link7').onmousedown = function() {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return;
};

document.getElementById('link7').onclick = function() {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return;
};

//================================LINK 8 ==============================/
document.getElementById('link8').onmousedown = function() {
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
    document.getElementById('section4').classList.remove('box-active2');
    return;
};

document.getElementById('link8').onclick = function() {
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
    document.getElementById('section4').classList.add('box-active2');
    return;
};

///And Alx was Here!
/// Effets sonore et requêtes Ajax
/// LIEN TARIFS
$('#link0').click(function() {
    //Effet Audio
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("mains.html #sectiontarifs1");
    $('#section2').load("mains.html #sectiontarifs2");
    $('#section3').load("mains.html #sectiontarifs3");
    $('#section4').load("mains.html #sectiontarifs4");

    // Animation CSS
    $('header').css({
        'background-image': 'url("images/header_tarif.png")',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'border-bottom': '4px solid #D1AC35',
        'transition': '3s'
    });
    $('h1').css({
        'color': '#D1AC35',
        'transition': '3s'
    });
    $('li').css({
        'border-right': '2px solid #D1AC35',
        'transition': '3s'
    });
    $('.fa').css({
        'color': '#D1AC35',
        'transition': '3s'
    });
    $('.hr_section').css({
        'border': '4px solid #D1AC35',
        'transition': '3s'
    });
    $('.hr_footer').css({
        'border': '4px solid #D1AC35',
        'transition': '3s'
    });
    $('.maps').css({
        'border-top': '3px solid #D1AC35',
        'transition': '3s'
    });
    $('.barre').css({
        'background': '#D1AC35',
        'transition': '3s'
    });
    $('h4').css({
        'color': '#D1AC35',
        'transition': '3s'
    });
});

//Effet Audio Accueil
$('#link1').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("index.html #section1");
    $('#section2').load("index.html #section2");
    $('#section3').load("index.html #section3");
    $('#section4').load("index.html #section4");
    // Animation CSS
    $('header').css({
        'background-image': 'url(images/header_accueil.png)',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'border-bottom': '4px solid #FB7826',
        'transition': '3s'
    });
    $('h1').css({
        'color': '#FB7826',
        'transition': '3s'
    });
    $('li').css({
        'border-right': '2px solid #FB7826',
        'transition': '3s'
    });
    $('.fa').css({
        'color': '#FB7826',
        'transition': '3s'
    });
    $('.hr_section').css({
        'border': '4px solid #FB7826',
        'transition': '3s'
    });
    $('.hr_footer').css({
        'border': '4px solid #FB7826',
        'transition': '3s'
    });
    $('.maps').css({
        'border-top': '3px solid #FB7826',
        'transition': '3s'
    });
    $('.barre').css({
        'background': '#FB7826',
        'transition': '3s'
    });
    $('h4').css({
        'color': '#FB7826',
        'transition': '3s'
    });
});

//Effet Audio Accrobranche
$('#link2').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("mains.html #sectionaccr1");
    $('#section2').load("mains.html #sectionaccr2");
    $('#section3').load("mains.html #sectionaccr3");
    $('#section4').load("mains.html #sectionaccr4");

    // Animation CSS
    $('header').css({
        'background-image': 'url("images/header_accro.png")',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'border-bottom': '4px solid #4BA33C',
        'transition': '3s'
    });
    $('h1').css({
      'color': '#4BA33C',
      'transition': '3s'
    });
    $('li').css({
        'border-right': '2px solid #4BA33C',
        'transition': '3s'
    });
    $('.fa').css({
        'color': '#4BA33C',
        'transition': '3s'
    });
    $('.hr_section').css({
        'border': '4px solid #4BA33C',
        'transition': '3s'
    });
    $('.hr_footer').css({
        'border': '4px solid #4BA33C',
        'transition': '3s'
    });
    $('.maps').css({
        'border-top': '3px solid #4BA33C',
        'transition': '3s'
    });
    $('.barre').css({
        'background': '#4BA33C',
        'transition': '3s'
    });
    $('h4').css({
        'color': '#4BA33C',
        'transition': '3s'
    });
});

//Effet Audio Skatepark
$('#link3').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("mains.html #sectionskate1");
    $('#section2').load("mains.html #sectionskate2");
    $('#section3').load("mains.html #sectionskate3");
    $('#section4').load("mains.html #sectionskate4");

    // Animation CSS
    $('header').css({
        'background-image': 'url("images/header_skatepark.png")',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'border-bottom': '4px solid #0DB0C3',
        'transition': '3s'
    });
    $('li').css({
        'border-right': '2px solid #0DB0C3',
        'transition': '3s'
    });
    $('.fa').css({
        'color': '#0DB0C3',
        'transition': '3s'
    });
    $('.hr_section').css({
        'border': '4px solid #0DB0C3',
        'transition': '3s'
    });
    $('.hr_footer').css({
        'border': '4px solid #0DB0C3',
        'transition': '3s'
    });
    $('.maps').css({
        'border-top': '3px solid #0DB0C3',
        'transition': '3s'
    });
    $('.barre').css({
        'background': '#0DB0C3',
        'transition': '3s'
    });
    $('h4').css({
        'color': '#0DB0C3',
        'transition': '3s'
    });
});

//Effet Audio Bistrot
$('#link4').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
});

//Effet Audio Event
$('#link5').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("mains.html #sectionevent1");
    $('#section2').load("mains.html #sectionevent2");
    $('#section3').load("mains.html #sectionevent3");
    $('#section4').load("mains.html #sectionevent4");

    // Animation CSS
    $('header').css({
        'background-image': 'url("images/header_event.png")',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'border-bottom': '4px solid #FC2A21',
        'transition': '3s'
    });
    $('h1').css({
        'color': '#FC2A21',
        'transition': '3s'
    });
    $('li').css({
        'border-right': '2px solid #FC2A21',
        'transition': '3s'
    });
    $('.fa').css({
        'color': '#FC2A21',
        'transition': '3s'
    });
    $('.hr_section').css({
        'border': '4px solid #FC2A21',
        'transition': '3s'
    });
    $('.hr_footer').css({
        'border': '4px solid #FC2A21',
        'transition': '3s'
    });
    $('.maps').css({
        'border-top': '3px solid #FC2A21',
        'transition': '3s'
    });
    $('.barre').css({
        'background': '#FC2A21',
        'transition': '3s'
    });
    $('h4').css({
        'color': '#FC2A21'
    });
});

//Effet Audio Anniversaire
$('#link6').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("mains.html #sectionann1");
    $('#section2').load("mains.html #sectionann2");
    $('#section3').load("mains.html #sectionann3");
    $('#section4').load("mains.html #sectionann4");

    // Animation CSS
    $('header').css({
        'background-image': 'url("images/header_anniversaire.png")',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'border-bottom': '4px solid #DC3FD1',
        'transition': '3s'
    });
    $('h1').css({
        'color': '#DC3FD1',
        'transition': '3s'
    });
    $('li').css({
        'border-right': '2px solid #DC3FD1',
        'transition': '3s'
    });
    $('.fa').css({
        'color': '#DC3FD1',
        'transition': '3s'
    });
    $('.hr_section').css({
        'border': '4px solid #DC3FD1',
        'transition': '3s'
    });
    $('.hr_footer').css({
        'border': '4px solid #DC3FD1',
        'transition': '3s'
    });
    $('.maps').css({
        'border-top': '3px solid #DC3FD1',
        'transition': '3s'
    });
    $('.barre').css({
        'background': '#DC3FD1',
        'transition': '3s'
    });
    $('h4').css({
        'color': '#DC3FD1',
        'transition': '3s'
    });
});

//Effet Audio Trampo
$('#link7').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("mains.html #sectiontramp1");
    $('#section2').load("mains.html #sectiontramp2");
    $('#section3').load("mains.html #sectiontramp3");
    $('#section4').load("mains.html #sectiontramp4");

    // Animation CSS
    $('header').css({
        'background-image': 'url("images/header_trampo.png")',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'border-bottom': '4px solid #673500',
        'transition': '3s'
    });
    $('h1').css({
        'color': '#673500',
        'transition': '3s'
    });
    $('li').css({
        'border-right': '2px solid #673500',
        'transition': '3s'
    });
    $('.fa').css({
        'color': '#673500',
        'transition': '3s'
    });
    $('.hr_section').css({
        'border': '4px solid #673500',
        'transition': '3s'
    });
    $('.hr_footer').css({
        'border': '4px solid #673500',
        'transition': '3s'
    });
    $('.maps').css({
        'border-top': '3px solid #673500',
        'transition': '3s'
    });
    $('.barre').css({
        'background': '#673500',
        'transition': '3s'
    });
    $('h4').css({
        'color': '#A07140',
        'text-shadow': '0.5px 0.5px white'
    });
});

//Effet audio Groupes
$('#link8').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("mains.html #sectiongrp1");
    $('#section2').load("mains.html #sectiongrp2");
    $('#section3').load("mains.html #sectiongrp3");
    $('#section4').load("mains.html #sectiongrp4");

    // Animation CSS
    $('header').css({
        'background-image': 'url("images/header_groupes.png")',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'border-bottom': '4px solid #0C2448',
        'transition': '3s'
    });
    $('h1').css({
        'color': '#0C2448',
        'transition': '3s'
    });
    $('li').css({
        'border-right': '2px solid #0C2448',
        'transition': '3s'
    });
    $('.fa').css({
        'color': '#0C2448',
        'transition': '3s'
    });
    $('.hr_section').css({
        'border': '4px solid #0C2448',
        'transition': '3s'
    });
    $('.hr_footer').css({
        'border': '4px solid #0C2448',
        'transition': '3s'
    });
    $('.maps').css({
        'border-top': '3px solid #0C2448',
        'transition': '3s'
    });
    $('.barre').css({
        'background': '#0C2448',
        'transition': '3s'
    });
    $('h4').css({
        'color': '#0C2448',
        'text-shadow': '0.5px 0.5px #fff',
        'transition': '3s'
    });
});


//Mute Audio
var son1 = document.getElementById('son1');
var son2 = document.getElementById('son2');
var son3 = document.getElementById('son3');
var son4 = document.getElementById('son4');
var son5 = document.getElementById('son5');
var son6 = document.getElementById('son6');
var son7 = document.getElementById('son7');
var son8 = document.getElementById('son8');

document.getElementById('mute').addEventListener('click', function(e) {

    e = e || window.event;

    son1.muted = !son1.muted;
    son2.muted = !son2.muted;
    son3.muted = !son3.muted;
    son4.muted = !son4.muted;
    son5.muted = !son5.muted;
    son6.muted = !son6.muted;
    son7.muted = !son7.muted;
    son8.muted = !son8.muted;
    e.preventDefault();



}, false);
