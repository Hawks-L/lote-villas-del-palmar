import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent {

zoomedImageUrl: string | null = null;

currentImageIndex: number = 0;

  openZoom(imageUrl: string) {
    this.zoomedImageUrl = 'assets/img/puenteFrente.png';
  }

  closeZoom() {
    this.zoomedImageUrl = null;
  }

   @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    this.closeZoom();
  }
  
  zoomCarouselImage(imageUrl: string) {
  this.currentImageIndex = this.images.findIndex(img => img.url === imageUrl);
  this.zoomedImageUrl = this.images[this.currentImageIndex].url;
}

nextImage() {
  this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  this.zoomedImageUrl = this.images[this.currentImageIndex].url;
}

prevImage() {
  this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  this.zoomedImageUrl = this.images[this.currentImageIndex].url;
}

  images = [
    { url: 'assets/img/aereaPorteria.png', alt: 'Imagen 1' },
    { url: 'assets/img/aerea.png', alt: 'Imagen 2' },
    { url: 'assets/img/bahia.png', alt: 'Imagen 3' },
    { url: 'assets/img/BQ.png', alt: 'Imagen 4' },
    { url: 'assets/img/choza.png', alt: 'Imagen 5' },
    { url: 'assets/img/chozaEspalda.png', alt: 'Imagen 6' },
    { url: 'assets/img/comedor.png', alt: 'Imagen 7' },
    { url: 'assets/img/interiorChoza.png', alt: 'Imagen 8' },
    { url: 'assets/img/lago.png', alt: 'Imagen 9' },
    { url: 'assets/img/lagoBQ.png', alt: 'Imagen 10' },
    { url: 'assets/img/lagoCompl.png', alt: 'Imagen 11' },
    { url: 'assets/img/lagoDiagonal.png', alt: 'Imagen 12' },
    { url: 'assets/img/minChoza.png', alt: 'Imagen 13' },
    { url: 'assets/img/piscina.png', alt: 'Imagen 14' },
    { url: 'assets/img/puenteDerecha.png', alt: 'Imagen 15' },
    { url: 'assets/img/puenteFrente.png', alt: 'Imagen 16' },
    { url: 'assets/img/puenteInterior.png', alt: 'Imagen 17' },
    { url: 'assets/img/puenteIzquierda.png', alt: 'Imagen 18' }
  ];
}
