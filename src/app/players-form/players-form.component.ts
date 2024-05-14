import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-players-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  templateUrl: './players-form.component.html',
  styleUrl: './players-form.component.scss',
})
export class PlayersFormComponent {
  playersFormGroup: FormGroup;
  accesCodeList: string[] = ['testb', 'SROP0524'];
  isCodeInError: boolean = false;
  trueBool: boolean = true;

  constructor(private formBuilder: FormBuilder, public datepipe: DatePipe) {
    this.playersFormGroup = this.formBuilder.group({
      playersInputFormControl: new FormControl(),
      playersOutputFormControl: new FormControl(''),
      codeAccesFormControl: new FormControl<string | null>(''),
    });

    this.playersFormGroup
      .get('codeAccesFormControl')
      ?.valueChanges.subscribe((value) => {
        this.isCodeInError = false;
      });
  }

  clickTransform(): void {
    if (
      this.accesCodeList.find(
        (code) =>
          this.playersFormGroup.get('codeAccesFormControl')?.value == code
      )
    ) {
      this.transformData();
    } else {
      this.isCodeInError = true;
    }
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
    const decomposedPlayer: string[] = player.split('\t');
    const date: Date = new Date();
    const dateTime: string | null = this.datepipe.transform(
      date,
      'MM/dd/yyyy HH:mm:ss'
    );
    return (
      '<player userid="' +
      decomposedPlayer[3] +
      '">\n\t<firstname>' +
      decomposedPlayer[1] +
      '</firstname>\n\t<lastname>' +
      decomposedPlayer[0] +
      '</lastname>\n\t<birthdate>01/01/' +
      decomposedPlayer[2] +
      '</birthdate>\n\t<creationdate>' +
      dateTime +
      '</creationdate>\n\t<lastmodifieddate>' +
      dateTime +
      '</lastmodifieddate>\n</player>'
    );
  }
}
