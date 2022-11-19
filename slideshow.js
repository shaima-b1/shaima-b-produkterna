var imgArray = [
    './slideshowpic1.jpg',
    './slideshowpic2.jpg',
    './slideshowpic3.jpg',
    './slideshowpic4.jpg',
    './slideshowpic5.jpg',
    './slideshowpic6.jpg',
    './slideshowpic7.jpg',
    './slideshowpic8.jpg',
];
var curIndex = 0;
var imgDuration = 1000;

function slideShow() {
    document.getElementById('image1').src = imgArray[curIndex];
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout("slideShow()", imgDuration);
}
slideShow();
