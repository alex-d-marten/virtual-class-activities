// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';
var resultsEl = document.querySelector('#results');

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    for(var i=0; i < data.length; i++) {
      var listEl = document.createElement('li');

      // listEl.setAttribute("href", data[i].html_url);

      listEl.textContent = (data[i].html_url + data[i].user.login + data[i].number);
      resultsEl.appendChild(listEl);
      console.log(data[i].html_url);
      console.log(data[i].user.login);
      console.log(data[i].number);
    }
  });

