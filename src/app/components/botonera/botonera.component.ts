import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuarioServiceService } from '../../services/usuario-service.service';

@Component({
  selector: 'app-botonera',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {

  usuariosService =inject (UsuarioServiceService)
  router = inject (Router)
  
  @Input() _id :string;
  @Input () parent: string;

  constructor(){
    this._id = "";
    this.parent ="";
  }
  borrarUsuario(_id: string) {

    }


}
