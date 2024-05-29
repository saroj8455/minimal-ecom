import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ConfigService } from './services/config.service';
import { FlexiconsComponent } from './components/flexicons/flexicons.component';
import { PrimeconfigModule } from './primeconfig/primeconfig.module';
import { Sidebar } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlexiconsComponent, PrimeconfigModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'clientapi';
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  sidebarVisible: boolean = false;

  panelMenuItems!: MenuItem[];

  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {
    this.initPanelItems();
    this.configService.loadProductsFromFakeApi().subscribe((products) => {
      console.log(products);
    });
  }

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }

  initPanelItems() {
    this.panelMenuItems = [
      {
        label: 'Router',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-eraser',
            route: '/home',
          },
          {
            label: 'About Booking',
            icon: 'pi pi-heart',
            route: '/about',
          },
        ],
      },
      {
        label: 'Programmatic',
        icon: 'pi pi-link',
        command: () => {
          this.router.navigate(['/installation']);
        },
      },
      {
        label: 'External',
        icon: 'pi pi-home',
        items: [
          {
            label: 'Angular',
            icon: 'pi pi-star',
            url: 'https://angular.io/',
          },
          {
            label: 'Vite.js',
            icon: 'pi pi-bookmark',
            url: 'https://vitejs.dev/',
          },
        ],
      },
    ];
  }
}
