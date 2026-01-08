import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Nguyen Trung Nhan - Portfolio';

  // TODO: Import and use section components
  // TODO: Set up scroll spy
  // TODO: Handle section navigation
}
