import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import swal from 'sweetalert';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioServiceService } from '../../services/usuario-service.service';


@Component({
  selector: 'app-formulario-usuarios',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent {

  router = inject(Router);
  usuariosService = inject(UsuarioServiceService);
  rutaActiva = inject(ActivatedRoute);

  miUsuario!: Usuario;
  parent: string ;
  //usuarioForm : FormGroup;


  usuarioForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    image: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });


  constructor() {

    this.parent ="insertar"
    this.rutaActiva.params.subscribe((params:any) => {
      if (params._id) {
        this.parent = 'modificar';
        this.cargarUsuario(params._id);
      }
    });
  }

  cargarUsuario(_id: string) {
    this.usuariosService.getById(_id).subscribe({
      next: (usuario:Usuario) => {
        this.miUsuario = usuario;
        this.usuarioForm.patchValue(usuario);
      },
      error: (error) => {
        console.error('Error al obtener el usuario:', error);
      }
    });
  }

  getDataForm() {
    if (this.usuarioForm.valid) {
      const user: Usuario = this.usuarioForm.value as Usuario;
  
      if (this.parent === 'insertar') {
        this.usuariosService.insert(user).subscribe({
          next: () => {
            swal("Cliente dado de alta con éxito", "success");
            this.router.navigate(['/']);
          },
          error: (error) => {
            swal ( "Oops" ,  "No hemos podido dar de alta el usuario!" ,  "error" )
            console.error('Error al dar de alta el usuario:', error);
            // Mostrar un mensaje de error al usuario
          }
        });
      } else if (this.parent === 'modificar') {
        this.usuariosService.update(user).subscribe({
          next: () => {
            swal('Yeahh!!!',"Cliente actualizado con éxito");
            this.router.navigate(['/']);
          },
          error: (error) => {
            swal ( "Oops" ,  "No hemos podido actualizar el usuario!" ,  "error" )
            console.error('Error al actualizar el usuario:', error);
            // Mostrar un mensaje de error al usuario
          }
        });
      }
    }
  }
  // constructor() {
  //   this.usuarioForm = new FormGroup({
  //     first_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
  //     last_name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  //     username: new FormControl('', [Validators.required]),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     image: new FormControl('', [Validators.required]),
  //     password: new FormControl('', [Validators.required, Validators.minLength(4)])
  //   });
  // }
  // ngOnInit(): void {
  //   this.rutaActiva.params.subscribe((params:any) => {
  //     if (params._id) {
  //       this.parent = 'modificar';
  //       this.tipo = 'modificar';
  //       this.cargarUsuario(params._id);
  //     } else {
  //       this.tipo = 'alta';
  //     }
  //   });
  // }

}
