import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-players-dialog',
    imports: [
        NgForOf,
        MatDialogContent,
        MatDialogTitle
    ],
    templateUrl: './players-dialog.component.html',
    styleUrl: './players-dialog.component.css'
})
export class PlayersDialogComponent {
    data = inject(MAT_DIALOG_DATA);
}
