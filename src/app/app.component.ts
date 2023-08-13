import { Component, inject, HostListener } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  drawer: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  firestore: Firestore = inject(Firestore)
  items$: Observable<any[]>;
  isSmallScreen = false;

  constructor() {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize(); // Überprüfe die Bildschirmgröße beim Initialisieren der Komponente
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 900;
  }

  toggleDrawer() {
    // Setze das 'opened' Attribut basierend auf der Bildschirmgröße
    this.drawer.opened = !this.isSmallScreen;
  }
}