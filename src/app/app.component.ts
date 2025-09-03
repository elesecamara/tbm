import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tbmmx';
    isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 4000); // Simulación de carga de 4s
  }
}
