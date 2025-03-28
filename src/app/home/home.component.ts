import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PetService } from '../services/pet.service';
import { Pet } from '../models/pet.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredPets: Pet[] = [];
  currentIndex: number = 0;

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    const allPets = this.petService.getPets();
    const dogs = allPets.filter((pet) => pet.type === 'Dog');
    const cats = allPets.filter((pet) => pet.type === 'Cat');
    this.featuredPets = [];
    const maxLength = Math.max(dogs.length, cats.length);
    for (let i = 0; i < maxLength && this.featuredPets.length < 4; i++) {
      if (i < dogs.length) {
        this.featuredPets.push(dogs[i]);
      }
      if (i < cats.length && this.featuredPets.length < 4) {
        this.featuredPets.push(cats[i]);
      }
    }
    this.featuredPets = this.featuredPets.slice(0, 4);

    const carouselElement = document.getElementById('petTestimonialCarousel');
    if (carouselElement) {
      carouselElement.addEventListener('slid.bs.carousel', (event: any) => {
        this.currentIndex = event.to;
      });
    }
  }

  getReviewText(petName: string): string {
    const reviews: { [key: string]: string } = {
      Duke: 'Duke is the sweetest bulldog! He’s brought so much joy to our home.',
      Cooper: 'Cooper’s playful energy is unmatched. Best Shiba Inu ever!',
      Bruno: 'Bruno is so loyal and smart. Perfect Doberman companion.',
      Rex: 'Rex is a true protector. Amazing German Shepherd!',
      Milo: 'Milo’s fluffy fur is to die for. Love my Persian cat!',
      Luna: 'Luna is so majestic. The best Maine Coon I’ve met!',
      Simba: 'Simba’s vocal personality is adorable. Great Siamese!',
      Nala: 'Nala is so calm and cuddly. Perfect Ragdoll!',
      Whiskers: 'Whiskers is so charming! The best British Shorthair!',
      Shadow: 'Shadow’s wild look is stunning. Amazing Bengal!',
    };
    return reviews[petName] || 'This pet is amazing and a joy to have!';
  }

  getPrevImage(): string {
    const prevIndex =
      (this.currentIndex - 1 + this.featuredPets.length) %
      this.featuredPets.length;
    return this.featuredPets[prevIndex].image;
  }

  getNextImage(): string {
    const nextIndex = (this.currentIndex + 1) % this.featuredPets.length;
    return this.featuredPets[nextIndex].image;
  }
}
