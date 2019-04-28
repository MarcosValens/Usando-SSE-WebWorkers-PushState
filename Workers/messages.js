setInterval(function () {
    fetch(' http://35.194.72.13/pra_WW.php')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            postMessage(myJson);
        });
},60000);
