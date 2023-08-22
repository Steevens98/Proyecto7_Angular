import { Component } from '@angular/core';
//Importación de la interfaz
import {Paciente} from '../../interfaces/paciente';

 //Importación del servicio
 import {DataService} from '../../providers/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent{
  displayedColumns: string[] = ['idPaciente','nombre','apellido','fecha_Nacimiento','direccion' ,'telefono'];
	public data : Paciente[] = [];  
  //Inyección de dependencia del servicio
  constructor(private dataProvider:DataService) { }
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response ) => { 
      this.data = (response as Paciente[]); 
    })
  }

}
