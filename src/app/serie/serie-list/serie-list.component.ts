import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import {dataSeries} from '../dataSeries';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  constructor() { }

  series: Array<Serie> = [];

  getSerieList(): Array<Serie> {
    return dataSeries;
  }

  AverageSeasons: number = 0;
  
  calcularPromedioTemporadas(): number {
    
    if (this.series.length === 0) {
      return 0;
    }

    let totalTemporadas = 0;
    this.series.forEach((serie) => {
      totalTemporadas += serie.seasons;
    });

    return totalTemporadas / this.series.length;
}

  ngOnInit() {
    this.series = this.getSerieList();
    this.AverageSeasons = this.calcularPromedioTemporadas();
  }

}
