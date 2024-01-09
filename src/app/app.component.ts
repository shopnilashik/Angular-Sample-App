import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WebcomponentComponent } from './webcomponent/webcomponent.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [   CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    HomeComponent,
    AboutComponent,
    WebcomponentComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'my-app';
  showFiller= true;
  
  ngOnInit(): void {
    
  }
  ll : string = "Hellllllllll"
  showFillerTest() {
    console.log('object');
  }
}
