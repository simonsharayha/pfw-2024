// select empty div and assign to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put an h1 inside of it
// create a new element 
const heading = document.createElement('h1');
heading.innerHTML='Llamas are Very Vocal';
heading.style.cursor='pointer';
heading.addEventListener('click',handelHeadingClick);
myEmptyDiv.appendChild(heading);

// Event listener function to change background color when headline is clicked
function handelHeadingClick () {
    document.body.style.backgroundColor='magenta';
 }
 

// Create a new h2 headline element
const heading2 = document.createElement('h2');
heading2.textContent = 'Llamas are Used as Therapy Animals';
heading2.style.cursor = 'pointer'; // Set cursor to pointer
heading2.addEventListener('click', handleHeading2Click); // Add event listener
myEmptyDiv.appendChild(heading2); // Append the headline to myEmptyDiv

// Event listener function to change background color when headline is clicked
function handleHeading2Click() {
    document.body.style.backgroundColor='lightblue';
}

// Create a new h3 headline element
const heading3 = document.createElement('h3');
heading3.textContent = 'There is a God Believed to be a Llama';
heading3.style.cursor = 'pointer'; // Set cursor to pointer
heading3.addEventListener('click', handleHeading3Click); // Add event listener
myEmptyDiv.appendChild(heading3); // Append the headline to myEmptyDiv

// Event listener function to change background color when headline is clicked
function handleHeading3Click() {
    document.body.style.backgroundColor='red';
}

// Create a new h4 headline element
const heading4 = document.createElement('h4');
heading4.textContent = 'Llamas Make Friendly and Easy-to-Maintain Pets';
heading4.style.cursor = 'pointer'; // Set cursor to pointer
heading4.addEventListener('click', handleHeading4Click); // Add event listener
myEmptyDiv.appendChild(heading4); // Append the headline to myEmptyDiv

// Event listener function to change background color when headline is clicked
function handleHeading4Click() {
    document.body.style.backgroundColor='orange';
}

// Create a new h5 headline element
const heading5 = document.createElement('h5');
heading5.textContent = 'Llamas Can be Used as Pack Animals';
heading5.style.cursor = 'pointer'; // Set cursor to pointer
heading5.addEventListener('click', handleHeading5Click); // Add event listener
myEmptyDiv.appendChild(heading5); // Append the headline to myEmptyDiv

// Event listener function to change background color when headline is clicked
function handleHeading5Click() {
    document.body.style.backgroundColor='purple';
}