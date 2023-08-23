const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#poem-title').value.trim();
  const description = document.querySelector('#poem-body').value.trim();

  if (name && description) {
    const response = await fetch(`/api/poetry`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create poem');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/poetry/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete poem');
    }
  }
};

document
  .querySelector('.new-poem-form')
  .addEventListener('submit', newFormHandler);

let poemList;
poemList = document.querySelector('.poems');
console.log(poemList);
if (poemList) {
  poemList.addEventListener('click', delButtonHandler);
}
