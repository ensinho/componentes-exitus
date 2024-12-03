import { ChangeDetectionStrategy, Component, TemplateRef, viewChild, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatLabel, MatFormField } from '@angular/material/form-field';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatTooltip } from '@angular/material/tooltip';
import { MatInput } from '@angular/material/input';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { ExitusEditorComponent } from '../../../../components/exitus-editor/exitus-editor.component';
import { BreadcrumbService } from '@services/app-services/breadcrumb.service';
import { AsyncPipe, Location, NgFor } from '@angular/common';
import { MatFabButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CursoService } from '@services/api-services/academico-services/curso.service';
import { Observable } from 'rxjs';
import { Curso } from '../../academico/curso/curso';
import { CategoriaService } from '@services/api-services/categoria.service';
import { Categoria } from '../../categoria/categoria';

@Component({
    selector: 'material-aprendizagem',
    templateUrl: './add-material-aprendizagem.html',
    styleUrl: '../material-aprendizagem.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatCard,
        MatTabGroup,
        MatTab,
        MatCardContent,
        NgScrollbarModule,
        MatLabel,
        TablerIconsModule,
        MatTooltip,
        MatFormField,
        MatInput,
        MatRadioGroup,
        MatRadioButton,
        ExitusEditorComponent,
        MatFabButton,
        MatSelectModule,
        NgFor,
        AsyncPipe,MatCardHeader, MatCardTitle        
    ],
})
export class AddMaterialAprendizagem implements OnInit {
    constructor (private breadcrumbService: BreadcrumbService, 
      private location: Location,private cursoservice: CursoService) {}

    breadcrumbButtons = viewChild('breadcrumbbuttons', {read: TemplateRef});
    cursos$: Observable<Curso[]>;
    categoria$: Observable<Categoria[]>;

    ngOnInit() {
        this.breadcrumbService.updateBreadcrumbComponent(this.breadcrumbButtons()!);
        this.cursos$ = this.cursoservice.getCursos()      
      }

      goBack(): void {
        this.location.back();
      }

      /* loadByCategoriaSup() {
        const categoriaService = this.categoriaService;
        //Passagem de contexto do this para a função anonima, para que o componente de filtro consiga consumir o serviço CategoriaService
        return (categoriaSup: number | string) => {
          return (categoriaSup as number).pipe(
            map((categorias) =>
              categorias.map((categoria) => ({
                name: categoria.nome,
                value: categoria.codigo,
              }))
            )
          );
        };
      } */
}
