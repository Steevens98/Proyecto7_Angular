import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { DataService } from 'src/app/providers/data.service';

import { Medico } from 'src/app/interfaces/medico';
import { Especialidad } from 'src/app/interfaces/especialidad';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  displayedColumns: string[] = ['idMedico', 'nombre', 'apellido', 'especialidad'];
  public data: Medico[] = [];
  public dataEspecialidad: Especialidad[] = []; 
  
  constructor(private dataProvider: DataService) { }
  ngOnInit() {
    this.dataProvider.getResponseMedico().subscribe((response) => {
      this.data = (response as Medico[]);
    });

    this.dataProvider.getResponseEspecialidad().subscribe((response) => {
      this.dataEspecialidad = (response as Especialidad[]);          
    });
  }

}
