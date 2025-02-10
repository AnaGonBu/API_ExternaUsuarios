import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioServiceService } from '../../services/usuario-service.service';

@Component({
  selector: 'app-formulario-usuarios',
  standalone:true,
  imports: [RouterLink, ReactiveFormsModule,CommonModule],
  templateUrl: './formulario-usuarios.component.html',
  styleUrl: './formulario-usuarios.component.css'
})
export class FormularioUsuariosComponent {


  router =inject(Router)
  usuariosService= inject (UsuarioServiceService)
  rutaActiva = inject(ActivatedRoute)

  usuarioForm:FormGroup;
  //tipo: string;
  miUsuario!:Usuario;
  parent: string ;

  constructor(){
    //this.tipo= "insertar";
    this.parent= 'Insertar'
    this.usuarioForm = new FormGroup ({
      first_name: new FormControl('', [Validators.required,Validators.min(3), Validators.max(15)]),
      last_name: new FormControl('', [Validators.required, Validators.min(4)]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.min(0), Validators.max(10)]),
      image: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required,Validators.min(4)])
    },
      [])
  }
  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params:any)=>{
      if (params._id){
        this.parent = 'modificar'
        //this.tipo= "actualizar"
        this.usuariosService.getById(params._id).subscribe({
          next: (usuario) => {
          let user= this.miUsuario = usuario;

            this.usuarioForm = new FormGroup ({
              first_name: new FormControl(usuario.first_name, [Validators.required,Validators.min(3), Validators.max(15)]),
              last_name: new FormControl(usuario.last_name, [Validators.required, Validators.min(4)]),
              username: new FormControl(usuario.username, [Validators.required]),
              email: new FormControl(usuario.email, [Validators.required,Validators.min(0), Validators.max(10)]),
              image: new FormControl(usuario.image, [Validators.required]),
              password: new FormControl(usuario.password,[Validators.required,Validators.min(4)])
            },
              [])
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
