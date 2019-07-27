/*
Game Plan
  build things out slowly
  start with rendering the list
  add delete functionality
  add form
  add ability to add a customer
  add error handling
  click to see functionality
Winning
*/

let customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
  { id: 4, name: 'shep', email: 'shep@gmail.com'},
 ];

const employeeList = document.querySelector('#employeeList');


const render = () => {
  const html = customers.map(customer => {

  return `
    <li> ${customer.name} (${customer.email})
    <button class='destroy'>Destroy</button>
    </li>

    `;
  }).join('');
  employeeList.innerHTML = html;
  };
  render();

  employeeList.addEventListener ('click', (customer) => {
    if (customer.target.tagName === 'LI') {
      console.log(customer);
    }
  });
