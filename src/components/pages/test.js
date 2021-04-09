import React from 'react';
import Movies from './Movies'
import ReactDOM from 'react-dom';
import $ from 'jquery';
export default function PhotoDisplay(){

    $('.img').onClick(function(){
        $('.movieData').css({background: 'url(the-Rockoning.jpeg) no-repeat center', backgroundSize: 'cover'});
        $('.text-content h1').text('extinction');
    });
    $('.img').onClick(function(){
        $('.movieData').css({background: 'url(./img/BLISS.jpeg) no-repeat center', backgroundSize: 'cover'});
        $('.text-content h1').text('extinction');
    });
    $('.img').onClick(function(){
        $('.movieData').css({background: 'url(Cosmic-Sin.jpeg) no-repeat center', backgroundSize: 'cover'});
        $('.text-content h1').text('extinction');
    });
    $('.img').onClick(function(){
        $('.movieData').css({background: 'url(Wonderland.jpeg) no-repeat center', backgroundSize: 'cover'});
        $('.text-content h1').text('extinction');
    });
    $('.img').onClick(function(){
        $('.movieData').css({background: 'url(./img/rumble-b.jpeg) no-repeat center', backgorbackgroundSizeundSize: 'cover'});
        $('.text-content h1').text('extinction');
    });

}