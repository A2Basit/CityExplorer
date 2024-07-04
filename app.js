import { getData } from "./api.js";
import { render } from "./ui.js";

document.addEventListener('DOMContentLoaded', async () => {
    const userData = await getData();
    render(userData);
    const searchInput = document.getElementById('city-input');
    searchInput.addEventListener('input', () => {
        const filteredData = userData.filter(user => user.city.toLowerCase().includes(searchInput.value.toLowerCase()));
        render(filteredData);
    });
});