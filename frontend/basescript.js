document.addEventListener('DOMContentLoaded', function(event) {

  document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
  document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';

  document.getElementById('flip-card-btn-turn-to-back').onclick = function() {
  document.getElementById('flip-card').classList.toggle('do-flip');
  };

  document.getElementById('flip-card-btn-turn-to-front').onclick = function() {
  document.getElementById('flip-card').classList.toggle('do-flip');
  };

});



document.addEventListener("DOMContentLoaded", function () {
  const videoUploadBtn = document.getElementById("video-upload-btn");
  const imageUploadBtn = document.getElementById("image-upload-btn");
  const videoUploadInput = document.getElementById("video-upload");
  const imageUploadInput = document.getElementById("image-upload");
  const outputDiv = document.getElementById("output");
  

  

  if (imageUploadBtn && imageUploadInput && outputDiv) {

    // videoUploadBtn.addEventListener("click", function () {
    //   videoUploadInput.click();
    // });

    imageUploadBtn.addEventListener("click", function () {
      imageUploadInput.click();
    });

    // Add event listener for video upload input
    // videoUploadInput.addEventListener("change", async function () {
      // try {
    //     const file = videoUploadInput.files[0];

    //     const formData = new FormData();
    //     formData.append("video", file);

    //     const response = await fetch("http://127.0.0.1:5000/summary", {
    //       method: "POST",
    //       body: formData,
    //     });

    //     const data = await response.json();
    //     outputDiv.innerText = data.message;
    //   } catch (error) {
    //     console.error("Error processing video:", error);
    //     outputDiv.innerText = "Error processing video.";
    //   }
    // });

    // Add event listener for image upload input
    imageUploadInput.addEventListener("change", async function () {
      try {
        const file = imageUploadInput.files[0];

        const formData = new FormData();
        formData.append("image", file);

        const response = await fetch("http://127.0.0.1:5000/summary", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        outputDiv.innerText = data.message;
      } catch (error) {
        console.error("Error processing image:", error);
        outputDiv.innerText = "Error processing image.";
      }
    });

    // Add event listener for flip to front button
  }
  // } else {
  //   console.error("One or more elements not found.");
  
});
