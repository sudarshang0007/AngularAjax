import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: any[];
  imageReady = [];

  ngOnInit() {
    this.images = [];
    this.images.push({ source: 'assets/img/gallery/academic/1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
    this.images.push({ source: 'assets/img/gallery/academic/2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: 'assets/img/gallery/academic/3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ source: 'assets/img/gallery/academic/4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
    this.images.push({ source: 'assets/img/gallery/academic/5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
    this.images.push({ source: 'assets/img/gallery/academic/6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
    this.images.push({ source: 'assets/img/gallery/academic/7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
    this.images.push({ source: 'assets/img/gallery/academic/8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
    this.images.push({ source: 'assets/img/gallery/academic/9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
    this.images.push({ source: 'assets/img/gallery/academic/10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
    this.images.push({ source: 'assets/img/gallery/academic/11.jpg', alt: 'Description for Image 11', title: 'Title 11' });

  }

  setCurrentImage(selectedImage: any): void {
    this.imageReady = this.images;
    this.imageReady.forEach(image => { image.class = image === selectedImage ? 'active' : '' });
  }

}
