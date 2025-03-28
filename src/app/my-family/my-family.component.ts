import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PetService } from '../services/pet.service';
import { Pet } from '../models/pet.model';

@Component({
  selector: 'app-myfamily',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-family.component.html',
  styleUrls: ['./my-family.component.css'],
})
export class MyfamilyComponent implements OnInit {
  pets: Pet[] = [];
  filteredPets: Pet[] = [];
  activeType: string = 'Dog';

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.pets = this.petService.getPets();
    this.setActiveType(this.activeType);
  }

  setActiveType(type: string): void {
    this.activeType = type;
    this.filteredPets = this.pets.filter((pet) => pet.type === type);
  }
}
