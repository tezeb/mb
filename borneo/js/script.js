var map_url = 'https://maps.tilehosting.com/styles/positron/{z}/{x}/{y}.png?key=ZrAXb63iqQo965PKtQew';

var OpenStreetMap_Mapnik = L.tileLayer(map_url, {
	attribution: '&copy; Stamen'
});

var kuching = new L.LatLng(1.625758, 110.874023)

var map = new L.Map('map', {
 zoom: 6,
 center: kuching,
 scrollWheelZoom: true,
 layers: [OpenStreetMap_Mapnik]
});

myCircleMarker = L.Marker.extend({
 options: {
  icon : L.divIcon({className : 'circle',
      iconSize : [ 10, 10 ]}),
  title : '',
  image_path: 'path/to/loading/todo',
  image_date: '?',
  image_eta: '?'
 }
});

/*
function showPost() {
 $('#main-post-container').show();
 var src = this.options.url;
 $('#map').animate ({width:"33%"},"slow").siblings('#main-post-container')
   .animate({'width': '64%'}, "slow",function(){
     $.get(src, function(data) {
       console.log(src);
       $('#main-post').html(data);
     });
     map.fitBounds(markers.getBounds(), {maxZoom: 8});
   });
}
*/

function gotoUrl() {
 var src = this.options.url;
 window.open(src, '_blank'); 
}

function hideImage() {
 $('#postcard-container').hide();
 $('#postcard').hide();
 $('#loading').show();
}

var markers = L.geoJson(null, {});

map.on('load', function() {
  $('#zoom').attr('value', map.getZoom());
  });

function createLine(datapoints) {
  var line = L.polyline([], {
  //  color: '#9242f4',
    color: '#ff0',
    weight: 4,
    opacity: 1,
    smoothFactor: 1,
    dashArray: '1, 10',
    clickable: true,
  });
  var l = datapoints.length;
  if( l > 0) {
    for (i=0; i<l ;i++) {
      var lng = datapoints[i].lon;
      var lat = datapoints[i].lat;
      var point = new L.LatLng(lat,lng);
      var url = datapoints[i].url;

      line.addLatLng(point);
      var marker = L.marker(point, {
        icon : L.divIcon({className : 'circle',
                         iconSize : [ 10, 10 ]}),
        //   line : line,
        riseOnHover: true,
        url: url,
      });
      marker.on('click', gotoUrl, marker);
      markers.addLayer(marker); 
      line.addTo(map);
    }
  }
}

$(document).ready(function(){
  $.ajax('gps.json', {'success': function(datapoints) {
     for (var key in datapoints) {
       console.log(key);
       createLine(datapoints[key]);
     }
   map.fitBounds(markers.getBounds(), {maxZoom: 8});
   map.addLayer(markers);
  }});
  /* 
 var l = datapoints.length;
 var m = L.marker(kuching, {clickable: false});
 m.setOpacity(0);
  markers.addLayer(m);
 */
}); 

function showPlace(url) {
 $('#map').show();
 $('#map').animate ({width:"33%"},"slow").siblings('#main-post-container')
   .animate({'width': '64%'}, "slow",function(){
     $.get(url, function(data) {
       $('#main-post').html(data);
     });
     map.fitBounds(markers.getBounds(), {maxZoom: 8});
   });
  return false;
}
