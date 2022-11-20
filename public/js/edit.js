const updateFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (title && content) {
      console.log('clicked')
      if (event.target.hasAttribute('data-id')){
        const id = event.target.getAttribute('data-id')
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('ok')
        document.location.replace('/');
      } else {
        alert('Failed to update project');
      }
    }
}};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete project');
    }
  }
};



  document
  .querySelector('#update-button')
  .addEventListener('click', updateFormHandler);

  document
  .querySelector('#delete-button')
  .addEventListener('click', delButtonHandler);