import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private pets: Pet[] = [
    // Dogs
    {
      name: 'Buddy',
      type: 'Dog',
      breed: 'Golden Retriever',
      price: 15000,
      image:
        'https://images.unsplash.com/photo-1611250282006-4484dd3fba6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Luna',
      type: 'Dog',
      breed: 'Husky',
      price: 18000,
      image:
        'https://plus.unsplash.com/premium_photo-1668062459592-2c12d5c07ce8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Max',
      type: 'Dog',
      breed: 'Beagle',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1606833695155-e3498374e701?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Rocky',
      type: 'Dog',
      breed: 'Labrador',
      price: 14000,
      image:
        'https://plus.unsplash.com/premium_photo-1683134006899-50a97a0330cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Charlie',
      type: 'Dog',
      breed: 'Poodle',
      price: 10000,
      image:
        'https://images.unsplash.com/photo-1565523404623-5881431b6b1e?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Duke',
      type: 'Dog',
      breed: 'Bulldog',
      price: 13000,
      image:
        'https://images.unsplash.com/photo-1552764307-1d8e1febc0e6?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Cooper',
      type: 'Dog',
      breed: 'Shiba Inu',
      price: 16000,
      image:
        'https://plus.unsplash.com/premium_photo-1718652842683-8e7f623fbc1b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Bruno',
      type: 'Dog',
      breed: 'Doberman',
      price: 17000,
      image:
        'https://images.unsplash.com/photo-1573458326340-6a20f1a380ae?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Rex',
      type: 'Dog',
      breed: 'German Shepherd',
      price: 15500,
      image:
        'https://images.unsplash.com/photo-1608121173835-4b31b6c798c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    // Cats
    {
      name: 'Milo',
      type: 'Cat',
      breed: 'Persian',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1591429939960-b7d5add10b5c?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Luna',
      type: 'Cat',
      breed: 'Maine Coon',
      price: 15000,
      image:
        'https://images.unsplash.com/photo-1612779068627-1451ffa38c81?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Simba',
      type: 'Cat',
      breed: 'Siamese',
      price: 11000,
      image:
        'https://images.unsplash.com/photo-1568309386325-ef86f13ac533?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Maple',
      type: 'Cat',
      breed: 'Scottish Fold',
      price: 16000,
      image:
        'https://images.unsplash.com/photo-1685377507301-e01b4c17e1f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Olaf',
      type: 'Cat',
      breed: 'British Shorthair',
      price: 13000,
      image:
        'https://images.unsplash.com/photo-1645437326286-d54861c8a181?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Coco',
      type: 'Cat',
      breed: 'Ragdoll',
      price: 14000,
      image:
        'https://images.unsplash.com/photo-1620933288385-b2f6f1931d9e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  getPets(): Pet[] {
    return this.pets;
  }
}
