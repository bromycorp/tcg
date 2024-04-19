import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  Form,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-players-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './players-form.component.html',
  styleUrl: './players-form.component.scss',
})
export class PlayersFormComponent {
  playersFormGroup: FormGroup;

  constructor() {
    this.playersFormGroup = new FormGroup({
      playersInputFormControl: new FormControl(),
      playersOutputFormControl: new FormControl(),
    });
  }

  transformData(): void {
    const playersInput: string = this.playersFormGroup.get(
      'playersInputFormControl'
    )?.value;
    const listPlayers = playersInput.split('\n');
    const listOutput: string[] = [];
    listPlayers.forEach((player) => {
      listOutput.push(this.playerToXml(player));
    });
    this.playersFormGroup
      .get('playersOutputFormControl')
      ?.setValue(listOutput.join('\n'));
  }

  playerToXml(player: string): string {
    const decomposedPlayer: string[] = player.split(' ');
    console.log(decomposedPlayer);
    return (
      '<player userid="' +
      decomposedPlayer[3] +
      '">\n\t<firstname>' +
      decomposedPlayer[1] +
      '</firstname>\n\t<lastname>' +
      decomposedPlayer[0] +
      '</lastname>\n\t<birthdate>01/01/' +
      decomposedPlayer[2] +
      '</birthdate>\n\t<creationdate>04/19/2024 23:55:38</creationdate>\n\t<lastmodifieddate>04/19/2024 23:55:38</lastmodifieddate>\n</player>'
    );
  }
}
