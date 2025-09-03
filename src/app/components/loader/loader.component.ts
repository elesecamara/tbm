import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = true;
  progress = 0;

  ngOnInit() {
    this.simulateLoading();
  }

  simulateLoading() {
    const interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 1;
      } else {
        clearInterval(interval);
        this.isLoading = false; // Se oculta al terminar
      }
    }, 30); // velocidad de carga
  }
}

