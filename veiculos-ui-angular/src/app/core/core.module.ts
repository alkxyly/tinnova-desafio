import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule , registerLocaleData} from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import localePt from '@angular/common/locales/pt';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
     NavbarComponent,
     PaginaNaoEncontradaComponent],
  imports: [
    CommonModule,
    ToastModule
  ],
  exports:[
      NavbarComponent,
     ToastModule
  ],    
  providers:[MessageService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class CoreModule { }
