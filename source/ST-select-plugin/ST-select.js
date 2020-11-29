import {STselectMarkup, changePlaceholder} from "./ST-select-markup";
export function activateSTselectPlugin(selector, data) {
let getSTselectMarkup = (placeholder, textAreas) => {
    return STselectMarkup(placeholder, textAreas);
};
class STselectPlugin {
    constructor(selector, data) {
        this.STselect = document.querySelector(selector);
        this.STselectedID = null;
        this.data = data;
        this.loadSTselectMarkup();
        this.action();
    };
    loadSTselectMarkup() {
        let {placeholder, textAreas} = this.data;
        return this.STselect.innerHTML = getSTselectMarkup(placeholder, textAreas);
    };
    action() {
        this.arrow = this.STselect.querySelector("#arrow");
        this.STplaceholder = this.STselect.querySelector(".ST-placeholder");
        this.STselect.addEventListener("click", () => this.switch());
        let STselectTextItems = document.querySelectorAll(".ST-select__text-item");
        STselectTextItems.forEach(item => {
            return item.addEventListener("click", () => {
                return this.select(item.id);
            });
        });
    };
    select(id) {
        this.STselectedID = id;
        return this.STplaceholder.textContent = this.currentST.text;
    };
    get opened() {
        return this.STselect.classList.contains("ST-opened");
    };
    get currentST() {
        let {textAreas} = this.data;
        return textAreas.find(item => item.id === this.STselectedID);
    };
    switch() {
        return this.opened ? this.close() : this.open();
    };
    open() {
        this.arrow.classList.remove("fa-arrow-down");
        this.arrow.classList.add("fa-arrow-up");
        this.STselect.classList.add("ST-opened");
    };
    close() {
            this.arrow.classList.remove("fa-arrow-up");
            this.arrow.classList.add("fa-arrow-down");
            this.STselect.classList.remove("ST-opened");
        };
    };
    let STselect = new STselectPlugin(selector, data);
};
