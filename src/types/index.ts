export interface CardProps {
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface Tasks extends CardProps {
  id: number;
}

export interface TaskFormProps {
  data: Tasks[];
  addData: (data: Tasks) => void;
}

export interface ListProps {
  data: Tasks[];
}
