export interface INote {
  id: number;
  title: string;
  content: string;
}

export interface INoteCreate {
  title: string;
  content: string;
}

export interface INoteUpdate extends INoteCreate {}
