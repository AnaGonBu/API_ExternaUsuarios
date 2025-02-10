import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioServiceService } from '../../services/usuario-service.service';

@Component({
  selector: 'app-formulario-usuarios',
  standalone:true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario-usuarios.component.html',
  styleUrl: './formulario-usuarios.component.css'
})
export class FormularioUsuariosComponent {


  router =inject(Router)
  usuariosService= inject (UsuarioServiceService)
  rutaActiva = inject(ActivatedRoute)

  usuarioForm:FormGroup;
  tipo: string;
  miUsuario!:Usuario;
  parent: string ="alta";

  constructor(){
    this.tipo= "insertar";
    
    this.usuarioForm = new FormGroup ({}, 
      [])
  }
  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params:any)=>{
      if (params._id){
        this.parent = 'modificar'
        this.tipo= "actualizar"
        this.usuariosService.getById(params._id).subscribe({
          next: (usuario) => {
            this.miUsuario = usuario;
          },
          error: (error) => {
            console.error('Error al obtener el usuario:', error);
            // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
          }
        });
      }
    });
  }
  getDataForm() {
    throw new Error('Method not implemented.');
    }

}
