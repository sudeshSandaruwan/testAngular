import { Component } from '@angular/core';
import { Aside } from '../aside/aside';
import { Container } from '../container/container';
import { Header } from '../header/header';

@Component({
  selector: 'app-main-layout',
  imports: [Aside,Container,Header],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {

}
