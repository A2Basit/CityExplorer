const displaycityitems = ({name,city}) =>{
    return `<li>${name} lives in ${city}</li>`
}

const render = (cityInformation) =>{
    const citylist = document.getElementById('city-list');
    citylist.innerHTML = cityInformation.map(displaycityitems).join('');
};

export {render}
