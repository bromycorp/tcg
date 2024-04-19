import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayersFormComponent } from './players-form/players-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayersFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tcg';
}
