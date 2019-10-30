import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  controlLeer: Subscription;
  busqueda: any[];

  constructor(private leerBusqueda: SearchService) { }

  ngOnInit() {
    this.controlLeer = this.leerBusqueda.leerBusqueda().subscribe((data: any[]) => {
      console.log(data.seasons);
      this.busqueda = data.seasons;
    })
  }
  
  ngOnDestroy(): void {
    this.controlLeer.unsubscribe();
  }

}