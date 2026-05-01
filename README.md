# Личный проект To-Do list

Стек: HTML, CSS, TypeScript, Vite

Структура проекта:

Важные файлы:


# Веб приложение ToDo list
ToDo list 

## Архитектура приложения

### Базовый код

## Данные
### Интерфейсы

#### ITask
Описывает задачу.

- id: number - уникальный идентификатор задачи.
- title: string - заголовок задачи.
- description: string - комментарий к задаче, при наличии.
- date: string - дата выполнения задачи.
- time: string - время выполнения задачи.
- completed: boolean - статус задачи.

#### IMonth
Описывает месяц.

- year: number - год определённого месяца.
- month: number - номер месяца, при нумерации с нуля.
- name: string - название месяца.
- daysCount: number - колличество дней в месяце.
- firstDayWeekday: number - номер дня недели, с которого начинается месяц, при нумерации с нуля.

### Типы данных

#### Типы
TWeek - объект для хранения текущей недели, а именно какие числа месяца в текущей неделе.

#### Task
Назначение: хранит данные конкретной задачи.

Поля:
- id: number - уникальный идентификатор задачи.
- title: string - заголовок задачи.
- description: string - комментарий к задаче, при наличии.
- date: string - дата выполнения задачи.
- time: string - время выполнения задачи.
- completed: boolean - статус задачи.

Методы:
- getTaskData(): ITask - получение всех данных задачи.
- getTaskCompleted(): boolean - получение статуса задачи.
- getTaskId(): number - получение ID задачи.
- setCompleted(completed: boolean): void - изменение статуса задачи.
- editTaskData(title: string, description: string, date: string, time: string): void - изменение параметров заадачи.

#### TaskManager
Назначение: хранит данные всех задач.

Поля:
- tasksList: ITask[] - список задач.

Методы:
- loadFromLocal(): ITask[] - получение списка задач из localStorage.
- getAllTasks(): ITask[] - получение всех задач из списка.
- getTaskById(id: number): ITask - получение задачи по ID.
- addTask(task: ITask): void - добавление задачи в список.
- saveAllTasks(): void - сохранение списка задач в localStorge.
- removeTask(id: number): void - удаление задачи по ID.

#### Calendar
Назначение: хранит данные о календаре и генерирует месяцы для рендера.

Поля:
- selectedDate: Date - выбранная дата. 

Методы:
- getCurrentDate(): Date - получение текущей даты.
- setCurrentData(date: Date): void - выбор даты.
- getMonthData(year: number, month: number): IMonth - генерация месяца.
- getMonthsRange(): IMonth[] - создание массива месяцев для рендера.
- getWeek(date: Date): TWeek - получение текущей недели.