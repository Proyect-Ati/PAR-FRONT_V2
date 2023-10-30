import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { principles } from '../interface/home';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  products: any[] = [];
  containerStyles: any = {
    'max-width': '100%',
    'max-height': '75vh'
  }
  responsiveOptions: any[] | undefined;
  principles: principles[] = []
  lastPrinciples: principles[] = []

  ngOnInit() {
    register();
    this.products = [
      {
        image: 'https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg',
        name: 'bamboo-watch'
      },
      {
        image: 'https://wallpaperaccess.com/full/25557.jpg',
        name: 'bamboo-watch'
      },
      {
        image: 'https://c4.wallpaperflare.com/wallpaper/984/232/942/form-light-dark-lines-wallpaper-preview.jpg',
        name: 'bamboo-watch'
      },
    ]
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '1220px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.principles = [
      {
        title:'Nutrición',
        description: 'Agua y alimento nutricionalmente adecuado para cada especie, que esté disponible en cantidades y frecuencia adecuada acorde a la edad, estado fisiológico,necesidades especiales.'
      },
      {
        title:'Ambiente',
        description: 'Se refiere a las condiciones físicas y atmosféricas a las que los animales están expuestos directamente. El espacio disponible, el piso, la atmósfera, el olor, la temperatura, el ruido y la luz o la densidad de otros animales.'
      },
      {
        title:'Salud',
        description: 'Este dominio se refiere a la atención médica veterinaria tanto preventiva como oportuna si el animal ha sufrido lesiones o enfermedades. Tienerelación con el dominio 1 y 2.'
      }, 
    ];
    this.lastPrinciples = [
      {
        title:'Interacciones comportamentales',
        description: 'Destaca los comportamientos flexibles relacionados que presentan en respuesta a eventos y condiciones externas variables, a menudo impredecibles. El enfoque principal del Dominio 4 está en la evidencia conductual de expresión obstaculizada y/o mejorada de agencia cuando los animales interactúan con (1) su entorno, (2) otros animales no humanos y (3) seres humanos.'
      },
      {
        title:'Estado mental',
        description: 'El dominio mental se refiere a las experiencias positivas y negativas que los humanos podemos generar en los animales, así como también se manifiesta en relacióna los dominios 1 al 4.'
      }
    ]
  }

}