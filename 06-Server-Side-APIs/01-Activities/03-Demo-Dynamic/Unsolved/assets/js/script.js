var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      var loginData = data[0].login;
      var htmlUrl = data[0].html_url;
      console.log(loginData);
      console.log(htmlUrl)
      // TODO: Loop through the data and generate your HTML
      userContainer.textContent=''
      for(var i=0; i < data.length; i++) {
        var loginData = data[i].login;
        var htmlUrl = data[i].html_url;
        var h3Name = document.createElement('h3');
        var divUrl = document.createElement('div');
        h3Name.textContent = loginData;
        divUrl.textContent = htmlUrl;

        userContainer.appendChild(h3Name);
        userContainer.appendChild(divUrl);
      }
    });
}
fetchButton.addEventListener('click', getApi);
