interface Task {
  id?: uint;
  name: string;
  description: string;
  deadline?: Date | null;
  status?: boolean;
  tags?: Tag[];
  lists?: List[];
  bgColorClass?: string;
}

interface Tag {
  id?: uint;
  name: string;
  description: string;
  color?: string;
}

interface TaskTag {
  id?: uint;
  task_id: uint;
  tag_id: uint;
}

interface List {
  id: number;
  name: string;
  description: string;
}
