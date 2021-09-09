function myFunction() {
    let read = document.getElementById("read");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
  
    if (read.style.display === "none") {
      read.style.display = "inline";
      btnText.innerHTML = "Read more";
      btnText.style.backgroundColor = "green";
      moreText.style.display = "none";
    } else {
      read.style.display = "none";
      btnText.innerHTML = "Read less";
      btnText.style.backgroundColor = "red";
      moreText.style.display = "inline";
    }
  }