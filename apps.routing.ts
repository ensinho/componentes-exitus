// Dentro da aba apps, tem os filhos, cada componente precisa passar por aqui, criando suas rotas.

import { Routes } from '@angular/router';

import { AppChatComponent } from './chat/chat.component';
import { AppNotesComponent } from './avaliacao/notes.component';
import { AppUnidadeComponent } from './academico/unidade/unidade.component';
import { AppPermissionComponent } from './permission/permission.component';
import { AppEmailComponent } from './email/email.component';
import { DetailComponent } from './email/detail/detail.component';
import { AppTaskboardComponent } from './taskboard/taskboard.component';
import { AppFullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { AppTicketlistComponent } from './instrucao/instrucao.component';
import { AppContactComponent } from './contact/contact.component';
import { AppCoursesComponent } from './referencia/referencia.component';
import { AppCourseDetailComponent } from './referencia/course-detail/course-detail.component';
import { AppEmployeeComponent } from './anexos/anexo.component';
import { AppInvoiceListComponent } from './questoes/lista-questoes/tela-questoes';
import { AppAddInvoiceComponent } from './questoes/adicionar-questoes/aberta/add-aberta-altconst.component';
import { AppAddInvoice2Component } from './questoes/adicionar-questoes/discursiva/add-discursiva-argum.component';
import { AppAddInvoice3Component } from './questoes/adicionar-questoes/multipla-escolha/add-multipla-alt-constantes.component';
import { AppInvoiceViewComponent } from './questoes/invoice-view/invoice-view.component';
import { AppEditInvoiceComponent } from './questoes/edit-invoice/edit-invoice.component';
import { AppBlogsComponent } from './blogs/blogs.component';
import { AppBlogDetailsComponent } from './blogs/details/details.component';
import { AppAddAvaliacaoComponent } from './avaliacao/adicionar-avaliacao/add-avaliacao.component';
import { AppAddEmployeeComponent } from './anexos/add/adicionar-anexo.component';
import { AppAddReferenciaComponent } from './referencia/adicionar-referencia/adicionar-referencia.component';
import { AppAddInstrucaoComponent } from './instrucao/adicionar-instrucao/adicionar-instrucao.component';
import { AppInstituicaoComponent } from './academico/Instituicao/instituicao.component';
import { AppViewInstituicaoComponent } from './academico/Instituicao/view-instituicao/view-instituicao.component';
import { AppAddAssociacaoComponent } from './questoes/adicionar-questoes/aberta/add-aberta-associacao.component';
import { AppAddNarrativaComponent } from './questoes/adicionar-questoes/discursiva/add-discursiva-narrativa.component';
import { AppAddDescritivaComponent } from './questoes/adicionar-questoes/discursiva/add-discursiva-descritiva.component';
import { AppAddAfirmacaoIncompletaComponent } from './questoes/adicionar-questoes/multipla-escolha/add-multipla-afirm-incompleta.component';
import { AppAddAssercaoComponent } from './questoes/adicionar-questoes/multipla-escolha/add-multipla-assercao.component';
import { AppAddMultiplaAssociacaoComponent } from './questoes/adicionar-questoes/multipla-escolha/add-multipla-associacao.component';
import { AppAddFocoComponent } from './questoes/adicionar-questoes/multipla-escolha/add-multipla-foco.component';
import { AppAddMultiplaInterpretacaoComponent } from './questoes/adicionar-questoes/multipla-escolha/add-multipla-interpretacao.component';
import { AppAddMultiplaLacunaComponent } from './questoes/adicionar-questoes/multipla-escolha/add-multipla-lacuna.component';
import { AppAddMultiplaOrdenacaoComponent } from './questoes/adicionar-questoes/multipla-escolha/add-multipla-ordenacao.component';
import { AppAddMultiplaRespostaMultiplaComponent } from './questoes/adicionar-questoes/multipla-escolha/add-multipla-res-multipla.component';
import { AppAddMultiplaRespostaUnicaComponent } from './questoes/adicionar-questoes/multipla-escolha/add-multipla-res-unica.component';
import { AppAddInterpretacaoComponent } from './questoes/adicionar-questoes/aberta/add-aberta-interpretacao.component';
import { AppAddLacunaComponent } from './questoes/adicionar-questoes/aberta/add-aberta-lacuna.component';
import { AppAddOrdenacaoComponent } from './questoes/adicionar-questoes/aberta/add-aberta-ordenacao.component';
import { AppAddRespostaUnicaComponent } from './questoes/adicionar-questoes/aberta/add-aberta-res-unica.component';
import { AppAddUnidadeComponent } from './academico/unidade/adicionar-unidade/adicionar-unidade.component';
import { AppEditUnidadeComponent } from './academico/unidade/editar-unidade/editar-unidade.component';
import { AppViewUnidadeComponent } from './academico/unidade/visualizar-unidade/visualizar-unidade.component';
import { AppCursoComponent } from './academico/Curso/curso.component';
import { AppAddCursoComponent } from './academico/Curso/adicionar-curso/adicionar-curso.component';
import { AppViewCursoComponent } from './academico/Curso/visualizar-curso/visualizar-curso.component';
import { AppEditCursoComponent } from './academico/Curso/editar-curso/editar-curso.component';
import { AppEditInstituicaoComponent } from './academico/Instituicao/edit-instituicao/editar-instituicao.component';
import { AppSecretariaComponent } from './academico/Secretaria/secretaria.component';
import { AppAddSecretariaComponent } from './academico/Secretaria/adicionar-secretaria/adicionar-secretaria.component';
import { AppGraficaComponent } from './academico/Grafica/grafica.component';
import { AppCursoUnidadeComponent } from './academico/curso-unidade/cursos-unidades.component';
import { AppPeriodoLetivoComponent } from './academico/Periodo-letivo/periodo-letivo.component';
import { AppTipoAvaliacaoComponent } from './academico/tipo-avaliacao/tipo-avaliacao.component';
import { AppLayoutComponent } from './academico/Layouts/layouts.component';


/* Aqui onde podemos mudar os titulos das respectivas paginas do aplicativo */

export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chat',
        component: AppChatComponent,
        data: {
          title: 'Mensagens',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Mensagens' },
          ],
        },
      },
      {
        path: 'calendar',
        component: AppFullcalendarComponent,
        data: {
          title: 'Calendário',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Calendário' },
          ],
        },
      },
      {
        path: 'avaliacoes',
        component: AppNotesComponent,
        data: {
          title: 'Avaliações',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Pesquisa de Avaliações' },
          ],
        },
        /* Quero tentar adicionar um filho, pra quando clicarmos em avaliações
        termos acesso as opções, cadastro e pesquisa, além de aplicação */
      },

      /* Caminhos de adicionar || visualizar || editar avaliacao  */
      {
        path: 'add-avaliacao',
        component: AppAddAvaliacaoComponent,
        data: {
          title: 'Adicionar Avaliação',
          urls: [
            { title: 'Pesquisa de Avaliações', url: '/apps/avaliacoes' },
            { title: 'Adicionar Avaliação' },
          ],
        },
      },

      /* Mensagens */
      { path: 'email', redirectTo: 'email/inbox', pathMatch: 'full' },
      {
        path: 'email/:type',
        component: AppEmailComponent,
        data: {
          title: 'Mensagens',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Mensagens' },
          ],
        },
        children: [
          {
            /* Ver mensagens */
            path: ':id',
            component: DetailComponent,
            data: {
              title: 'Detalhes da mensagem',
              urls: [
                { title: 'Mensagens', url: '/apps/email/inbox' },
                { title: 'Detalhes da mensagem' },
              ],
            },
          },
        ],
      },
      {
        path: 'permission',
        component: AppPermissionComponent,
        data: {
          title: 'Roll Base Access',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Roll Base Access' },
          ],
        },
      },
      {
        path: 'unidade',
        component: AppUnidadeComponent,
        data: {
          title: 'Unidades',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Unidades' },
          ],
        },
      },
      {
        path: 'add-unidade',
        component: AppAddUnidadeComponent,
        data: {
          title: 'Adicionar Unidade',
          urls: [
            { title: 'Unidade', url: '/apps/unidade' },
            { title: 'Adicionar Unidade' },
          ],
        },
      },
      {
        path: 'view-unidade',
        component: AppViewUnidadeComponent,
        data: {
          title: 'Visualizar Unidade',
          urls: [
            { title: 'Unidade', url: '/apps/unidade' },
            { title: 'Visualizar Unidade' },
          ],
        },
      },
      {
        path: 'edit-unidade',
        component: AppEditUnidadeComponent,
        data: {
          title: 'Editar Unidade',
          urls: [
            { title: 'Unidade', url: '/apps/unidade' },
            { title: 'Editar Unidade' },
          ],
        },
      },
      {
        path: 'curso',
        component: AppCursoComponent,
        data: {
          title: 'Cursos',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Cursos' },
          ],
        },
      },
      {
        path: 'add-curso',
        component: AppAddCursoComponent,
        data: {
          title: 'Adicionar curso',
          urls: [
            { title: 'Cursos', url: '/apps/curso' },
            { title: 'Adicionar curso' },
          ],
        },
      },

      {
        path: 'edit-curso',
        component: AppEditCursoComponent,
        data: {
          title: 'Editar curso',
          urls: [
            { title: 'Cursos', url: '/apps/curso' },
            { title: 'Editar cursos' },
          ],
        },
      },

      {
        path: 'view-curso',
        component: AppViewCursoComponent,
        data: {
          title: 'Visualizar curso',
          urls: [
            { title: 'Cursos', url: '/apps/curso' },
            { title: 'Visualizar cursos' },
          ],
        },
      },

      {
        path: 'seguranca',
        component: AppTaskboardComponent,
        data: {
          title: 'Segurança',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Segurança' },
          ],
        },
      },
      {
        path: 'instrucao',
        component: AppTicketlistComponent,
        data: {
          title: 'Instrução Específica',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Instrução Específica' },
          ],
        },
      },

      {
        path: 'instituicao',
        component: AppInstituicaoComponent,
        data: {
          title: 'Instituição',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Instituição' },
          ],
        },
      },

      {
        path: 'app-view-instituicao',
        component: AppViewInstituicaoComponent,
        data: {
          title: 'Visualizar Instituição',
          urls: [
            { title: 'Instituição', url: '/apps/instituicao' },
            { title: 'Visualizar Instituicao' },
          ]
        }
      },

      {
        path: 'app-edit-instituicao',
        component: AppEditInstituicaoComponent,
        data: {
          title: 'Editar Instituição',
          urls: [
            { title: 'Instituição', url: '/apps/instituicao' },
            { title: 'Editar Instituição' },
          ]
        }
      },

      /* secretarias */
      {
        path: 'secretaria',
        component: AppSecretariaComponent,
        data: {
          title: 'Secretarias',
          urls: [
            {title: 'Página inicial', url: '/dashboards/dashboard1'},
            {title: 'Secretarias' },
          ]
        }
      },

      {
        path: 'add-secretaria',
        component: AppAddSecretariaComponent,
        data: {
          title: 'Adicionar secretaria',
          urls: [
            {title: 'Secretarias', url: '/apps/secretaria'},
            {title: 'Adicionar secretarias', },
          ]
        }
      },

      /* grafica */
      {
        path: 'grafica',
        component: AppGraficaComponent,
        data: {
          title: 'Gráficas',
          urls: [
            {title: 'Página inicial', url: '/dashboards/dashboard1'},
            {title: 'Gráficas' },
          ]
        }
      },

      /* curso unidade */
      {
        path: 'curso-unidade',
        component: AppCursoUnidadeComponent,
        data: {
          title: 'Cursos Unidades',
          urls: [
            {title: 'Página inicial', url: '/dashboards/dashboard1'},
            {title: 'Cursos Unidades' },
          ]
        }
      },

      /* periodo letivo */
      {
        path: 'periodo-letivo',
        component: AppPeriodoLetivoComponent,
        data: {
          title: 'Período Letivo',
          urls: [
            {title: 'Página inicial', url: '/dashboards/dashboard1'},
            {title: 'Período Letivo' },
          ]
        }
      },

      /* tipos de  avaliacao */
      {
        path: 'tipo-avaliacao',
        component: AppTipoAvaliacaoComponent,
        data: {
          title: 'Tipos Avaliações',
          urls: [
            {title: 'Página inicial', url: '/dashboards/dashboard1'},
            {title: 'Tipos Avaliações' },
          ]
        }
      },

      /* layout */
      {
      path: 'layout',
      component: AppLayoutComponent,
      data: {
        title: 'Layouts',
        urls: [
          {title: 'Página inicial', url: '/dashboards/dashboard1'},
          {title: 'Layouts' },
        ]
      }
    },

      /* cte  */
      {
        path: 'cte',
        component: AppContactComponent,
        data: {
          title: 'Controles de Trabalhos Educacionais - Cadastros e Pesquisas',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Controles de Trabalhos Educacionais ' },
          ],
        },
      },

      /* Referencias */
      {
        path: 'referencias',
        component: AppCoursesComponent,
        data: {
          title: 'Referências',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Referências' },
          ],
        },
      },
      {
        path: 'courses/coursesdetail/:id',
        component: AppCourseDetailComponent,
        data: {
          title: 'Course Detail',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Course Detail' },
          ],
        },
      },
      {
        path: 'blog/post',
        component: AppBlogsComponent,
        data: {
          title: 'Posts',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Posts' },
          ],
        },
      },
      {
        path: 'blog/detail/:id',
        component: AppBlogDetailsComponent,
        data: {
          title: 'Blog Detail',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Blog Detail' },
          ],
        },
      },

      /* Anexos */
      {
        path: 'anexos',
        component: AppEmployeeComponent,
        data: {
          title: 'Anexos',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Anexos' },
          ],
        },
      },

      /* Questoes */
      {
        path: 'questoes',
        component: AppInvoiceListComponent,
        data: {
          title: 'Questões',
          urls: [
            { title: 'Página Inicial', url: '/dashboards/dashboard1' },
            { title: 'Pesquisa de Questões' },
          ],
        },
      },


      /* Caminhos de adicionar || visualizar || editar questões  */
      {
        path: 'add-aberta',
        component: AppAddInvoiceComponent,
        data: {
          title: 'Aberta - Alternativas Constantes',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Aberta - Alternativas Constantes' },
          ],
        },
      },

      {
        path: 'add-aberta-associacao',
        component: AppAddAssociacaoComponent,
        data: {
          title: 'Aberta - Associação',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Aberta - Associação' },
          ],
        },
      },
      {
        path: 'add-aberta-interpretacao',
        component: AppAddInterpretacaoComponent,
        data: {
          title: 'Aberta - Interpretação',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Aberta - Interpretação' },
          ],
        },
      },
      {
        path: 'add-aberta-lacuna',
        component: AppAddLacunaComponent,
        data: {
          title: 'Aberta - Lacuna',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Aberta - Lacuna' },
          ],
        },
      },
      {
        path: 'add-aberta-ordenacao',
        component: AppAddOrdenacaoComponent,
        data: {
          title: 'Aberta - Ordenação',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Aberta - Ordenação' },
          ],
        },
      },
      {
        path: 'add-aberta-res-unica',
        component: AppAddRespostaUnicaComponent,
        data: {
          title: 'Aberta - Resposta Única',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Aberta - Reposta Única' },
          ],
        },
      },
      {
        path: 'add-discursiva',
        component: AppAddInvoice2Component,
        data: {
          title: 'Discursiva - Argumentativa',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Discursiva - Argumentativa' },
          ],
        },
      },
      {
        path: 'add-discursiva-descritiva',
        component: AppAddDescritivaComponent,
        data: {
          title: 'Discursiva - Descritiva',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Discursiva - Descritiva' },
          ],
        },
      },
      {
        path: 'add-discursiva-narrativa',
        component: AppAddNarrativaComponent,
        data: {
          title: 'Discursiva - Narrativa',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Discursiva - Narrativa' },
          ],
        },
      },
      {
        path: 'add-multipla',
        component: AppAddInvoice3Component,
        data: {
          title: 'Multipla Escolha - Alternativas Constantes',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Multipla Escolha - Alternativas Constantes' },
          ],
        },
      },
      {
        path: 'add-multipla-afirm-incompleta',
        component: AppAddAfirmacaoIncompletaComponent,
        data: {
          title: 'Multipla Escolha - Afirmação Incompleta',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Multipla Escolha - Afirmação Incompleta' },
          ],
        },
      },
      {
        path: 'add-multipla-assercao',
        component: AppAddAssercaoComponent,
        data: {
          title: 'Multipla Escolha - Asserção e Razão',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Multipla Escolha - Asserção e Razão' },
          ],
        },
      },
      {
        path: 'add-multipla-associacao',
        component: AppAddMultiplaAssociacaoComponent,
        data: {
          title: 'Multipla Escolha - Associação',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Multipla Escolha - Associação' },
          ],
        },
      },
      {
        path: 'add-multipla-foco',
        component: AppAddFocoComponent,
        data: {
          title: 'Multipla Escolha - Foco Negativo',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Multipla Escolha - Foco Negativo' },
          ],
        },
      },
      {
        path: 'add-multipla-interpretacao',
        component: AppAddMultiplaInterpretacaoComponent,
        data: {
          title: 'Multipla Escolha - Interpretação',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Multipla Escolha - Interpretação' },
          ],
        },
      },
      {
        path: 'add-multipla-lacuna',
        component: AppAddMultiplaLacunaComponent,
        data: {
          title: 'Multipla Escolha - Lacuna',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Multipla Escolha - Lacuna' },
          ],
        },
      },
      {
        path: 'add-multipla-ordenacao',
        component: AppAddMultiplaOrdenacaoComponent,
        data: {
          title: 'Multipla Escolha - Ordenação',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Multipla Escolha - Ordenação' },
          ],
        },
      },
      {
        path: 'add-multipla-res-multipla',
        component: AppAddMultiplaRespostaMultiplaComponent,
        data: {
          title: 'Multipla Escolha - Resposta Múltipla',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Multipla Escolha - Resposta Múltipla' },
          ],
        },
      },
      {
        path: 'add-multipla-res-unica',
        component: AppAddMultiplaRespostaUnicaComponent,
        data: {
          title: 'Multipla Escolha - Resposta Única',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Multipla Escolha - Resposta Única' },
          ],
        },
      },

      {
        path: 'app-add-anexo',
        component: AppAddEmployeeComponent,
        data: {
          title: 'Adicionar Anexo',
          urls: [
            { title: 'Anexos', url: '/apps/anexos' },
            { title: 'Adicionar Anexo' },
          ]
        }
      },

      {
        path: 'app-add-referencia',
        component: AppAddReferenciaComponent,
        data: {
          title: 'Adicionar Referência',
          urls: [
            { title: 'Referências', url: '/apps/referencia' },
            { title: 'Adicionar Referência' },
          ]
        }
      },

      {
        path: 'app-add-instrucao',
        component: AppAddInstrucaoComponent,
        data: {
          title: 'Adicionar Instrução Específica',
          urls: [
            { title: 'Instruções Específicas', url: '/apps/instrucao' },
            { title: 'Adicionar Instrução' },
          ]
        }
      },
   
      {
        path: 'viewInvoice/:id',
        component: AppInvoiceViewComponent,
        data: {
          title: 'Visualizar questão',
          urls: [
            { title: 'Questões', url: '/apps/invoice' },
            { title: 'Visualizar questão' },
          ],
        },
      },
      {
        path: 'editinvoice/:id',
        component: AppEditInvoiceComponent,
        data: {
          title: 'Editar questão',
          urls: [
            { title: 'Visualizar questão', url: '/apps/viewInvoice/9860' },
            { title: 'Editar questão' },
          ],
        },
      },
    ],
  },
];
