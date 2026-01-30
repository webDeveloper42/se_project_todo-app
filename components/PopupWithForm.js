import Popup from "./Popup.js";
class PopupWithForm extends Popup{
    constructor({popupSelector, handleFormSubmit}){
        super({popupSelector});
        this._popupForm = this._popupElement.querySelector(".popup__form");
        this._inputList = this._popupForm.querySelectorAll(".popup__input");
        this._handleFormSubmit =  handleFormSubmit;
    }
    _getInputValues(){
        const inputValues = {};
        this._inputList.forEach(input => {
            ///add a key value pair to the values object for each input 
            //the key is input.name
            //the value is input.value
            //need to use brackets notation not dot notation
            //one line of code
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }
    setEventListeners(){
        super.setEventListeners()
        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const inputValues = this._getInputValues(evt)
            // pass result of getinputvalues to submition handler
            this._handleFormSubmit(inputValues);
        })
    }
}
export default PopupWithForm;