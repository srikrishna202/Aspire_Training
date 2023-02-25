//to accessing Element various way By Various Method
const main = document.querySelector('main');

const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');

const firstArticle = articles[0];
const secondParagraphs = paragraphs[1];

const whiteTextElements = document.getElementsByClassName('text-white');

const sidebar = document.getElementById('sidebar');

// Modify the DOM
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Modify the DOM';

// Getting access to the parent tag
const header = document.getElementById('page-header');
header.innerHTML = '<h2>Modify the DOM</h2>';

// A touch of class with classList

// adding new article
let newArticle = document.createElement('article');
let newHeading = document.createElement('h3');
let newParagraph = document.createElement('p');

newHeading.textContent = 'Article 004';
newParagraph.textContent = 'Haii i Am Srikrishna';

newArticle.appendChild(newHeading);
newArticle.appendChild(newParagraph);

newArticle.classList.add('m-2', 'p-2', 'border', 'border-secondary');

newArticle.setAttribute('id', 'art-004');

main.appendChild(newArticle);


//valition the Password
const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');

passwordInput.addEventListener('input', ($event) => {
    let eventLength = $event.target.value.length;
    if (eventLength >= 6 && eventLength <= 12) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'true');
    }
});