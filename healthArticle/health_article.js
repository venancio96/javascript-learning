var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';
xhr.onload = function(){
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementsById('articles');
}
articles.forEach(function(article){
var articleDiv = document.createElement('div');
articleDiv.classList.add('article');

var title = document.createElement('h2');
title.textContent = article.title;

var description = document.createElement('p');
description.textCotnent = article.description;

var waysHeader = document.createElement('h3');
waysHeader.textContent = 'ways to Achieve: ';

var waysList = document.createElement('ul');
article.ways_to_achieve.forEach(function(way){
    var listItem = document.createElement('li');
    listItem.textContent = way;
    waysList.appendchild(listItem);
});

var benefitHeader = document.createElement('h3');
benefitHeader.textContent = "Benefits :";

var benefitList = document.createElement('ul');
article.benenfits.forEach(function(benefit){
var listItem = document.createElement('li');
listItem.textContent = benefit;
benefitList.appendChild(listItem);
});

articleDiv.appendChild(title);
articleDiv.appendChild(description);
articleDiv.appendChild(waysHeader);
articleDiv.appendChild(waysList);
articleDiv.appendChild(benefitHeader);
articleDiv.appendChild(benefitList);

articlesDiv.appendChild(articleDiv);
});

var articleDiv = Document.createElement('div');
articleDiv.classList.add('article');
articleDiv.appendChild(title);
xhr.send();
}