import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { NoteService } from '../avaliacao-service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
  expanded?: boolean;
}

export interface Task1 {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks1?: Task1[];
  expanded?: boolean;
}

export interface Task2 {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks2?: Task2[];
  expanded?: boolean;
}

export interface Cursos {
  name: string;
  completed: boolean;
  color: ThemePalette;
  Cursos?: Cursos[];
  expanded?: boolean;
}

export interface Turmas {
  name: string;
  Turmas?: Turmas[];
}

export interface tiposAvaliacao {
    name: string;
    tiposAvaliacao?: tiposAvaliacao[];
}


export interface TabelaAvaliacao {
  ordem: number;
  questao: string;
  Dificuldade: string;
  Status: string;
  pontuacao: number;
  linhas: number;
  qntlinhas: string;
  espacamento: string;
  quebra: string;
}

const ELEMENT_DATA: TabelaAvaliacao[] = [
  {ordem: 1, questao: 'SUL - 7º ANO / EF - Manhã - B - REL. HUMANAS - 4ª ETAPA - 2022', Dificuldade: 'Média',Status: 'Em moderação',pontuacao: 1, linhas:2, qntlinhas: '24/10/2022', espacamento: '13/08/2024',quebra:'Não'},
  {ordem: 2, questao: 'SUL - 7º ANO / EF - Manhã - B - REL. HUMANAS - 4ª ETAPA - 2022', Dificuldade: 'Média',Status: 'Em moderação',pontuacao: 1, linhas:2, qntlinhas: '24/10/2022', espacamento: '13/08/2024',quebra:'Não'},
  {ordem: 3, questao: 'SUL - 7º ANO / EF - Manhã - B - REL. HUMANAS - 4ª ETAPA - 2022', Dificuldade: 'Média',Status: 'Em moderação',pontuacao: 1, linhas:2, qntlinhas: '24/10/2022', espacamento: '13/08/2024',quebra:'Não'},
  {ordem: 4, questao: 'SUL - 7º ANO / EF - Manhã - B - REL. HUMANAS - 4ª ETAPA - 2022', Dificuldade: 'Média',Status: 'Em moderação',pontuacao: 1, linhas:2, qntlinhas: '24/10/2022', espacamento: '13/08/2024',quebra:'Não'},
  {ordem: 5, questao: 'SUL - 7º ANO / EF - Manhã - B - REL. HUMANAS - 4ª ETAPA - 2022', Dificuldade: 'Média',Status: 'Em moderação',pontuacao: 1, linhas:2, qntlinhas: '24/10/2022', espacamento: '13/08/2024',quebra:'Não'},
  {ordem: 6, questao: 'SUL - 7º ANO / EF - Manhã - B - REL. HUMANAS - 4ª ETAPA - 2022', Dificuldade: 'Média',Status: 'Em moderação',pontuacao: 1, linhas:2, qntlinhas: '24/10/2022', espacamento: '13/08/2024',quebra:'Não'},
  {ordem: 7, questao: 'SUL - 7º ANO / EF - Manhã - B - REL. HUMANAS - 4ª ETAPA - 2022', Dificuldade: 'Média',Status: 'Em moderação',pontuacao: 1, linhas:2, qntlinhas: '24/10/2022', espacamento: '13/08/2024',quebra:'Não'},
  {ordem: 8, questao: 'SUL - 7º ANO / EF - Manhã - B - REL. HUMANAS - 4ª ETAPA - 2022', Dificuldade: 'Média',Status: 'Em moderação',pontuacao: 1, linhas:2, qntlinhas: '24/10/2022', espacamento: '13/08/2024',quebra:'Não'},
  {ordem: 9, questao: 'SUL - 7º ANO / EF - Manhã - B - REL. HUMANAS - 4ª ETAPA - 2022', Dificuldade: 'Média',Status: 'Em moderação',pontuacao: 1, linhas:2, qntlinhas: '24/10/2022', espacamento: '13/08/2024',quebra:'Não'},
  {ordem: 10, questao: 'SUL - 7º ANO / EF - Manhã - B - REL. HUMANAS - 4ª ETAPA - 2022', Dificuldade: 'Média',Status: 'Em moderação',pontuacao: 1, linhas:2, qntlinhas: '24/10/2022', espacamento: '13/08/2024',quebra:'Não'},

]

@Component({
  selector: 'app-edit-avaliacao',
  templateUrl: './edit-avaliacao.html',
  styleUrl: './edit-avaliacao.scss' 
  
})
export class AppEditAvaliacaoComponent implements OnInit{

  tabela: string[] = ['ordem', 'questao', 'Dificuldade', 'Status','pontuacao','linhas','qntlinhas','espacamento','quebra','Opções'];
  tabelaDados = ELEMENT_DATA;

  questoes: string[] = ['', ''];

  selectedTab: string;
  labelPosition: 'Somente você' | 'Todos os usuários do exitus' = 'Todos os usuários do exitus';
  dificuldadePosition: 'Fácil' | 'Média' | 'Difícil';
  quebraposition: string = 'after';
  fontePosition: 'before' | 'after' = 'after';
  anexoPosition: 'before' | 'after' = 'after';
  afirmaPosition: 'before' | 'after' = 'after';
  referencPosition: 'sem' | 'com';

  selectedCurso: string;

  @ViewChildren('afirmacaoElement') afirmacaoElements: QueryList<ElementRef>;
  
  ngOnInit() {
    if (this.cursos.Cursos && this.cursos.Cursos.length > 0) {
      this.selectedCurso = this.cursos.Cursos[0].name;
    }
  }

  adicionarQuestao() {
    this.questoes.push('');
    setTimeout(() => {
      const elements = this.afirmacaoElements.toArray();
      if (elements.length) {
        const lastElement = elements[elements.length - 1].nativeElement;
        lastElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, 10);
  }


  logEvent(index: boolean): string {
    return index ? 'tab_ativa' : ' tab_inativa'
  }
  ///////////////////////////////////////////////////////////////////////

  tiposAvaliacao: tiposAvaliacao = {
    name: 'Tipos de Avaliação',
    tiposAvaliacao: [
        { name: '1ª SÉRIE / EM'},
        { name: '2ª SÉRIE / EM'},
        { name: '2ª SÉRIE / NA'},
        { name: '2ª SÉRIE / NA'},
        { name: '3ª SÉRIE / EM'},
        { name: '3ª SÉRIE / EM'},
        { name: '2ª SÉRIE / NA'},
        { name: '4º ANO / EF'},
        { name: '5º ANO / EF'},
        { name: '6º ANO / EF'},
        { name: '7º ANO / EF'},
        { name: '7º ANO / EF'},
        { name: '8º ANO / EF'},
        { name: '9º ANO / EF'},
        { name: '9º ANO / EF'},
      ],
  }

  cursos: Cursos = {
    name: 'Cursos',
    completed: false,
    color: 'accent',
    expanded: false, // Inicializa a propriedade expanded para false
    Cursos: [
      { name: '1ª SÉRIE / EM', completed: false, color: 'accent' },
      { name: '2ª SÉRIE / EM', completed: false, color: 'accent' },
      { name: '2ª SÉRIE / NA', completed: false, color: 'accent' },
      { name: '2ª SÉRIE / NA', completed: false, color: 'accent' },
      { name: '3ª SÉRIE / EM', completed: false, color: 'accent' },
      { name: '3ª SÉRIE / EM', completed: false, color: 'accent' },
      { name: '2ª SÉRIE / NA', completed: false, color: 'accent' },
      { name: '4º ANO / EF', completed: false, color: 'accent' },
      { name: '5º ANO / EF', completed: false, color: 'accent' },
      { name: '6º ANO / EF', completed: false, color: 'accent' },
      { name: '7º ANO / EF', completed: false, color: 'accent' },
      { name: '7º ANO / EF', completed: false, color: 'accent' },
      { name: '8º ANO / EF', completed: false, color: 'accent' },
      { name: '9º ANO / EF', completed: false, color: 'accent' },
      { name: '9º ANO / EF', completed: false, color: 'accent' },
    ],
  }

  turmas: Turmas = {
    name: 'Turmas',
    Turmas: [
      {name: 'BARÃO DE STUDART - 1ª SÉRIE / EM - Manhã - I - BIOLOGIA - PESSOA 60'},
      {name:'BARÃO DE STUDART - 1ª SÉRIE / EM - Manhã - I - BIOLOGIA - PESSOA 60'},
      {name: 'BENFICA - 1ª SÉRIE / EM - Manhã - MED - QUÍMICA II - PESSOA 495'},
      {name: 'BENFICA - 1ª SÉRIE / EM - Manhã - MED - QUÍMICA II - PESSOA 495'},
      {name: 'BENFICA - 1ª SÉRIE / EM - Manhã - MED - REDAÇÃO - PESSOA 183'},
      {name: 'BENFICA - 1ª SÉRIE / EM - Manhã - MED - SOCIOLOGIA - PESSOA 119'},
      {name: ' DIONÍSIO TORRES - 1ª SÉRIE / EM - Manhã - A - BIOLOGIA I - PESSOA 187'},
      {name: ' DIONÍSIO TORRES - 1ª SÉRIE / EM - Manhã - A - BIOLOGIA I - PESSOA 187'},
      {name: ' DIONÍSIO TORRES - 1ª SÉRIE / EM - Manhã - A - BIOLOGIA I - PESSOA 187'}
    ]
  }

  task: Task = {
    name: 'Ciências da Natureza',
    completed: false,
    color: 'warn',
    expanded: false,
    subtasks: [
      { name: 'Biologia', completed: false, color: 'accent' },
      { name: 'Ciências', completed: false, color: 'accent' },
      { name: 'Física', completed: false, color: 'accent' },
    ],
  };

  task1: Task1 = {
    name: 'Ciências Humanas',
    completed: false,
    color: 'accent',
    expanded: false,
    subtasks1: [
      { name: 'Filosofia', completed: false, color: 'accent' },
      { name: 'Geografia', completed: false, color: 'accent' },
      { name: 'História', completed: false, color: 'accent' },
    ],
  };

  task2: Task2 = {
    name: 'Linguagens e Códigos',
    completed: false,
    color: 'accent',
    expanded: false,
    subtasks2: [
      { name: 'Artes', completed: false, color: 'accent' },
      { name: 'Educação física', completed: false, color: 'accent' },
      { name: 'Espanhol', completed: false, color: 'accent' },
      { name: 'Inglês', completed: false, color: 'accent' },
      { name: 'Literatura', completed: false, color: 'accent' },
      { name: 'Portugês', completed: false, color: 'accent' },
    ],
  };

  allComplete: boolean = false;

  allComplete1: boolean = false;

  allComplete2: boolean = false;


  updateTaskCompletion() {
    if (this.task.subtasks) {
      this.task.completed = this.task.subtasks.some(subtask => subtask.completed);    
      this.allComplete = this.task.completed;
    }
  }

  updateTaskCompletion1() {
    if (this.task1.subtasks1) {
      this.task1.completed = this.task1.subtasks1.some(subtask1 => subtask1.completed);    
      this.allComplete1 = this.task1.completed;
    }
  }

  updateTaskCompletion2() {
    if (this.task2.subtasks2) {
      this.task2.completed = this.task2.subtasks2.some(subtask2 => subtask2.completed);    
      this.allComplete2 = this.task2.completed;
    }
  }

  toggleTaskExpansion() {
    this.task.expanded = !this.task.expanded;
  }

  toggleTask1Expansion() {
    this.task1.expanded = !this.task1.expanded;
  }
  toggleTask2Expansion() {
    this.task2.expanded = !this.task2.expanded;
  }

  someComplete(): boolean {
    if (!this.task.subtasks || this.task.subtasks.length === 0) {
      return false;
    }
    return this.task.subtasks.some(subtask => subtask.completed) && !this.allComplete;
  }
  
  someComplete1(): boolean {
    if (!this.task1.subtasks1 || this.task1.subtasks1.length === 0) {
      return false;
    }
    return this.task1.subtasks1.some(subtask1 => subtask1.completed) && !this.allComplete;
  }

  someComplete2(): boolean {
    if (!this.task2.subtasks2 || this.task2.subtasks2.length === 0) {
      return false;
    }
    return this.task2.subtasks2.some(subtask2 => subtask2.completed) && !this.allComplete;
  }
  
  ///////////////////////////////////////////////////////////
  subTotal = 0;
  vat = 0;
  grandTotal = 0;

  constructor(
    private fb: UntypedFormBuilder,
    private NoteService: NoteService,
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private elementRef: ElementRef
  ) {

    this.selectedTab = 'Classificação';    
  }

  isSelected(tab: string): boolean {
    return this.selectedTab === tab;
  }

  // Selecione a guia quando clicada
  selectTab(tab: string): void {
    this.selectedTab = tab;
  }


  //////////////////////////////////////////////////////////////////

  tabs = ['Modelo A'];

  addTab() {
    const nextIndex = this.tabs.length + 1;
    this.tabs.push(`Modelo ${String.fromCharCode(64 + nextIndex)}`);
  }


}
