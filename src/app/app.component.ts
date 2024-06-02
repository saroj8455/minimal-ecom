import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ConfigService } from './services/config.service';
import { FlexiconsComponent } from './components/flexicons/flexicons.component';
import { PrimeconfigModule } from './primeconfig/primeconfig.module';
import { Sidebar } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';
import { CartService } from './services/cart.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlexiconsComponent, PrimeconfigModule, AsyncPipe],
  providers: [CartService],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'clientapi';
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  sidebarVisible: boolean = false;

  cartCount: number = 0;
  cartCountTest = this.cartService.cartItemCount$;

  panelMenuItems!: MenuItem[];

  constructor(
    private configService: ConfigService,
    private router: Router,
    private cartService: CartService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.initPanelItems();
    this.configService.loadProductsFromFakeApi().subscribe((products) => {
      // console.log(products);
    });

    // this.ngZone.runOutsideAngular(() => {
    //   this.cartService.cartItemCount$.subscribe((count) => {
    //     this.cartCount = this.cartService.count;
    //     //this.cdr.detectChanges(); // manually trigger the change
    //   });
    // });

    this.cartService.cartItemCount$.subscribe(() => {
      this.cartCount = this.cartService.count;
      //this.cdr.detectChanges(); // manually trigger the change
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
