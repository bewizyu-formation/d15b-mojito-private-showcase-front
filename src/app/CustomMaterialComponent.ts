import {
  MatButtonModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatProgressBarModule, MatSelectModule, MatToolbarModule
} from '@angular/material';
import {NgModule} from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatProgressBarModule,MatListModule,MatInputModule,MatFormFieldModule,
    MatSelectModule,MatCheckboxModule,MatDatepickerModule,MatToolbarModule,MatMenuModule,MatChipsModule,MatIconModule,MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule,MatProgressBarModule,MatListModule,MatInputModule,MatFormFieldModule,
    MatSelectModule,MatCheckboxModule,MatDatepickerModule,MatToolbarModule,MatMenuModule,MatChipsModule,MatIconModule,MatDialogModule],
})
export class CustomMaterialComponent { }
