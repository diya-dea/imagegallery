
const imageList = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];


const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');


imageList.forEach(filename => {
  const newImage = document.createElement('img');
  newImage.src = `images/${filename}`;
  newImage.alt = `Thumbnail of ${filename}`;
  thumbBar.appendChild(newImage);

 
  newImage.addEventListener('click', () => {
    displayedImg.src = newImage.src;
    displayedImg.alt = newImage.alt;
  });
});
