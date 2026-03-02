import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MainContainerComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSection = 'inicio';
  sidebarOpen = false;
  isOpen: boolean = false;

  setSection(section: string) {
    this.currentSection = section;
    this.isOpen = false;
  }

  toggleSidebar(isOpen: boolean) {
    this.isOpen = isOpen
    this.sidebarOpen = this.isOpen;
  }

  closeSidebarHandler() {
  this.sidebarOpen = this.isOpen;

  requestAnimationFrame(() => {
    const el = document.querySelector('.sidebar') as HTMLElement;
    if (el) {
      el.classList.remove('open');
    }
  });
}
}