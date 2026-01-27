class Section{
    constructor({items, renderer, containerSelector}){
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    renderItems(){
        this._items.forEach(item => {
            //call renderer and pass the item as an argument
        });
    }
    addItem(element){
        //Add element to the container
    }
}
export default Section;