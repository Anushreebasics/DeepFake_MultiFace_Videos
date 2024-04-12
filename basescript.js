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
  document.getElementById('upload-video-btn').addEventListener('click', function() {
    document.getElementById('video-input').click();
  });

  document.getElementById('video-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      document.getElementById('video').src = event.target.result;
      console.log('Video Data:', event.target.result);
    };

    reader.readAsDataURL(file);
  });