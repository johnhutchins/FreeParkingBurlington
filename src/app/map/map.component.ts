import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterContentInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  //ctaLayer: google.maps.KmlLayer;

  constructor() { }

  ngOnInit() {

    let mapProp: any = {
      center: new google.maps.LatLng(44.475, -73.212),
      minZoom: 15,  
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true     
    };
    
  return this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }  

  ngAfterContentInit(){
    let ctaLayer = new google.maps.KmlLayer({
      url: 'https://sites.google.com/site/freeparkingburlington/home/freeparkingv2.kml',
      map: this.map
    });
  }

}

