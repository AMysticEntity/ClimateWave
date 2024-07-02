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
            "eyJ4NXQiOiJOak16WWpreVlUZGlZVGM0TUdSalpEaGtaV1psWWpjME5UTXhORFV4TlRZM1ptRTRZV1JrWWc9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJvZDM1MTM0M0BjYWxseXdpdGguYWMudWtAY2FyYm9uLnN1cGVyIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJvZDM1MTM0M0BjYWxseXdpdGguYWMudWsiLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6InNpdGVfc3BlY2lmaWMtNWFlYjAxZDctMDg1MC00NjgyLTkwNWMtMjNjYWIwZmE5ZjRmIiwiaWQiOjUxMDcsInV1aWQiOiJhNzM0MTFiYi1mZDQ2LTRmYTMtOWMxMy02MjQyMjA1MjM2ZTYifSwiaXNzIjoiaHR0cHM6XC9cL2FwaS1tYW5hZ2VyLmFwaS1tYW5hZ2VtZW50Lm1ldG9mZmljZS5jbG91ZDo0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJ3ZGhfc2l0ZV9zcGVjaWZpY19mcmVlIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOiJzZWMifX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiU2l0ZVNwZWNpZmljRm9yZWNhc3QiLCJjb250ZXh0IjoiXC9zaXRlc3BlY2lmaWNcL3YwIiwicHVibGlzaGVyIjoiSmFndWFyX0NJIiwidmVyc2lvbiI6InYwIiwic3Vic2NyaXB0aW9uVGllciI6IndkaF9zaXRlX3NwZWNpZmljX2ZyZWUifV0sInRva2VuX3R5cGUiOiJhcGlLZXkiLCJpYXQiOjE3MTk5MjQyNDMsImp0aSI6ImM1YjJhYTg3LTQwOGMtNGNkYi1iOGVkLWU4YzRiYjA2ZDA4ZCJ9.T33rURdiOZY-gE_Ato3kpsERfFD6AO54nflkzbYVB1lBXPmho5qjJ9t9QnnFLo9X1hIy9WowunKzFmwPBGSyFNKUfKs_bCG9CDmPc1c_EHeW9CvWDNYfj_FVVokZQlIv-MOMmKg-_--k6AkScF5iVlLUQJCPLBACZujiJNwvTc4qYHDozzEZBT0A4P4PIQ9F_DJh1dLdfZ3uCjV0Rq3oDIAW42Y8JpcMeLHtMUUi9o0_o1KGSPWOjXcMh008eRCmZ2-IJrxGNI9PFMdmPm5T2ILZQX7LaZMS4vSyNN3JpBWERS7cjsjyrdAPGH3X336zXOnk71_dUpqmk2eO3rKbwA==",
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
