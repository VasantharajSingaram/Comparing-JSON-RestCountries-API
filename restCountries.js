var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v2/all', true);
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    for(var i = 0; i<res.length; i++){
        console.log("Country Name: "+res[i].name);
        console.log("Subregion: "+res[i].subregion);
        console.log("Region: "+res[i].region);
        console.log("Population: "+res[i].population);
        console.log("Flag: "+res[i].flag);
    }
}