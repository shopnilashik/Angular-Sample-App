import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js"; 
import "@ui5/webcomponents/dist/TableRow.js"; 
import "@ui5/webcomponents/dist/TableCell.js"; 

@Component({
  selector: 'app-webcomponent',
  standalone: true,
  imports: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './webcomponent.component.html',
  styleUrl: './webcomponent.component.css'
})
export class WebcomponentComponent {
 ll (): void{
  alert()
 }
}
