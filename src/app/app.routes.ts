import { RouterModule, Routes } from '@angular/router';
// Es necesario importar los componentes de las rutas
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';




// Constante que contiene un array de rutas. Las rutas están formadas por un path y un componente
const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    // Este path tiene un parámetro id que será el heroe que reciba
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'busqueda/:termino', component: BusquedaComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
