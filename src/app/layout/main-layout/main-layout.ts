import { Component } from '@angular/core';
import { Aside } from '../aside/aside';
import { Container } from '../container/container';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-main-layout',
  imports: [Aside,Container,Header,Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {

}
