import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import FormValidator from "../components/formValidator.js";
import Section from "../components/SectionClass.js";
import PopupWithForm from "../components/PopupWithForm.js";
export const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopEl.querySelector(".popup__form");
export const addTodoCloseBtn = addTodoPopEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

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

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();

  return todoElement;
};

// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;

  
//   const date = new Date(dateInput);
//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const id = uuidv4();
//   const values = { name, date, id };
//   const todo = generateTodo(values);
//   //todosList.append(todo);//use addItem method instead
//   section.addItem(todo);
//   addTodoPopup.close();
// });

// initialTodos.forEach((item) => {
//   const todo = generateTodo(item);
//   todosList.append(todo); //use addItem method instead
// });

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator._enableValidation();
section.renderItems();
