import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import swal from 'sweetalert';
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


  async borrarUsuario(_id: string) {
    try {
        const confirmacion = await swal({
            text: "¿Seguro que desea eliminar el usuario?",
            buttons:['No!',true] ,
        });
  
    if (confirmacion) {
      this.usuariosService.delete(_id).subscribe({
        next: () => {
          this.router.navigate(['/home']);
                    swal("Cliente eliminado con éxito");
        },
        error: (error) => {
          console.error('Error al eliminar el usuario:', error);
                    swal ( "Oops" ,  "No hemos peliminar el usuario!" ,  "error" )
        }
      });
    } else {
      // Redirige según el valor de 'parent'
      if (this.parent === 'card') {
        this.router.navigate(['/home']);
      } else if (this.parent === 'detalle') {
        this.router.navigate(['/user', _id]);
      } else {
        // Redirigir a una ruta por defecto si no coincide con ninguno de los casos
        this.router.navigate(['/']);
      }
    }
    } catch (error) {
        console.error('Error en la confirmación:', error);
        swal ( "Oops" ,  "No hemos podido eliminar el usuario!" ,  "error" )
    }
  }



}

