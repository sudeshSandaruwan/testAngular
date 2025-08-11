import { Component, Type } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container',
  imports: [RouterOutlet],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
  static Header: readonly any[] | Type<any>;

}
