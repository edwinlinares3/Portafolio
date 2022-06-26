import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CounterComponent } from './components/counter/counter.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProgramacionComponent } from './components/programacion/programacion.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ServicesComponent } from './components/services/services.component';
import { SubPorfolioComponent } from './components/sub-porfolio/sub-porfolio.component';
import { WindowComponent } from './components/window/window.component';


const routes: Routes = [
  //rutas de navegacion - URL a otros html dentro de angular
  {path:'', redirectTo: '/header', pathMatch: 'full' },
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'counter', component: CounterComponent},
  {path:'footer', component: FooterComponent},
  {path:'header', component: HeaderComponent},
  {path:'login', component: LoginComponent},
  {path:'window', component: WindowComponent},
  {path:'programacion', component: ProgramacionComponent},
  {path:'sub-porfolio', component: SubPorfolioComponent},
  {path:'menu', component: MenuComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'resume', component: ResumeComponent},
  {path:'services', component: ServicesComponent},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
