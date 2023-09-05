import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  description: string = 'Esta página web muestra datos sobre pacientes y médicos de un hospital. En el componente Main se muestra una tabla con los datos de la entidad Paciente. Por otro lado en el componente Report se muestra una tabla con los datos de la entidad Médico. Adicionalmente, se pueden filtrar los datos de la tabla del componente Report.'; /* Cambie el texto con la descripción de su proyecto */
}
