import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'petshopwithwind';
  isLoading = false;
  showMoveToTop = false;
  isMenuExpanded = false;
  isMobile = false;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const width = window.innerWidth;
    this.isMobile = width < 992;
    if (!this.isMobile) {
      this.isMenuExpanded = true;
    } else {
      this.isMenuExpanded = false;
    }
  }

  onRouteActivate() {
    this.isLoading = true;
    setTimeout(() => (this.isLoading = false), 500);
  }

  onRouteDeactivate() {
    this.isLoading = true;
  }

  toggleMenu() {
    if (this.isMobile) {
      this.isMenuExpanded = !this.isMenuExpanded;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showMoveToTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
