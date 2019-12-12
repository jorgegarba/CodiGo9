var mymap = L.map('mapid').setView([-16.4291908, -71.5197197], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  accessToken: 'pk.eyJ1Ijoiam9yZ2VnYXJiYSIsImEiOiJjazQyNG81enMwOGVhM3BvZWZyeDd5YXF5In0.NIdsy4AIeO7X_E7mJucmPw'
}).addTo(mymap);