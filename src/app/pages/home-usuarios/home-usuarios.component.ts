import { Component, inject } from '@angular/core';
import { UsuarioCardComponent } from "../../components/usuario-card/usuario-card.component";
import { Usuario } from '../../interfaces/usuario';
import { UsuarioServiceService } from '../../services/usuario-service.service';

@Component({
  selector: 'app-home-usuarios',
  standalone:true,
  imports: [ UsuarioCardComponent],
  templateUrl: './home-usuarios.component.html',
  styleUrl: './home-usuarios.component.css'
})
export class HomeUsuariosComponent {

  arrayUsuarios: Usuario[];
  usuarioService= inject(UsuarioServiceService)
  arrMostrar:Usuario[]=[];
  inicio:number =0
  fin:number=6
  btnAnteriorDisabled: boolean =true;
  btnSiguienteDisabled: boolean =true;

  constructor(){
    this.arrayUsuarios = [];
  }

  ngOnInit(): void {
    try{
      this.usuarioService.getAll()
      .subscribe((usuarios)=>{
      this.arrayUsuarios =usuarios
      this.actualizarVista();
      });
    }catch (error){
      console.log('Erorr al cargar los datos: ' + error)
    }
  }

  actualizarVista() {
    try{
        this.arrMostrar = this.arrayUsuarios.slice(this.inicio, this.fin);
        // Habilitar/deshabilitar botones según la cantidad de elementos
        this.btnAnteriorDisabled = this.inicio === 0;
        this.btnSiguienteDisabled = this.fin >= this.arrayUsuarios.length;
    }catch (error){
      console.log('Erorr al segmentar los datos: ' + error)
    }
  }
  

  avanzar(): void {
    this.inicio += 6;
    this.fin += 6;
    this.actualizarVista();
  }

  retroceder(): void {
    if (this.inicio > 0) {
      this.inicio -= 6;
      this.fin -= 6;
      this.actualizarVista();
    }
  }

}
