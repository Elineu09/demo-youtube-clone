let videoGridElement = document.getElementsByClassName("video-grid")[0];

function loadData() {
  fetch('../data/videoInfo.json')
  .then(response => {
    if (!response.ok){
      throw new Error('Erro ao carregar o ficheiro JSON')
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
    renderVideoPrev(data);
  })
  .catch(error => console.log(error('Erro: ', error)));
}

function renderVideoPrev(data) {

  for (let i = 0; i < data['video-prev'].length; i++){
  videoGridElement.innerHTML +=
  `<div class="video-prev">
        <div class="thumbnail-row">
          <img src=${data['video-prev'][i].img.thumbnail} class="thumbnail"/>
        </div>
        <div class="video-info-grid">
          <div class="channel-picture">
            <img
              src=${data['video-prev'][i].img.profile}
              class="profile-picture"
            />
          </div>
          <div class="video-info">
            <p class="video-title">
              ${data['video-prev'][i].title}
            </p>
            <p class="video-author">${data['video-prev'][i].author}</p>
            <p class="video-stats">${data['video-prev'][i].stats}</p>
          </div>
        </div>
</div>`;
  }
}

loadData();
