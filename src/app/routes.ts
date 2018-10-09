import {Routes} from '@angular/router';
import {
  PATH_ARTISTE_ADMIN,
  PATH_ARTISTE_USER,
  PATH_CHANGE_USER,
  PATH_CREATE_EVENT,
  PATH_EVENT,
  PATH_HOME_LOGGED,
  PATH_HOME_LOGOUT,
  PATH_INSCRIPTION,
  PATH_LOGIN
} from './constantes.routes';
import {HomepageComponent} from './homepage/homepage.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {LoginComponent} from './login/login.component';
import {HomeArtistComponent} from './home-artist/home-artist.component';
import {EventComponent} from './event/event.component';
import {FormulaireEventComponent} from './formulaire-event/formulaire-event.component';
import {ChangeUserComponent} from './change-user/change-user.component';
import {HomeArtistUserComponent} from './home-artist-user/home-artist-user.component';


export const ROUTES: Routes = [
  {path: PATH_HOME_LOGOUT , component : HomepageComponent},
  {path: PATH_INSCRIPTION , component : InscriptionComponent},
  {path: PATH_LOGIN , component : LoginComponent},
  {path: PATH_HOME_LOGGED , component : HomeArtistComponent,
    children : [
      {path: PATH_ARTISTE_USER, component: HomeArtistUserComponent},
      {path: PATH_ARTISTE_ADMIN, component: HomeArtistComponent}
    ]
  },
  {path: PATH_EVENT , component : EventComponent},
  {path: PATH_CREATE_EVENT , component : FormulaireEventComponent},
  {path: PATH_CHANGE_USER , component : ChangeUserComponent}
];
