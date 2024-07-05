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
            "eyJ4NXQiOiJOak16WWpreVlUZGlZVGM0TUdSalpEaGtaV1psWWpjME5UTXhORFV4TlRZM1ptRTRZV1JrWWc9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlbGxpc21hemdhakBnbWFpbC5jb21AY2FyYm9uLnN1cGVyIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJlbGxpc21hemdhakBnbWFpbC5jb20iLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6InNpdGVfc3BlY2lmaWMtY2U0Yjg1NTItMmQyYi00NWYyLTllM2ItMjgxZDkzM2U4MzlmIiwiaWQiOjUxNzUsInV1aWQiOiIyNzg2OGFhMy0zODk4LTQ2ZDYtODFkMC0wYjdjMDUwOGZkYjQifSwiaXNzIjoiaHR0cHM6XC9cL2FwaS1tYW5hZ2VyLmFwaS1tYW5hZ2VtZW50Lm1ldG9mZmljZS5jbG91ZDo0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJ3ZGhfc2l0ZV9zcGVjaWZpY19mcmVlIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOiJzZWMifX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiU2l0ZVNwZWNpZmljRm9yZWNhc3QiLCJjb250ZXh0IjoiXC9zaXRlc3BlY2lmaWNcL3YwIiwicHVibGlzaGVyIjoiSmFndWFyX0NJIiwidmVyc2lvbiI6InYwIiwic3Vic2NyaXB0aW9uVGllciI6IndkaF9zaXRlX3NwZWNpZmljX2ZyZWUifV0sInRva2VuX3R5cGUiOiJhcGlLZXkiLCJpYXQiOjE3MjAxNzE2NjMsImp0aSI6ImMzNzZjY2U5LWFkMzMtNDk4NC04MTg0LWY4NjY4YjQ1ZWVkNyJ9.OAhflyLWYSd75AOTI8EOQZHIUPhABonPStHnZ61Y7YM1xjvmaLK6qiKG5fZG4E7io0HoCHKKGg1Cm5SBriOWmd38bfpwMMVH2cc9VHoyzDXT-rS3i9MtIgFYElYEksz14PQSQb7HMatsMN7Kp3Qxl2vnRtBeix8QBwHsZv60jIBHQfPeZVAldqBOzIzl0FvYEWHTnlUOS7c0JnNdQ-4xzH2tz6e1OodWlxS2uB9cE9R73yDDK6NF5vjIf2qbDHVThHQ4jhmf2jpFZzoC35mig_tBia4CUwt_qWo9qDRoTfVxIbVi00Zt7iwLGpU5qJaqP1Xibh2gXOadLA6Cyxbg8A==",
        },
      };

      function updateWeatheryesterdayInfo(data) {
        const yesterdaywindspeed = data.features[0].properties.timeSeries[0].midday10MWindSpeed;
        const yesterdayrainprob = data.features[0].properties.timeSeries[0].dayProbabilityOfRain;
        const yesterdaylowermaxtemp = data.features[0].properties.timeSeries[0].dayLowerBoundMaxTemp;
        const yesterdayhighermaxtemp = data.features[0].properties.timeSeries[0].dayUpperBoundMaxTemp;
        const yesterdayUVindex = data.features[0].properties.timeSeries[0].maxUvIndex;
        const yesterdayweatherid = data.features[0].properties.timeSeries[0].daySignificantWeatherCode;
        
        document.getElementById("yesterdaywindspeed").innerHTML = yesterdaywindspeed;
        document.getElementById("yesterdayrainprob").innerHTML = yesterdayrainprob;
        document.getElementById("yesterdaylowermaxtemp").innerHTML = yesterdaylowermaxtemp;
        document.getElementById("yesterdayhighermaxtemp").innerHTML = yesterdayhighermaxtemp;
        document.getElementById("yesterdayUVindex").innerHTML = yesterdayUVindex;

        localStorage.setItem("yesterdaywaveheight", (0.27 * (yesterdaywindspeed * yesterdaywindspeed)) / 9.80665);
    }


    function updateWeathertomorrowInfo(data) {
      const tomorrowwindspeed = data.features[0].properties.timeSeries[2].midday10MWindSpeed;
      const tomorrowrainprob = data.features[0].properties.timeSeries[2].dayProbabilityOfRain;
      const tomorrowlowermaxtemp = data.features[0].properties.timeSeries[2].dayLowerBoundMaxTemp;
      const tomorrowhighermaxtemp = data.features[0].properties.timeSeries[2].dayUpperBoundMaxTemp;
      const tomorrowUVindex = data.features[0].properties.timeSeries[2].maxUvIndex;
      const tomorrowweatherid = data.features[0].properties.timeSeries[2].daySignificantWeatherCode;
      
      document.getElementById("tomorrowwindspeed").innerHTML = tomorrowwindspeed;
      document.getElementById("tomorrowrainprob").innerHTML = tomorrowrainprob;
      document.getElementById("tomorrowlowermaxtemp").innerHTML = tomorrowlowermaxtemp;
      document.getElementById("tomorrowhighermaxtemp").innerHTML = tomorrowhighermaxtemp;
      document.getElementById("tomorrowUVindex").innerHTML = tomorrowUVindex;
      document.getElementById("tomorrowweatherid").innerHTML = tomorrowweatherid;

      localStorage.setItem("tomorrowwaveheight", (0.27 * (tomorrowwindspeed * tomorrowwindspeed)) / 9.80665);
  }
    function setWeathertomorrowImage(tomorrowweatherCode) {
      var imageElement = document.getElementById("tomorrowimage");
      console.log(tomorrowweatherCode);
      if (tomorrowweatherCode <= 1) {
          imageElement.src = "sun-solid.png";
      } else if (tomorrowweatherCode <= 2 || tomorrowweatherCode >= 8) {
          imageElement.src = "cloudy.png";
      } else if (tomorrowweatherCode <= 9 || tomorrowweatherCode >= 12) {
          imageElement.src = "cloud-rain-solid.png";
      } else if (tomorrowweatherCode <= 13 || tomorrowweatherCode >= 15) {
          imageElement.src = "cloud-showers-heavy-solid.png";
      } else if (tomorrowweatherCode <= 16 || tomorrowweatherCode >= 18 || tomorrowweatherCode <= 22 || tomorrowweatherCode >= 27) {
          imageElement.src = "snowflake-regular.png";
      } else if (tomorrowweatherCode <= 28 || tomorrowweatherCode >= 30) {
          imageElement.src = "cloud-bolt-solid.png";
      }
    }

    function updateWeathertwodaysInfo(data) {
      const twodayswindspeed = data.features[0].properties.timeSeries[3].midday10MWindSpeed;
      const twodaysrainprob = data.features[0].properties.timeSeries[3].dayProbabilityOfRain;
      const twodayslowermaxtemp = data.features[0].properties.timeSeries[3].dayLowerBoundMaxTemp;
      const twodayshighermaxtemp = data.features[0].properties.timeSeries[3].dayUpperBoundMaxTemp;
      const twodaysUVindex = data.features[0].properties.timeSeries[3].maxUvIndex;
      const twodaysweatherid = data.features[0].properties.timeSeries[3].daySignificantWeatherCode;
      
      document.getElementById("twodayswindspeed").innerHTML = twodayswindspeed;
      document.getElementById("twodaysrainprob").innerHTML = twodaysrainprob;
      document.getElementById("twodayslowermaxtemp").innerHTML = twodayslowermaxtemp;
      document.getElementById("twodayshighermaxtemp").innerHTML = twodayshighermaxtemp;
      document.getElementById("twodaysUVindex").innerHTML = twodaysUVindex;
      document.getElementById("twodaysweatherid").innerHTML = twodaysweatherid;

      localStorage.setItem("twodayswaveheight", (0.27 * (twodayswindspeed * twodayswindspeed)) / 9.80665);
  }
    function setWeathertwodaysImage(twodaysweatherCode) {
      var imageElement = document.getElementById("twodaysimage");
      console.log(twodaysweatherCode);
      if (twodaysweatherCode <= 1) {
          imageElement.src = "sun-solid.png";
      } else if (twodaysweatherCode <= 2 || twodaysweatherCode >= 8) {
          imageElement.src = "cloudy.png";
      } else if (twodaysweatherCode <= 9 || twodaysweatherCode >= 12) {
          imageElement.src = "cloud-rain-solid.png";
      } else if (twodaysweatherCode <= 13 || twodaysweatherCode >= 15) {
          imageElement.src = "cloud-showers-heavy-solid.png";
      } else if (twodaysweatherCode <= 16 || twodaysweatherCode >= 18 ||twodaysweatherCode <= 22 || twodaysweatherCode >= 27) {
          imageElement.src = "snowflake-regular.png";
      } else if (twodaysweatherCode <= 28 || twodaysweatherCode >= 30) {
          imageElement.src = "cloud-bolt-solid.png";
      }
    }

    function updateWeatherthreedaysInfo(data) {
      const threedayswindspeed = data.features[0].properties.timeSeries[4].midday10MWindSpeed;
      const threedaysrainprob = data.features[0].properties.timeSeries[4].dayProbabilityOfRain;
      const threedayslowermaxtemp = data.features[0].properties.timeSeries[4].dayLowerBoundMaxTemp;
      const threedayshighermaxtemp = data.features[0].properties.timeSeries[4].dayUpperBoundMaxTemp;
      const threedaysUVindex = data.features[0].properties.timeSeries[4].maxUvIndex;
      const threedaysweatherid = data.features[0].properties.timeSeries[4].daySignificantWeatherCode;
      
      document.getElementById("threedayswindspeed").innerHTML = threedayswindspeed;
      document.getElementById("threedaysrainprob").innerHTML = threedaysrainprob;
      document.getElementById("threedayslowermaxtemp").innerHTML = threedayslowermaxtemp;
      document.getElementById("threedayshighermaxtemp").innerHTML = threedayshighermaxtemp;
      document.getElementById("threedaysUVindex").innerHTML = threedaysUVindex;
      document.getElementById("threedaysweatherid").innerHTML = threedaysweatherid;

      localStorage.setItem("threedayswaveheight", (0.27 * (threedayswindspeed * threedayswindspeed)) / 9.80665);
  }
    function setWeatherthreedaysImage(threedaysweatherCode) {
      var imageElement = document.getElementById("threedaysimage");
      console.log(threedaysweatherCode);
      if (threedaysweatherCode <= 1) {
          imageElement.src = "sun-solid.png";
      } else if (threedaysweatherCode <= 2 || threedaysweatherCode >= 8) {
          imageElement.src = "cloudy.png";
      } else if (threedaysweatherCode <= 9 || threedaysweatherCode >= 12) {
          imageElement.src = "cloud-rain-solid.png";
      } else if (threedaysweatherCode <= 13 || threedaysweatherCode >= 15) {
          imageElement.src = "cloud-showers-heavy-solid.png";
      } else if (threedaysweatherCode <= 16 || threedaysweatherCode >= 18 || threedaysweatherCode <= 22 || threedaysweatherCode >= 27) {
          imageElement.src = "snowflake-regular.png";
      } else if (threedaysweatherCode <= 28 || threedaysweatherCode >= 30) {
          imageElement.src = "cloud-bolt-solid.png";
      }
    }

    function updateWeatherfourdaysInfo(data) {
      const fourdayswindspeed = data.features[0].properties.timeSeries[5].midday10MWindSpeed;
      const fourdaysrainprob = data.features[0].properties.timeSeries[5].dayProbabilityOfRain;
      const fourdayslowermaxtemp = data.features[0].properties.timeSeries[5].dayLowerBoundMaxTemp;
      const fourdayshighermaxtemp = data.features[0].properties.timeSeries[5].dayUpperBoundMaxTemp;
      const fourdaysUVindex = data.features[0].properties.timeSeries[5].maxUvIndex;
      const fourdaysweatherid = data.features[0].properties.timeSeries[5].daySignificantWeatherCode;
      
      document.getElementById("fourdayswindspeed").innerHTML = fourdayswindspeed;
      document.getElementById("fourdaysrainprob").innerHTML = fourdaysrainprob;
      document.getElementById("fourdayslowermaxtemp").innerHTML = fourdayslowermaxtemp;
      document.getElementById("fourdayshighermaxtemp").innerHTML = fourdayshighermaxtemp;
      document.getElementById("fourdaysUVindex").innerHTML = fourdaysUVindex;
      document.getElementById("fourdaysweatherid").innerHTML = fourdaysweatherid;

      localStorage.setItem("fourdayswaveheight", (0.27 * (fourdayswindspeed * fourdayswindspeed)) / 9.80665);
  }
    function setWeatherfourdaysImage(fourdaysweatherCode) {
      var imageElement = document.getElementById("fourdaysimage");
      console.log(fourdaysweatherCode);
      if (fourdaysweatherCode <= 1) {
          imageElement.src = "sun-solid.png";
      } else if (fourdaysweatherCode <= 2 || fourdaysweatherCode >= 8) {
          imageElement.src = "cloudy.png";
      } else if (fourdaysweatherCode <= 9 || fourdaysweatherCode >= 12) {
          imageElement.src = "cloud-rain-solid.png";
      } else if (fourdaysweatherCode <= 13 || fourdaysweatherCode >= 15) {
          imageElement.src = "cloud-showers-heavy-solid.png";
      } else if (fourdaysweatherCode <= 16 || fourdaysweatherCode >= 18 || fourdaysweatherCode <= 22 || fourdaysweatherCode >= 27) {
          imageElement.src = "snowflake-regular.png";
      } else if (fourdaysweatherCode <= 28 || fourdaysweatherCode >= 30) {
          imageElement.src = "cloud-bolt-solid.png";
      }
    }

    function updateWeatherfivedaysInfo(data) {
      const fivedayswindspeed = data.features[0].properties.timeSeries[6].midday10MWindSpeed;
      const fivedaysrainprob = data.features[0].properties.timeSeries[6].dayProbabilityOfRain;
      const fivedayslowermaxtemp = data.features[0].properties.timeSeries[6].dayLowerBoundMaxTemp;
      const fivedayshighermaxtemp = data.features[0].properties.timeSeries[6].dayUpperBoundMaxTemp;
      const fivedaysUVindex = data.features[0].properties.timeSeries[6].maxUvIndex;
      const fivedaysweatherid = data.features[0].properties.timeSeries[6].daySignificantWeatherCode;
      
      document.getElementById("fivedayswindspeed").innerHTML = fivedayswindspeed;
      document.getElementById("fivedaysrainprob").innerHTML = fivedaysrainprob;
      document.getElementById("fivedayslowermaxtemp").innerHTML = fivedayslowermaxtemp;
      document.getElementById("fivedayshighermaxtemp").innerHTML = fivedayshighermaxtemp;
      document.getElementById("fivedaysUVindex").innerHTML = fivedaysUVindex;
      document.getElementById("fivedaysweatherid").innerHTML = fivedaysweatherid;

      localStorage.setItem("fivedayswaveheight", (0.27 * (fivedayswindspeed * fivedayswindspeed)) / 9.80665);
      localStorage.setItem("fivedayswindspeedgraph", windspeed);
  }
    function setWeatherfivedaysImage(fivedaysweatherCode) {
      var imageElement = document.getElementById("fivedaysimage");
      console.log(fivedaysweatherCode);
      if (fivedaysweatherCode <= 1) {
          imageElement.src = "sun-solid.png";
      } else if (fivedaysweatherCode <= 2 || fivedaysweatherCode >= 8) {
          imageElement.src = "cloudy.png";
      } else if (fivedaysweatherCode <= 9 || fivedaysweatherCode >= 12) {
          imageElement.src = "cloud-rain-solid.png";
      } else if (fivedaysweatherCode <= 13 || fivedaysweatherCode >= 15) {
          imageElement.src = "cloud-showers-heavy-solid.png";
      } else if (fivedaysweatherCode <= 16 || fivedaysweatherCode >= 18 || fivedaysweatherCode <= 22 || fivedaysweatherCode >= 27) {
          imageElement.src = "snowflake-regular.png";
      } else if (fivedaysweatherCode <= 28 || fivedaysweatherCode >= 30) {
          imageElement.src = "cloud-bolt-solid.png";
      }
    }


      function updateWeatherTodayInfo(data) {
        const windspeed = data.features[0].properties.timeSeries[1].midday10MWindSpeed;
        const rainprob = data.features[0].properties.timeSeries[1].dayProbabilityOfRain;
        const lowermaxtemp = data.features[0].properties.timeSeries[1].dayLowerBoundMaxTemp;
        const highermaxtemp = data.features[0].properties.timeSeries[1].dayUpperBoundMaxTemp;
        const UVindex = data.features[0].properties.timeSeries[1].maxUvIndex;
        const weatherid = data.features[0].properties.timeSeries[1].daySignificantWeatherCode;
        
        document.getElementById("windspeed").innerHTML = windspeed;
        document.getElementById("rainprob").innerHTML = rainprob;
        document.getElementById("lowermaxtemp").innerHTML = lowermaxtemp;
        document.getElementById("highermaxtemp").innerHTML = highermaxtemp;
        document.getElementById("UVindex").innerHTML = UVindex;
        document.getElementById("weatherid").innerHTML = weatherid;

        localStorage.setItem("todaywaveheight", (0.27 * (windspeed * windspeed)) / 9.80665);
        localStorage.setItem("todaywindspeedgraph", windspeed);
    }
    
    function setWeatherTodayImage(weatherCode) {
        var imageElement = document.getElementById("todayimage");
        console.log(weatherCode);
        if (weatherCode <= 1) {
            imageElement.src = "sun-solid.png";
        } else if (weatherCode <= 2 || weatherCode >= 8) {
            imageElement.src = "cloudy.png";
        } else if (weatherCode <= 9 || weatherCode >= 12) {
            imageElement.src = "cloud-rain-solid.png";
        } else if (weatherCode <= 13 || weatherCode >= 15) {
            imageElement.src = "cloud-showers-heavy-solid.png";
        } else if (weatherCode <= 16 || weatherCode >= 18 || weatherCode <= 22 || weatherCode >= 27) {
            imageElement.src = "snowflake-regular.png";
        } else if (weatherCode <= 28 || weatherCode >= 30) {
            imageElement.src = "cloud-bolt-solid.png";
        }
    }
      fetch(plymurl, options)
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          updateWeatherTodayInfo(data);

          var weatherCodeString = document.getElementById("weatherid").innerHTML;
          var weatherCode = parseInt(weatherCodeString, 10);
          setWeatherTodayImage(weatherCode);
          
          updateWeatheryesterdayInfo(data);


          updateWeathertomorrowInfo(data);

          var tomorrowweatherCodeString = document.getElementById("tomorrowweatherid").innerHTML;
          var tomorrowweatherCode = parseInt(tomorrowweatherCodeString, 10);
          setWeathertomorrowImage(tomorrowweatherCode);

          updateWeathertwodaysInfo(data)

          var twodaysweatherCodeString = document.getElementById("twodaysweatherid").innerHTML;
          var twodaysweatherCode = parseInt(twodaysweatherCodeString, 10);
          setWeathertwodaysImage(twodaysweatherCode);

          updateWeatherthreedaysInfo(data)

          var threedaysweatherCodeString = document.getElementById("threedaysweatherid").innerHTML;
          var threedaysweatherCode = parseInt(threedaysweatherCodeString, 10);
          setWeatherthreedaysImage(threedaysweatherCode);

          updateWeatherfourdaysInfo(data)

          var fourdaysweatherCodeString = document.getElementById("fourdaysweatherid").innerHTML;
          var fourdaysweatherCode = parseInt(fourdaysweatherCodeString, 10);
          setWeatherfourdaysImage(fourdaysweatherCode);

          updateWeatherfivedaysInfo(data)

          var fivedaysweatherCodeString = document.getElementById("fivedaysweatherid").innerHTML;
          var fivedaysweatherCode = parseInt(fivedaysweatherCodeString, 10);
          setWeatherfivedaysImage(fivedaysweatherCode);
        });

        function blackresponse(){
        fetch(blackurl, options)
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          updateWeatherTodayInfo(data);

          var weatherCodeString = document.getElementById("weatherid").innerHTML;
          var weatherCode = parseInt(weatherCodeString, 10);
          setWeatherTodayImage(weatherCode);
          
          updateWeatheryesterdayInfo(data);


          updateWeathertomorrowInfo(data);

          var tomorrowweatherCodeString = document.getElementById("tomorrowweatherid").innerHTML;
          var tomorrowweatherCode = parseInt(tomorrowweatherCodeString, 10);
          setWeathertomorrowImage(tomorrowweatherCode);

          updateWeathertwodaysInfo(data)

          var twodaysweatherCodeString = document.getElementById("twodaysweatherid").innerHTML;
          var twodaysweatherCode = parseInt(twodaysweatherCodeString, 10);
          setWeathertwodaysImage(twodaysweatherCode);

          updateWeatherthreedaysInfo(data)

          var threedaysweatherCodeString = document.getElementById("threedaysweatherid").innerHTML;
          var threedaysweatherCode = parseInt(threedaysweatherCodeString, 10);
          setWeatherthreedaysImage(threedaysweatherCode);

          updateWeatherfourdaysInfo(data)

          var fourdaysweatherCodeString = document.getElementById("fourdaysweatherid").innerHTML;
          var fourdaysweatherCode = parseInt(fourdaysweatherCodeString, 10);
          setWeatherfourdaysImage(fourdaysweatherCode);

          updateWeatherfivedaysInfo(data)

          var fivedaysweatherCodeString = document.getElementById("fivedaysweatherid").innerHTML;
          var fivedaysweatherCode = parseInt(fivedaysweatherCodeString, 10);
          setWeatherfivedaysImage(fivedaysweatherCode);
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
          updateWeatherTodayInfo(data);

          var weatherCodeString = document.getElementById("weatherid").innerHTML;
          var weatherCode = parseInt(weatherCodeString, 10);
          setWeatherTodayImage(weatherCode);
          
          updateWeatheryesterdayInfo(data);


          updateWeathertomorrowInfo(data);

          var tomorrowweatherCodeString = document.getElementById("tomorrowweatherid").innerHTML;
          var tomorrowweatherCode = parseInt(tomorrowweatherCodeString, 10);
          setWeathertomorrowImage(tomorrowweatherCode);

          updateWeathertwodaysInfo(data)

          var twodaysweatherCodeString = document.getElementById("twodaysweatherid").innerHTML;
          var twodaysweatherCode = parseInt(twodaysweatherCodeString, 10);
          setWeathertwodaysImage(twodaysweatherCode);

          updateWeatherthreedaysInfo(data)

          var threedaysweatherCodeString = document.getElementById("threedaysweatherid").innerHTML;
          var threedaysweatherCode = parseInt(threedaysweatherCodeString, 10);
          setWeatherthreedaysImage(threedaysweatherCode);

          updateWeatherfourdaysInfo(data)

          var fourdaysweatherCodeString = document.getElementById("fourdaysweatherid").innerHTML;
          var fourdaysweatherCode = parseInt(fourdaysweatherCodeString, 10);
          setWeatherfourdaysImage(fourdaysweatherCode);

          updateWeatherfivedaysInfo(data)

          var fivedaysweatherCodeString = document.getElementById("fivedaysweatherid").innerHTML;
          var fivedaysweatherCode = parseInt(fivedaysweatherCodeString, 10);
          setWeatherfivedaysImage(fivedaysweatherCode);
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
          updateWeatherTodayInfo(data);

          var weatherCodeString = document.getElementById("weatherid").innerHTML;
          var weatherCode = parseInt(weatherCodeString, 10);
          setWeatherTodayImage(weatherCode);
          
          updateWeatheryesterdayInfo(data);


          updateWeathertomorrowInfo(data);

          var tomorrowweatherCodeString = document.getElementById("tomorrowweatherid").innerHTML;
          var tomorrowweatherCode = parseInt(tomorrowweatherCodeString, 10);
          setWeathertomorrowImage(tomorrowweatherCode);

          updateWeathertwodaysInfo(data)

          var twodaysweatherCodeString = document.getElementById("twodaysweatherid").innerHTML;
          var twodaysweatherCode = parseInt(twodaysweatherCodeString, 10);
          setWeathertwodaysImage(twodaysweatherCode);

          updateWeatherthreedaysInfo(data)

          var threedaysweatherCodeString = document.getElementById("threedaysweatherid").innerHTML;
          var threedaysweatherCode = parseInt(threedaysweatherCodeString, 10);
          setWeatherthreedaysImage(threedaysweatherCode);

          updateWeatherfourdaysInfo(data)

          var fourdaysweatherCodeString = document.getElementById("fourdaysweatherid").innerHTML;
          var fourdaysweatherCode = parseInt(fourdaysweatherCodeString, 10);
          setWeatherfourdaysImage(fourdaysweatherCode);

          updateWeatherfivedaysInfo(data)

          var fivedaysweatherCodeString = document.getElementById("fivedaysweatherid").innerHTML;
          var fivedaysweatherCode = parseInt(fivedaysweatherCodeString, 10);
          setWeatherfivedaysImage(fivedaysweatherCode);
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
          updateWeatherTodayInfo(data);

          var weatherCodeString = document.getElementById("weatherid").innerHTML;
          var weatherCode = parseInt(weatherCodeString, 10);
          setWeatherTodayImage(weatherCode);
          
          updateWeatheryesterdayInfo(data);


          updateWeathertomorrowInfo(data);

          var tomorrowweatherCodeString = document.getElementById("tomorrowweatherid").innerHTML;
          var tomorrowweatherCode = parseInt(tomorrowweatherCodeString, 10);
          setWeathertomorrowImage(tomorrowweatherCode);

          updateWeathertwodaysInfo(data)

          var twodaysweatherCodeString = document.getElementById("twodaysweatherid").innerHTML;
          var twodaysweatherCode = parseInt(twodaysweatherCodeString, 10);
          setWeathertwodaysImage(twodaysweatherCode);

          updateWeatherthreedaysInfo(data)

          var threedaysweatherCodeString = document.getElementById("threedaysweatherid").innerHTML;
          var threedaysweatherCode = parseInt(threedaysweatherCodeString, 10);
          setWeatherthreedaysImage(threedaysweatherCode);

          updateWeatherfourdaysInfo(data)

          var fourdaysweatherCodeString = document.getElementById("fourdaysweatherid").innerHTML;
          var fourdaysweatherCode = parseInt(fourdaysweatherCodeString, 10);
          setWeatherfourdaysImage(fourdaysweatherCode);

          updateWeatherfivedaysInfo(data)

          var fivedaysweatherCodeString = document.getElementById("fivedaysweatherid").innerHTML;
          var fivedaysweatherCode = parseInt(fivedaysweatherCodeString, 10);
          setWeatherfivedaysImage(fivedaysweatherCode);
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
          updateWeatherTodayInfo(data);

          var weatherCodeString = document.getElementById("weatherid").innerHTML;
          var weatherCode = parseInt(weatherCodeString, 10);
          setWeatherTodayImage(weatherCode);
          
          updateWeatheryesterdayInfo(data);


          updateWeathertomorrowInfo(data);

          var tomorrowweatherCodeString = document.getElementById("tomorrowweatherid").innerHTML;
          var tomorrowweatherCode = parseInt(tomorrowweatherCodeString, 10);
          setWeathertomorrowImage(tomorrowweatherCode);

          updateWeathertwodaysInfo(data)

          var twodaysweatherCodeString = document.getElementById("twodaysweatherid").innerHTML;
          var twodaysweatherCode = parseInt(twodaysweatherCodeString, 10);
          setWeathertwodaysImage(twodaysweatherCode);

          updateWeatherthreedaysInfo(data)

          var threedaysweatherCodeString = document.getElementById("threedaysweatherid").innerHTML;
          var threedaysweatherCode = parseInt(threedaysweatherCodeString, 10);
          setWeatherthreedaysImage(threedaysweatherCode);

          updateWeatherfourdaysInfo(data)

          var fourdaysweatherCodeString = document.getElementById("fourdaysweatherid").innerHTML;
          var fourdaysweatherCode = parseInt(fourdaysweatherCodeString, 10);
          setWeatherfourdaysImage(fourdaysweatherCode);

          updateWeatherfivedaysInfo(data)

          var fivedaysweatherCodeString = document.getElementById("fivedaysweatherid").innerHTML;
          var fivedaysweatherCode = parseInt(fivedaysweatherCodeString, 10);
          setWeatherfivedaysImage(fivedaysweatherCode);
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
          updateWeatherTodayInfo(data);

          var weatherCodeString = document.getElementById("weatherid").innerHTML;
          var weatherCode = parseInt(weatherCodeString, 10);
          setWeatherTodayImage(weatherCode);
          
          updateWeatheryesterdayInfo(data);


          updateWeathertomorrowInfo(data);

          var tomorrowweatherCodeString = document.getElementById("tomorrowweatherid").innerHTML;
          var tomorrowweatherCode = parseInt(tomorrowweatherCodeString, 10);
          setWeathertomorrowImage(tomorrowweatherCode);

          updateWeathertwodaysInfo(data)

          var twodaysweatherCodeString = document.getElementById("twodaysweatherid").innerHTML;
          var twodaysweatherCode = parseInt(twodaysweatherCodeString, 10);
          setWeathertwodaysImage(twodaysweatherCode);

          updateWeatherthreedaysInfo(data)

          var threedaysweatherCodeString = document.getElementById("threedaysweatherid").innerHTML;
          var threedaysweatherCode = parseInt(threedaysweatherCodeString, 10);
          setWeatherthreedaysImage(threedaysweatherCode);

          updateWeatherfourdaysInfo(data)

          var fourdaysweatherCodeString = document.getElementById("fourdaysweatherid").innerHTML;
          var fourdaysweatherCode = parseInt(fourdaysweatherCodeString, 10);
          setWeatherfourdaysImage(fourdaysweatherCode);

          updateWeatherfivedaysInfo(data)

          var fivedaysweatherCodeString = document.getElementById("fivedaysweatherid").innerHTML;
          var fivedaysweatherCode = parseInt(fivedaysweatherCodeString, 10);
          setWeatherfivedaysImage(fivedaysweatherCode);
      });
      document.getElementById("namechange").innerText = "Svalbard";
    }

    /* 600 lines */