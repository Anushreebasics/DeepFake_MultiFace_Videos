document.addEventListener('DOMContentLoaded', () => {
  const uploadButton = document.getElementById('uploadButton');
  const imageInput = document.getElementById('imageInput');
  const resultDiv = document.getElementById('result');

  uploadButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const file = imageInput.files[0];
      if (!file) {
          alert('Please select an image file.');
          return;
      }

      const formData = new FormData();
      formData.append('image', file);

      try {
          const response = await fetch("http://127.0.0.1:5000/summary", {
              method: 'POST',
              body: formData
          });

          if (!response.ok) {
              throw new Error('Network response was not ok.');
          }

          const data = await response.json();
          resultDiv.innerHTML = `<p>Result: ${data.message}</p>`;
      } catch (error) {
          console.error('Error:', error);
          resultDiv.innerHTML = '<p>An error occurred. Please try again later.</p>';
      }
  });
});
