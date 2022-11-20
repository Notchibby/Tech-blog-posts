const newFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment').value.trim();
  
    if (content) {
      if (event.target.hasAttribute('data-id')){
        const id = event.target.getAttribute('data-id')
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({content, comment_id: id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/blog/${id}`);
      } else {
        alert('Failed to create project');
      }
    }
}};

  document
  .querySelector('.button')
  .addEventListener('click', newFormHandler);
