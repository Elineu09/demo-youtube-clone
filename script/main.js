let videoGridElement = document.getElementsByClassName("video-grid")[0];

function renderVideoPrev() {

  for (let i = 1; i <= 12; i++){
  videoGridElement.innerHTML += `<div class="video-prev">
        <div class="thumbnail-row">
          <img src="thumbnails/thumbnail-${i}.webp" class="thumbnail" />
        </div>
        <div class="video-info-grid">
          <div class="channel-picture">
            <img
              src="channel-pictures/channel-${i}.jpeg"
              class="profile-picture"
            />
          </div>
          <div class="video-info">
            <p class="video-title">
              Talking Tech and AI with Google CEO Sundar Pichai!
            </p>
            <p class="video-author">Marques Brownlee</p>
            <p class="video-stats">3.4M views &#183; 6 months ago</p>
          </div>
        </div>
</div>`;
  }
}

renderVideoPrev();
