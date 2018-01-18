var button = document.getElementById("buttonIdServer");
button.addEventListener('click', clickHandler);

  function clickHandler(element) {
      
      console.log("openCamera Called");
      alert("on click picture at server");

    var options = {quality: 50,destinationType: Camera.DestinationType.DATA_URL,sourceType:Camera.PictureSourceType.Camera}
        

        navigator.camera.getPicture(function cameraSuccess(imageUrl){
            console.log("imageurl" + imageUrl);
        }, function cameraError(error){
            console.log("error" + error);
        },options);
  }

  function main() {
      // Initialization work goes here.
  }