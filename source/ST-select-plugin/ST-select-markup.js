export function STselectMarkup(placeholder, textAreas) {
    let defaultPlaceholder = placeholder ?? "--------";
    let STselectTextItems = textAreas.map(textItem => {
        return `
        <div class="ST-select__dropdown-item">
            <p class="ST-select__text-item" id="${textItem.id}">${textItem.text}</p>
        </div>
        `;
    });
    return `<div class="ST-select__input">
    <div class="ST-select__input-item">
        <div class="ST-select__placeholder">
                <p class="ST-placeholder">${defaultPlaceholder}</p>
            </div>
            <div class"arrow">
                <i id="arrow" class="fa fa-arrow-down" aria-hidden="true"></i>
            </div>
        </div>
    </div>
    <div class="ST-select__dropdown">
        ${STselectTextItems.join("")}
    </div>
</div>`;
};