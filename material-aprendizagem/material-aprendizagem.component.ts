import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { materialAprendizagem } from './material';
import { MaterialService } from '@services/api-services/material.service';
import { MatInputModule } from '@angular/material/input';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgFor, NgIf } from '@angular/common';


@Component({
    selector: 'material-aprendizagem',
    templateUrl: './material-aprendizagem.html',
    styleUrl: './material-aprendizagem.scss',
    standalone: true,
    imports: [
      MatCardModule,
      TablerIconsModule,
      MatTooltip,
      MatFabButton,
      RouterLink,
      NgScrollbarModule,
      FormsModule,
      MatFormFieldModule, MatSelectModule, MatDividerModule, MatInputModule,
      MatButtonModule, MatPaginatorModule, NgFor, NgIf
    ]
})

// Atualmente utilizando o componente de referencia neste local, enquanto nao existir o material de aprendizagem

export class MaterialAprendizagemComponent implements OnInit {

  materiaisPagina: any[] = []; // Lista de materiais filtrada para cada página
  itensPorPagina = 12; // Número de cards por página
  paginaAtual = 0; // Página inicial

  ngOnInit() {
    this.atualizarMateriaisPagina();
  }

  // Atualiza a lista de materiais a serem exibidos na página atual
  atualizarMateriaisPagina() {
    const inicio = this.paginaAtual * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.materiaisPagina = this.listaMaterial.slice(inicio, fim);
  }

  // Manipula o evento de mudança de página
  mudarPagina(event: PageEvent) {
    this.paginaAtual = event.pageIndex;
    this.itensPorPagina = event.pageSize;
    this.atualizarMateriaisPagina();
  }

  listaMaterial: materialAprendizagem[] = [];
  categoriaSelecionada = 'All';



  constructor(private materialService: MaterialService) {
    this.listaMaterial = this.materialService.getMaterial();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listaMaterial = this.filter(filterValue);
  }

  filter(v: string): materialAprendizagem[] {
    return this.materialService
      .getMaterial()
      .filter((x) => x.nomeMaterial.toLowerCase().indexOf(v.toLowerCase()) !== -1);
  }

  ddlChange(ob: any): void {
    const filterValue = ob.value;
    if (filterValue === 'All') {
      this.listaMaterial = this.materialService.getMaterial();
    } else {
      this.listaMaterial = this.materialService
        .getMaterial()
               .filter((material) => material.tipoMaterial === filterValue);
    }
    // this.todos.filter(course => course.courseType==filterValue);
  }


}
