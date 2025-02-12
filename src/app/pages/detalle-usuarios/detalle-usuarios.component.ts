import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BotoneraComponent } from "../../components/botonera/botonera.component";
import { Usuario } from '../../interfaces/usuario';
import { UsuarioServiceService } from '../../services/usuario-service.service';

@Component({
  selector: 'app-detalle-usuarios',
  standalone:true,
  imports: [BotoneraComponent],
  templateUrl: './detalle-usuarios.component.html',
  styleUrl: './detalle-usuarios.component.css'
})
export class DetalleUsuariosComponent {

  usuariosService = inject(UsuarioServiceService);
  rutaActiva = inject(ActivatedRoute)
  nombreCompleto: string ="" ;

  miUsuario!:Usuario;

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: any) => {
      let _id: string = params._id;
  
      this.usuariosService.getById(_id).subscribe({
        next: (usuario) => {
          this.miUsuario = usuario;
          this.nombreCompleto = this.usuariosService.getNombreCompleto(this.miUsuario);
        },
        error: (error) => {
          console.log('No se ha podido recuperar el usuario: ', error);
          
        }
      });
    });
  }


}
