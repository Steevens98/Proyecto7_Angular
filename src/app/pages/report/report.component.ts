import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/providers/data.service';
import { Medico } from 'src/app/interfaces/medico';
import { Especialidad } from 'src/app/interfaces/especialidad';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit{
  displayedColumns: string[] = ['idMedico', 'nombre', 'apellido', 'especialidad'];
  public data: Medico[] = [];
  public dataEspecialidad: Especialidad[] = [];
  
  //terminoBuscar:string = '';
  
  //espFiltro: Medico[] = [];

  dataSource: any = [];

  constructor(private dataProvider: DataService) { }

  ngOnInit(): void {
    this.dataProvider.getResponseMedico().subscribe((response) => {
      this.data = response as Medico[];    
      this.dataSource =  new MatTableDataSource<Medico>(response as Medico[]);      
    });

    this.dataProvider.getResponseEspecialidad().subscribe((response) => {
      this.dataEspecialidad = response as Especialidad[];
    });    
  }  
  
  /*filtrarCanciones(valor:string){
    this.espFiltro = this.data.filter((val) => val.especialidad.toLowerCase().includes(valor));
  }*/

  applyFilter($event: any) {
    this.dataSource.filter = $event.value.trim().toLowerCase();
  }
  
}
