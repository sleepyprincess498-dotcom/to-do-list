export function renderTask(task, template, container) {
    const clone = template?.content.cloneNode(true);
    if (!clone)
        return;
    const taskIdCont = clone.querySelector(".task");
    let taskName = clone.querySelector(".task-name");
    let taskComm = clone.querySelector(".comments");
    let taskTime = clone.querySelector(".time__text");
    if (!taskName || !taskComm || !taskTime || !taskIdCont)
        return;
    taskName.textContent = task.title;
    taskComm.textContent = task.description;
    taskTime.textContent = task.time;
    taskIdCont.id = String(task.id);
    container.append(clone);
}
//# sourceMappingURL=renderTask.js.map