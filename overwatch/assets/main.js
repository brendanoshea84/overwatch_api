var xhr = new XMLHttpRequest("Accept", "application/json");

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://overwatch-api.net/api/v1/hero");
xhr.send();
