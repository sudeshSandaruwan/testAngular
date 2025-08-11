import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [MainLayout,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'test-pro';
}
