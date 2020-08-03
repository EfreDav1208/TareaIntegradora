import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AportesComponent } from './componentes/aportes/aportes.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CompletoComponent } from './componentes/completo/completo.component';


const routes: Routes = [
  {path:'inicio', component: AportesComponent},
  {path:'login', component: LoginComponent},
  {path:'cuenta', component: PerfilComponent},
  {path:'logeado', component: InicioComponent},
  {path:'completo', component: CompletoComponent},
  {path:'**', pathMatch:'full', redirectTo:'inicio'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
