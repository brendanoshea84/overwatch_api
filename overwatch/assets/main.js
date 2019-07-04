//The api needs a request of Accept and application/json

var xhr = new XMLHttpRequest("Accept", "application/json");

//The api site
xhr.open("GET", "https://overwatch-api.net/api/v1/hero");
xhr.send();

//Check to insure site is ready
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.responseText));
    }
};


