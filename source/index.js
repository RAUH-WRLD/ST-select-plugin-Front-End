import {activateSTselectPlugin, STselectPlugin} from "./ST-select-plugin/ST-select";
import "./ST-select-plugin-styles/ST-select-style.scss";
activateSTselectPlugin("#ST-select", {
    placeholder: "Test-ST",
    textAreas: [
        {id: "1", text: "Test-ST-1"},
        {id: "2", text: "Test-ST-2"},
        {id: "3", text: "Test-ST-3"},
        {id: "4", text: "Test-ST-4"},
        {id: "5", text: "Test-ST-5"},
        {id: "6", text: "Test-ST-6"},
        {id: "7", text: "Test-ST-7"},
        {id: "8", text: "Test-ST-8"},
        {id: "9", text: "Test-ST-9"},
        {id: "10", text: "Test-ST-10"}
    ]
});