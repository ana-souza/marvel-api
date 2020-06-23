import React from 'react';

const ts = "ts=5";
const PUBLIC_KEY = "5ddb27dc126a71615a788f38b890b94f";
const PRIVATE_KEY = "3a350f04034331d75e946ace61f66ef351e53341";
const HASH = "c7e16df284b9585157bf26db29babb80";
const URL_API = "https://gateway.marvel.com/v1/public/";

const AUTH = "?ts=5&apikey=5ddb27dc126a71615a788f38b890b94f&hash=c7e16df284b9585157bf26db29babb80";

export async function getCharacters () {
    const URL_TO_FETCH = `${URL_API}characters${AUTH}`;

    /*const response = await fetch("https://gateway.marvel.com/v1/public/characters?ts=5&apikey=5ddb27dc126a71615a788f38b890b94f&hash=c7e16df284b9585157bf26db29babb80");
    const characters = response.json();
    return characters.data;*/

    let data = {};

    await fetch("https://gateway.marvel.com/v1/public/characters?ts=5&apikey=5ddb27dc126a71615a788f38b890b94f&hash=c7e16df284b9585157bf26db29babb80")
    .then(response => response.json()).then(result => { 
        data = result.data.results;
    })

    return data;
}

export async function getCharacter (id) {
    const response = await fetch(`${URL_API}`);
    const data = await response.json();
    return data;
}

export async function getCharacterComics (id) {
    const response = await fetch(`${URL_API}`);
    const data = await response.json();
    return data;
}

export async function getCharacterSeries (id) {
    const response = await fetch(`${URL_API}`);
    const data = await response.json();
    return data;
}

export async function getCharacterEvents (id) {
    const response = await fetch(`${URL_API}`);
    const data = await response.json();
    return data;
}

export async function getCharacterStories (id) {
    const response = await fetch(`${URL_API}`);
    const data = await response.json();
    return data;
}

export async function getComics (id) {
    const response = await fetch(`${URL_API}`);
    const data = await response.json();
    return data;
}

export async function getSeries (id) {
    const response = await fetch(`${URL_API}`);
    const data = await response.json();
    return data;
}

export async function getEvents (id) {
    const response = await fetch(`${URL_API}`);
    const data = await response.json();
    return data;
}

export async function getStories (id) {
    const response = await fetch(`${URL_API}`);
    const data = await response.json();
    return data;
}