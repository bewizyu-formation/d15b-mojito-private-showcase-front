import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatProgressBarModule, MatSelectModule, MatToolbarModule
} from '@angular/material';
import {NgModule} from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatProgressBarModule,MatListModule,MatInputModule,MatFormFieldModule,
    MatSelectModule,MatCheckboxModule,MatDatepickerModule,MatToolbarModule,MatMenuModule,MatChipsModule,MatIconModule,MatDialogModule,MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule,MatProgressBarModule,MatListModule,MatInputModule,MatFormFieldModule,
    MatSelectModule,MatCheckboxModule,MatDatepickerModule,MatToolbarModule,MatMenuModule,MatChipsModule,MatIconModule,MatDialogModule,MatCardModule],
})
export class CustomMaterialComponent { }
