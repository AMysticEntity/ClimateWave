let plymurl =
        "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?latitude=50.359283&longitude=-4.162984";

let blackurl =
        "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?latitude=53.816735&longitude=-3.037049";

let budeurl =
        "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?latitude=50.826631&longitude=-4.543682";
        
let STurl =
        "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?latitude=50.208380&longitude=-5.490886";

let westurl =
        "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?latitude=51.038956&longitude=-4.238114";

let svalurl =
        "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily?latitude=78.605980&longitude=15.898144";

      let options = {
        headers: {
          apikey:
            "eyJ4NXQiOiJOak16WWpreVlUZGlZVGM0TUdSalpEaGtaV1psWWpjME5UTXhORFV4TlRZM1ptRTRZV1JrWWc9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlbGxpc21hemdhakBnbWFpbC5jb21AY2FyYm9uLnN1cGVyIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJlbGxpc21hemdhakBnbWFpbC5jb20iLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6InNpdGVfc3BlY2lmaWMtY2U0Yjg1NTItMmQyYi00NWYyLTllM2ItMjgxZDkzM2U4MzlmIiwiaWQiOjUxMjEsInV1aWQiOiJmZGY1Y2E3MS04MzQ3LTQxNmUtOGI5NC00MGJjMDM1ODA0ZTUifSwiaXNzIjoiaHR0cHM6XC9cL2FwaS1tYW5hZ2VyLmFwaS1tYW5hZ2VtZW50Lm1ldG9mZmljZS5jbG91ZDo0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJ3ZGhfc2l0ZV9zcGVjaWZpY19mcmVlIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOiJzZWMifX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiU2l0ZVNwZWNpZmljRm9yZWNhc3QiLCJjb250ZXh0IjoiXC9zaXRlc3BlY2lmaWNcL3YwIiwicHVibGlzaGVyIjoiSmFndWFyX0NJIiwidmVyc2lvbiI6InYwIiwic3Vic2NyaXB0aW9uVGllciI6IndkaF9zaXRlX3NwZWNpZmljX2ZyZWUifV0sInRva2VuX3R5cGUiOiJhcGlLZXkiLCJpYXQiOjE3MTk5MzMzMjEsImp0aSI6IjNhMDhjZmE4LThmMjEtNDAzYi1hOTM1LWExMWI4ZDU0YTFjNiJ9.gr-IKH3c_cWWFmtUgPzSnIFDkkUDTTTWkuPf-odxCKzfWAkBrFiSl3sa0Re92P0wyFJ2xDQ9p6uaBk6fnP_I-pFw_bmYTSZrWdHI1jGw9g0-uJhslsE2kFEI2kBVw2CtX6Qn-ix9bHmzCLCONIvR3Av5HGXiddDFlJWBv7oAqHA2wsRBqvIpkBmshdMAfzbtwU73Y4GaZC1dCwI3q7cHPgtg38qmWcMwHWr-S1CzGp-CxrNdgxdhkhp_Ukpz7wGjaGgp-ov4APti_8iAVAA8KGQ7-ZIIn_4BsVAkHSSX7p7m6-puFwsjV80Ph7b1cT3wZlXjjn-4kImyjpRdMM4uJw==",
        },
      };

      fetch(plymurl, options)
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var windspeed = document.getElementById("midday10MWindSpeed");
          windspeed.innerHTML = data.features[0].properties.timeSeries[1].midday10MWindSpeed;
          
          var chanceOfRain = document.getElementById("dayProbabilityOfRain");
          chanceOfRain.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfRain;

          var chanceOfHeavyRain = document.getElementById("dayProbabilityOfHeavyRain");
          chanceOfHeavyRain.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfHeavyRain;
        
          var LowTemp = document.getElementById("dayLowerBoundMaxTemp");
          LowTemp.innerHTML = data.features[0].properties.timeSeries[1].dayLowerBoundMaxTemp;

          var HighTemp = document.getElementById("dayUpperBoundMaxTemp");
          HighTemp.innerHTML = data.features[0].properties.timeSeries[1].dayUpperBoundMaxTemp;

          var chanceOfHail = document.getElementById("dayProbabilityOfHail");
          chanceOfHail.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfHail;
          
          var UVindex = document.getElementById("maxUvIndex");
          UVindex.innerHTML = data.features[0].properties.timeSeries[1].maxUvIndex;

          var TypeOfWeather = document.getElementById("daySignificantWeatherCode");
          TypeOfWeather.innerHTML = data.features[0].properties.timeSeries[1].daySignificantWeatherCode;
          

          var chanceOfSnow = document.getElementById("dayProbabilityOfSnow");
          chanceOfSnow.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfSnow;
          console.log(data);
        });

        function blackresponse(){
        fetch(blackurl, options)
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var windspeed = document.getElementById("midday10MWindSpeed");
          windspeed.innerHTML = data.features[0].properties.timeSeries[1].midday10MWindSpeed;
          
          var chanceOfRain = document.getElementById("dayProbabilityOfRain");
          chanceOfRain.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfRain;

          var chanceOfHeavyRain = document.getElementById("dayProbabilityOfHeavyRain");
          chanceOfHeavyRain.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfHeavyRain;
        
          var LowTemp = document.getElementById("dayLowerBoundMaxTemp");
          LowTemp.innerHTML = data.features[0].properties.timeSeries[1].dayLowerBoundMaxTemp;

          var HighTemp = document.getElementById("dayUpperBoundMaxTemp");
          HighTemp.innerHTML = data.features[0].properties.timeSeries[1].dayUpperBoundMaxTemp;

          var chanceOfHail = document.getElementById("dayProbabilityOfHail");
          chanceOfHail.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfHail;
          
          var UVindex = document.getElementById("maxUvIndex");
          UVindex.innerHTML = data.features[0].properties.timeSeries[1].maxUvIndex;

          var TypeOfWeather = document.getElementById("daySignificantWeatherCode");
          TypeOfWeather.innerHTML = data.features[0].properties.timeSeries[1].daySignificantWeatherCode;
        });

        document.getElementById("namechange").innerText = "Blackpool";
    }
    
        function plymresponse(){
        fetch(plymurl, options)
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var windspeed = document.getElementById("midday10MWindSpeed");
          windspeed.innerHTML = data.features[0].properties.timeSeries[1].midday10MWindSpeed;
          
          var chanceOfRain = document.getElementById("dayProbabilityOfRain");
          chanceOfRain.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfRain;

          var chanceOfHeavyRain = document.getElementById("dayProbabilityOfHeavyRain");
          chanceOfHeavyRain.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfHeavyRain;
        
          var LowTemp = document.getElementById("dayLowerBoundMaxTemp");
          LowTemp.innerHTML = data.features[0].properties.timeSeries[1].dayLowerBoundMaxTemp;

          var HighTemp = document.getElementById("dayUpperBoundMaxTemp");
          HighTemp.innerHTML = data.features[0].properties.timeSeries[1].dayUpperBoundMaxTemp;

          var chanceOfHail = document.getElementById("dayProbabilityOfHail");
          chanceOfHail.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfHail;
          
          var UVindex = document.getElementById("maxUvIndex");
          UVindex.innerHTML = data.features[0].properties.timeSeries[1].maxUvIndex;

          var TypeOfWeather = document.getElementById("daySignificantWeatherCode");
          TypeOfWeather.innerHTML = data.features[0].properties.timeSeries[1].daySignificantWeatherCode;
        });

        document.getElementById("namechange").innerText = "Plymouth";
    }

    function buderesponse(){
        fetch(budeurl, options)
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var windspeed = document.getElementById("midday10MWindSpeed");
          windspeed.innerHTML = data.features[0].properties.timeSeries[1].midday10MWindSpeed;
          
          var chanceOfRain = document.getElementById("dayProbabilityOfRain");
          chanceOfRain.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfRain;

          var chanceOfHeavyRain = document.getElementById("dayProbabilityOfHeavyRain");
          chanceOfHeavyRain.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfHeavyRain;
        
          var LowTemp = document.getElementById("dayLowerBoundMaxTemp");
          LowTemp.innerHTML = data.features[0].properties.timeSeries[1].dayLowerBoundMaxTemp;

          var HighTemp = document.getElementById("dayUpperBoundMaxTemp");
          HighTemp.innerHTML = data.features[0].properties.timeSeries[1].dayUpperBoundMaxTemp;

          var chanceOfHail = document.getElementById("dayProbabilityOfHail");
          chanceOfHail.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfHail;
          
          var UVindex = document.getElementById("maxUvIndex");
          UVindex.innerHTML = data.features[0].properties.timeSeries[1].maxUvIndex;

          var TypeOfWeather = document.getElementById("daySignificantWeatherCode");
          TypeOfWeather.innerHTML = data.features[0].properties.timeSeries[1].daySignificantWeatherCode;
        });

        document.getElementById("namechange").innerText = "Bude";
    }

    function STresponse(){
        fetch(STurl, options)
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var windspeed = document.getElementById("midday10MWindSpeed");
          windspeed.innerHTML = data.features[0].properties.timeSeries[1].midday10MWindSpeed;
          
          var chanceOfRain = document.getElementById("dayProbabilityOfRain");
          chanceOfRain.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfRain;

          var chanceOfHeavyRain = document.getElementById("dayProbabilityOfHeavyRain");
          chanceOfHeavyRain.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfHeavyRain;
        
          var LowTemp = document.getElementById("dayLowerBoundMaxTemp");
          LowTemp.innerHTML = data.features[0].properties.timeSeries[1].dayLowerBoundMaxTemp;

          var HighTemp = document.getElementById("dayUpperBoundMaxTemp");
          HighTemp.innerHTML = data.features[0].properties.timeSeries[1].dayUpperBoundMaxTemp;

          var chanceOfHail = document.getElementById("dayProbabilityOfHail");
          chanceOfHail.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfHail;
          
          var UVindex = document.getElementById("maxUvIndex");
          UVindex.innerHTML = data.features[0].properties.timeSeries[1].maxUvIndex;

          var TypeOfWeather = document.getElementById("daySignificantWeatherCode");
          TypeOfWeather.innerHTML = data.features[0].properties.timeSeries[1].daySignificantWeatherCode;
        });

        document.getElementById("namechange").innerText = "St Ives";
    }

    function westresponse(){
        fetch(westurl, options)
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var windspeed = document.getElementById("midday10MWindSpeed");
          windspeed.innerHTML = data.features[0].properties.timeSeries[1].midday10MWindSpeed;
          
          var chanceOfRain = document.getElementById("dayProbabilityOfRain");
          chanceOfRain.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfRain;

          var chanceOfHeavyRain = document.getElementById("dayProbabilityOfHeavyRain");
          chanceOfHeavyRain.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfHeavyRain;
        
          var LowTemp = document.getElementById("dayLowerBoundMaxTemp");
          LowTemp.innerHTML = data.features[0].properties.timeSeries[1].dayLowerBoundMaxTemp;

          var HighTemp = document.getElementById("dayUpperBoundMaxTemp");
          HighTemp.innerHTML = data.features[0].properties.timeSeries[1].dayUpperBoundMaxTemp;

          var chanceOfHail = document.getElementById("dayProbabilityOfHail");
          chanceOfHail.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfHail;
          
          var UVindex = document.getElementById("maxUvIndex");
          UVindex.innerHTML = data.features[0].properties.timeSeries[1].maxUvIndex;

          var TypeOfWeather = document.getElementById("daySignificantWeatherCode");
          TypeOfWeather.innerHTML = data.features[0].properties.timeSeries[1].daySignificantWeatherCode;
        });

        document.getElementById("namechange").innerText = "Westward Ho!";
    }

    function svalresponse(){
        fetch(svalurl, options)
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var windspeed = document.getElementById("midday10MWindSpeed");
          windspeed.innerHTML = data.features[0].properties.timeSeries[1].midday10MWindSpeed;
          
          var chanceOfRain = document.getElementById("dayProbabilityOfRain");
          chanceOfRain.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfRain;
          

          var chanceOfHeavyRain = document.getElementById("dayProbabilityOfHeavyRain");
          chanceOfHeavyRain.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfHeavyRain;
        
          var LowTemp = document.getElementById("dayLowerBoundMaxTemp");
          LowTemp.innerHTML = data.features[0].properties.timeSeries[1].dayLowerBoundMaxTemp;

          var HighTemp = document.getElementById("dayUpperBoundMaxTemp");
          HighTemp.innerHTML = data.features[0].properties.timeSeries[1].dayUpperBoundMaxTemp;

          var chanceOfHail = document.getElementById("dayProbabilityOfHail");
          chanceOfHail.innerHTML = data.features[0].properties.timeSeries[1].dayProbabilityOfHail;
          
          var UVindex = document.getElementById("maxUvIndex");
          UVindex.innerHTML = data.features[0].properties.timeSeries[1].maxUvIndex;

          var TypeOfWeather = document.getElementById("daySignificantWeatherCode");
          TypeOfWeather.innerHTML = data.features[0].properties.timeSeries[1].daySignificantWeatherCode;
        });

        document.getElementById("namechange").innerText = "Svalbard";

    }
