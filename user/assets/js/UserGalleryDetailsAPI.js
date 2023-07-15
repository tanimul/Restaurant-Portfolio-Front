async function getdata(){
    const gallery_res = await fetch("http://127.0.0.1:8000/gallery/images/")
    const gallery_data = await gallery_res.json();
    let gallery_uid = localStorage.getItem("current_data")
    let gallery_details_blog = document.getElementById('gallery_detail')
    gallery_data.forEach(element => {
          if(element.uid == gallery_uid){
            gallery_details_blog.innerHTML = `<div class="left">
            <div class="main_image" id="mainFrame">
                <img src="${element.image.original}" class="slide" width="100%">
            </div>
            <div class="option flex">
              <img src="./assets/images/event-1.jpg" onclick="img('./assets/images/event-1.jpg')">
              <img src="./assets/images/event-2.jpg" onclick="img('./assets/images/event-2.jpg')">
              <img src="./assets/images/event-3.jpg" onclick="img('./assets/images/event-3.jpg')">
              <img src="./assets/images/event-1.jpg" onclick="img('./assets/images/event-1.jpg')">
              <img src="./assets/images/event-2.jpg" onclick="img('./assets/images/event-2.jpg')">
              <img src="./assets/images/event-3.jpg" onclick="img('./assets/images/event-3.jpg')">
              <video src="./assets/images/video.mp4" onclick="img('./assets/images/video.mp4')" width="100px" height="100px"></video>
            </div>
          </div>
          <div class="right">
            <h3 class="card-title title-1">${element.gallery_info.title}</h3>
            <p class="details-gallery">${element.gallery_info.description}</p>
          </div>`
          }
    });

}
  
  
 