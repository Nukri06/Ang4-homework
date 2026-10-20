import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  buttonsArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
