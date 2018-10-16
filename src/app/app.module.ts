import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {ROUTES} from './routes';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';

import { HomeArtistAdminComponent } from './home-artist-admin/home-artist-admin.component';
import { HomeArtistUserComponent } from './home-artist-user/home-artist-user.component';
import { EventComponent } from './event/event.component';
import { FormulaireEventComponent } from './formulaire-event/formulaire-event.component';
import { ChangeUserComponent } from './change-user/change-user.component';
import { HomeArtistComponent } from './home-artist/home-artist.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialComponent} from './CustomMaterialComponent';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DescriptionArtisteComponent } from './description-artiste/description-artiste.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import {MenuUserSettingsComponent} from './menu-user-settings/menu-user-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    InscriptionComponent,
    LoginComponent,
    HomeArtistAdminComponent,
    HomeArtistUserComponent,
    EventComponent,
    FormulaireEventComponent,
    ChangeUserComponent,
    HomeArtistComponent,
    HomeArtistComponent,
    HeaderLoginComponent,
    HomeArtistComponent,
    DescriptionArtisteComponent,
    MenuUserSettingsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CustomMaterialComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
