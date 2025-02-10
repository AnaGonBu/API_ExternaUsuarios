import { Component, inject, Input } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioServiceService } from '../../services/usuario-service.service';
import { BotoneraComponent } from "../botonera/botonera.component";

@Component({
  selector: 'app-usuario-card',
  standalone:true,
  imports: [BotoneraComponent],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export class UsuarioCardComponent {

  @Input() miUsuario!: Usuario;
  nombreCompleto: string ="" ;
  usuarioService = inject(UsuarioServiceService)


  ngOnInit() {
    this.nombreCompleto = this.usuarioService.getNombreCompleto(this.miUsuario);
  }



}
