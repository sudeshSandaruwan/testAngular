import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [MainLayout,RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'test-pro';
}
