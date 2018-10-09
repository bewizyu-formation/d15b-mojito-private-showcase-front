import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule,
  MatProgressBarModule, MatSelectModule, MatToolbarModule
} from '@angular/material';
import {NgModule} from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatProgressBarModule,MatListModule,MatInputModule,MatFormFieldModule,
    MatSelectModule,MatCheckboxModule,MatDatepickerModule,MatToolbarModule,MatMenuModule,MatChipsModule,MatIconModule,MatDialogModule,MatCardModule,
    MatNativeDateModule],
  exports: [MatButtonModule, MatCheckboxModule,MatProgressBarModule,MatListModule,MatInputModule,MatFormFieldModule,
    MatSelectModule,MatCheckboxModule,MatDatepickerModule,MatToolbarModule,MatMenuModule,MatChipsModule,MatIconModule,MatDialogModule,MatCardModule,
    MatNativeDateModule],
})
export class CustomMaterialComponent { }
