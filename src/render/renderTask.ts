import type { ITask } from "../types/index.js";

export function renderTask(
  task: ITask,
  template: HTMLTemplateElement,
  container: HTMLElement,
) {
  const clone = template?.content.cloneNode(true) as DocumentFragment;
  if (!clone) return;

  const taskIdCont = clone.querySelector(".task");
  let taskName = clone.querySelector(".task-name");
  let taskComm = clone.querySelector(".comments");
  let taskTime = clone.querySelector(".time__text");

  if (!taskName || !taskComm || !taskTime || !taskIdCont) return;

  taskName.textContent = task.title;
  taskComm.textContent = task.description;
  taskTime.textContent = task.time;
  taskIdCont.id = String(task.id);

  container.append(clone);
}
