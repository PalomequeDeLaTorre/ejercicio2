import { Component, OnInit } from '@angular/core';
import { AsteroidesService } from '../../services/asteroides.service';


@Component({
  selector: 'app-posts',
  templateUrl: './api.component.html'
})
export class ApiComponent implements OnInit {

  data: any[] = [];  // Array para guardar los datos de los asteroides

  constructor(private asteroidesService: AsteroidesService) {}

  ngOnInit() {
    this.asteroidesService.getApi().subscribe((response: any) => {
      // Obtén la fecha del día actual para acceder a los datos
      const dateKey = Object.keys(response.near_earth_objects)[0];
      this.data = response.near_earth_objects[dateKey];
   });
 }
}

