// //1

// let timeoutId;

// document.addEventListener('mousemove', (event) => {
//   clearTimeout(timeoutId);

//   timeoutId = setTimeout(() => {
//     console.log(`Mouse coordinates: X=${event.clientX}, Y=${event.clientY}`);
//   }, 300);
// });

// //2
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((data) => {
//     const filteredData = data.map((user) => ({
//       id: user.id,
//       name: user.name,
//       username: user.username,
//       email: user.email,
//     }));
//     console.log(filteredData);
//   })
//   .catch((error) => console.error('Error fetching data:', error));

//3
let timeoutId;

document.getElementById('searchInput').addEventListener('input', (event) => {
  clearTimeout(timeoutId);

  const query = event.target.value;
  timeoutId = setTimeout(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        data.products.forEach((product) => {
          const item = document.createElement('div');
          item.innerText = product.title;
          resultsDiv.appendChild(item);
        });
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, 300);
});
