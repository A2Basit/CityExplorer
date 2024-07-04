async function getData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      const cityInformation = data.map(user => ({
        name: user.name,
        city: user.address.city
      }));
      return cityInformation;
    }
     catch (error) {
      console.error(error.message);
    }
  }
export { getData }