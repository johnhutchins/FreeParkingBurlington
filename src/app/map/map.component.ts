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
    let mapProp = {
      center: new google.maps.LatLng(44.475, -73.212),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [

      ]
    };
    return this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }


}

