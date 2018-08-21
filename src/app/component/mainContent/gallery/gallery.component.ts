import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

/*   images: any[];
  imageReady = [];

  ngOnInit() {
    this.images = [];
    this.images.push({ src: 'assets/img/gallery/academic/1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ src: 'assets/img/gallery/academic/2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ src: 'assets/img/gallery/academic/3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ src: 'assets/img/gallery/academic/4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
    this.images.push({ src: 'assets/img/gallery/academic/5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
    this.images.push({ src: 'assets/img/gallery/academic/6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
    this.images.push({ src: 'assets/img/gallery/academic/7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
    this.images.push({ src: 'assets/img/gallery/academic/8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
    this.images.push({ src: 'assets/img/gallery/academic/9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
    this.images.push({ src: 'assets/img/gallery/academic/10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
    this.images.push({ src: 'assets/img/gallery/academic/11.jpg', alt: 'Description for Image 11', title: 'Title 11' });

  }

  setCurrentImage(selectedImage: any): void {
    this.imageReady = this.images;
    this.imageReady.forEach(image => { image.class = image === selectedImage ? 'active' : ''; });
  } */


  images = [];
  selectedImage: any;
  selecteImageIndex: number;

  constructor() {
    this.images.push({ src: 'assets/img/gallery/academic/1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ src: 'assets/img/gallery/academic/2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ src: 'assets/img/gallery/academic/3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ src: 'assets/img/gallery/academic/4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
    this.images.push({ src: 'assets/img/gallery/academic/5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
    this.images.push({ src: 'assets/img/gallery/academic/6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
    this.images.push({ src: 'assets/img/gallery/academic/7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
    this.images.push({ src: 'assets/img/gallery/academic/8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
    this.images.push({ src: 'assets/img/gallery/academic/9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
    this.images.push({ src: 'assets/img/gallery/academic/10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
    this.images.push({ src: 'assets/img/gallery/academic/11.jpg', alt: 'Description for Image 11', title: 'Title 11' });

  }



  displayImage(i): void {
    console.log(i, this.images[i]);
    this.selecteImageIndex = i;
    this.selectedImage = this.images[i];
  }

  prevImage(): void {
    this.selecteImageIndex = this.selecteImageIndex === 0 ? this.images.length - 1 : this.selecteImageIndex - 1;
    this.selectedImage = this.images[this.selecteImageIndex];
  }

  nextImage(): void {
    this.selecteImageIndex = this.selecteImageIndex === this.images.length - 1 ? 0 : this.selecteImageIndex + 1;
    this.selectedImage = this.images[this.selecteImageIndex];
  }

  imageLoad(): void {
    console.log('imageLoading');
  }

  removeSpinner(divId: string): void {
    document.getElementById(divId).setAttribute('style', 'display:none;');
  }


}
