export class order {
  constructor(
  ) {}
}

export class InvoiceList {
  constructor(
    public id: number = 0,
    public Categoria: string = '',
    public Tag: string ='',
    public Curso: string ='',
    public Tipo: string='',
    public Dificuldade: string ='',
    public status: string = '',
    public completed: boolean = false,
    public isSelected: boolean = false,
  ) {}
}