import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
<<<<<<< HEAD
import FormValidator from "../components/FormValidator.js";
=======
import FormValidator from "../components/formValidator.js";
import Section from "../components/SectionClass.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";
>>>>>>> development
export const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopEl.querySelector(".popup__form");
export const addTodoCloseBtn = addTodoPopEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const  todoCounter = new TodoCounter(initialTodos , ".counter__text");

const addTodoPopup = new PopupWithForm({popupSelector:"#add-todo-popup",
  handleFormSubmit:(inputValues)=>{
    const name = inputValues.name;
    const dateInput = inputValues.date;
    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    const id = uuidv4();
    const values = { name, date, id };
    const todo = generateTodo(values);
    section.addItem(todo);
    addTodoPopup.close();
      todoCounter.updateTotal(true)
  }
});
addTodoPopup.setEventListeners();
const section = new Section({
  items:initialTodos, 
  renderer:(item) =>{
    return generateTodo(item);
  }, 
  containerSelector: ".todos__list"});

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});
function handleCheck(completed){
  todoCounter.updateCompleted(completed);
}
function handleDelete(completed){
  todoCounter.updateTotal(false);
  if(completed){
    todoCounter.updateCompleted(false);
  }

}
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();

  return todoElement;
};

<<<<<<< HEAD
addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  const todo = generateTodo(values);
  todosList.append(todo);
  closeModal(addTodoPopup);
  newTodoValidator.resetValidation();
});

export const renderTodo = (item) => {
  const el = generateTodo(item);
  todosList.append(el);
};
initialTodos.forEach((item) => {
  renderTodo(item);
});
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
=======
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator._enableValidation();
section.renderItems();
>>>>>>> development
