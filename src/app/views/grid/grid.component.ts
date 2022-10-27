import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GridComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Nombre', 'Username', 'Direccion', 'Correo', 'Phone'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: GridElements;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  crearPost(data: any) {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data
    });
  }
}

export interface GridElements {
  Nombre: string;
  Username: string;
  Direccion: string;
  Correo: string;
  Phone: string;
  Post?: any;
}

const ELEMENT_DATA: GridElements[] = [
  {
    Nombre: 'Leanne Graham',
    Username: 'Bret',
    Direccion: 'Avenida Sucre,Numero 456, Lince',
    Correo: 'lisa.watson@example.com',
    Phone: '(+51) 555-0104',
  },
  {
    Nombre: 'Savannah Howard',
    Username: 'Savannah Howard',
    Direccion: '8445 Railroad St undefined Tampa',
    Correo: 'jeff.brown@example.com',
    Phone: '(201) 555-0104',
  },
  {
    Nombre: 'Morris Cooper',
    Username: 'Morris Cooper',
    Direccion: '8584 W Sherman Dr undefined Desoto',
    Correo: 'terra.hamilton@example.com',
    Phone: '(505) 555-0125',
  },
  {
    Nombre: 'Victoria Lane',
    Username: 'Victoria Lan',
    Direccion: '1921 Ranchview Dr undefined San Francisco',
    Correo: 'deanna.curtis@example.com',
    Phone: '(704) 555-0127',
  }
];