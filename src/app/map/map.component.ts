import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    let mapProp: any = {
      center: new google.maps.LatLng(44.475, -73.212),
      zoom: 13,    
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let ctaLayer: any = new google.maps.KmlLayer({
      url: 'https://sites.google.com/site/freeparkingburlington/home/freeParking.kml',
      map: mapProp
    });

    return this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }  

}

/* 
Note: initializing the map as such works. try this in a jsfiddle to see.
look at the init

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 44.475, lng: -73.212}
  });

  var ctaLayer = new google.maps.KmlLayer({
         url: 'https://sites.google.com/site/freeparkingburlington/home/freeParking.kml',
      map: map
  });
} */

