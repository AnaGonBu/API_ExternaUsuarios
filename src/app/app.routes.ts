import { Routes } from '@angular/router';
import { DetalleUsuariosComponent } from './pages/detalle-usuarios/detalle-usuarios.component';
import { FormularioUsuariosComponent } from './pages/formulario-usuarios/formulario-usuarios.component';
import { HomeUsuariosComponent } from './pages/home-usuarios/home-usuarios.component';

export const routes: Routes = [


    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeUsuariosComponent},
    {path: 'user/:_id', component: DetalleUsuariosComponent},
    {path: 'newuser', component: FormularioUsuariosComponent},
    {path: 'updateuser/:_id', component: FormularioUsuariosComponent},
    //{path: '**', component: Page404Component}
    {path:'**', redirectTo: 'home'}
];
