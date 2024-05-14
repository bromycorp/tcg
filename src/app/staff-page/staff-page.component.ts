import { Component } from '@angular/core';
import { PlayersFormComponent } from "./players-form/players-form.component";

@Component({
    selector: 'app-staff-page',
    standalone: true,
    templateUrl: './staff-page.component.html',
    styleUrl: './staff-page.component.scss',
    imports: [PlayersFormComponent]
})
export class StaffPageComponent {

}
