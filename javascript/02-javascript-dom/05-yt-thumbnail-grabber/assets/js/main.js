const videoHolderEl = document.getElementById("videoHolder");
const ytFormEl = document.getElementById("ytForm");
const ytThumbnailEl = document.getElementById("ytThumbnail");

ytFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const storedVideoUrl = videoHolderEl.value.split("v=");
    const videoId = storedVideoUrl[1];
    const forThumbs = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    ytThumbnailEl.setAttribute("src", forThumbs);
})

// https://www.youtube.com/watch?v=8EmqySaDWbU&list=PLS9eqZB5zozzxwoyYfDm17LIuCWYfGlVj

// YouTube Link: https://www.youtube.com/watch?v=Fh9YgIT1mPc
// https://i.ytimg.com/vi/Fh9YgIT1mPc/maxresdefault.jpg
// https://i.ytimg.com/vi/8EmqySaDWbU/maxresdefault.jpg

// pasting the Youtube URL to the input placeholder: 
// Basically like this. https://www.youtube.com/watch?v=Fh9YgIT1mPc
// Now I need to remove or separate the video IDs after "v=" Fh9YgIT1mPc
// after that we've to conacatenate them with the https://i.ytimg.com/vi/Fh9YgIT1mPc/maxresdefault.jpg

// const videoUrl = "https://www.youtube.com/watch?v=Fh9YgIT1mPc".split("v=");
// const videoId = videoUrl[1];
// Successfully removed got the video ID separately
// const thumbnails = "https://i.ytimg.com/vi/Fh9YgIT1mPc/maxresdefault.jpg"
// const newReplace = thumbnails.replace("Fh9YgIT1mPc", videoUrl[1]);
// console.log(newReplace);
// Successfully concatenate with the Thumbnail



