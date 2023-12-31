import { Component } from '@angular/core';

@Component({
  selector: 'app-initialhome',
  templateUrl: './initialhome.component.html',
  styleUrls: ['./initialhome.component.css']
})
export class InitialhomeComponent {
  images: any[];
  responsiveOptions: any[];

  constructor() {
    this.images = [
      { source: 'assets/imagenes/gatitos.png' },
      { source: 'assets/imagenes/refugio.jpg' },
      { source: 'assets/imagenes/perritos1.jpg' },
  
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
