  // TODO: Add query parameters to the URL such that the number of issues returned is limited to 10.
  // TODO: Add a `sort` parameter to sort the issues by `createdAt` in descending order.
  // Hint: use & to join multiple query parameters. Use `=` to join key and value.


var requestUrl = 'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'

fetch(requestUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
// Parameter explanation.
