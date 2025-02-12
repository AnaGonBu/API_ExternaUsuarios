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
    const confirmacion = confirm('¿Estás seguro que deseas eliminar al usuario?'+ this._id);
  
    if (confirmacion) {
      
      this.usuariosService.delete(_id).subscribe({
        next: () => {
          this.router.navigate(['/home']);
          alert('Se ha eliminado correctamente el usuario.');
        },
        error: (error) => {
          console.error('Error al eliminar el usuario:', error);
          // Mostrar un mensaje de error al usuario
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
  }



}
