
    var slideshowNode = document.getElementById("slideshow");
    var linkshowNode = document.getElementById("linkshow");
    var startNode = document.getElementById("start");
    var stopNode = document.getElementById("stop");
    var prevNode = document.getElementById("prev");
    var nextNode = document.getElementById("next");
  
    var arrayGambar = ["gambar0.jpg","gambar1.jpg",
                       "gambar2.jpg","gambar3.jpg","gambar4.jpg"];
    var path = "img/";

    for (let i = 0; i < arrayGambar.length; i++) {
        arrayGambar[i] = path+arrayGambar[i];
        console.log(arrayGambar[i])
        
    }
    var arrayLink = ["https://en.wikipedia.org/wiki/The_Starry_Night",
                     "https://en.wikipedia.org/wiki/The_Last_Supper_(Leonardo)",
                     "https://en.wikipedia.org/wiki/The_Persistence_of_Memory",
                     "https://en.wikipedia.org/wiki/Guernica_(Picasso)",
                     "https://en.wikipedia.org/wiki/The_School_of_Athens"];
        
    var counter = 0;
    var intervalID = 0;
    
    function nextSlideshow(){
      counter++;
      if (counter === 5) {
        counter = 0;
      }
      slideshowNode.setAttribute("src",arrayGambar[counter]);
      linkshowNode.setAttribute("href",arrayLink[counter]);
    }
    
    function prevSlideshow(){
      counter--;
      if (counter === -1) {
        counter = 4;
      }
      slideshowNode.setAttribute("src",arrayGambar[counter]);
      linkshowNode.setAttribute("href",arrayLink[counter]);
    }
    
    function startSlideshow(){
      if (intervalID === 0) {
        intervalID = setInterval(nextSlideshow,2000);
      }
    }
    
    function stopSlideshow(){
      clearInterval(intervalID);
      intervalID = 0;
    }    
    
    prevNode.addEventListener("click", prevSlideshow);
    nextNode.addEventListener("click", nextSlideshow);
    startNode.addEventListener("click", startSlideshow);
    stopNode.addEventListener("click", stopSlideshow);   