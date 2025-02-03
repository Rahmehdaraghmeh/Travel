import { formHandler } from "./js/formHandler";
import { updateUi } from "./js/updateUi";
import { geonamesApi } from "./js/callGeonamesApi";
import { pixabayApi } from "./js/callPixabayApi";
import { weatherbitApi } from "./js/callWeatherbitApi";

import "./styles/style.scss";
 
//تعريف `Client` كمكتبة شاملة
const Client = { formHandler, updateUi, geonamesApi, pixabayApi, weatherbitApi };

document.getElementById("generate").addEventListener("click", Client.formHandler);

export { Client };
