var map;
    var brooklyn = new google.maps.LatLng(42.981234,141.452000);
    var MY_MAPTYPE_ID = 'Pandy_style';
function initialize() {
   
  var featureOpts =[
  {
    featureType: "all",
    elementType: "all",
    stylers: [

    ]
  }
];

  var mapOptions = {
    zoom: 17,
    center: brooklyn,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };
 
   map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
 

 
var image = 'images/markar.png'; //マーカーアイコン画像URL
var marker = new google.maps.Marker({
	position: brooklyn,
	map: map,
	icon:image, //アイコン画像をセット
	title: 'Pandy',
	animation: google.maps.Animation.BOUNCE ,
	
});

var styledMapOptions = {
	name: 'Pandy Map'
};



var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
 
	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
 
}


google.maps.event.addDomListener(window, 'load', initialize);

