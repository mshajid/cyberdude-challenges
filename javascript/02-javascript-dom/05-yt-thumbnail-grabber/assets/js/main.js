const videoHolderEl = document.getElementById("videoHolder");
const ytFormEl = document.getElementById("ytForm");
const ytThumbnailEl = document.getElementById("ytThumbnail");

ytFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    // const storedVideoUrl = videoHolderEl.value.split("&");
    // const slicedVideoUrl = storedVideoUrl[0].split("v=");
    // const videoId = slicedVideoUrl[1];
    // const forThumbs = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    // ytThumbnailEl.setAttribute("src", forThumbs);   
    const storedVideoUrl = videoHolderEl.value
    const amperSand = storedVideoUrl.indexOf("&");
    const vUrl = storedVideoUrl.indexOf("v=")

    if(amperSand){
        const amperSandUrl = storedVideoUrl.split("&");
        const amperSandFinalUrl = amperSandUrl[0].split("v=")[1]
        const forThumbs = `https://i.ytimg.com/vi/${amperSandFinalUrl}/maxresdefault.jpg`
        ytThumbnailEl.setAttribute("src", forThumbs);
    }

    // if(vUrl) {
    //     const vYouTubeUrl = storedVideoUrl.split("v=")[1];
    //     const forVThumbs = `https://i.ytimg.com/vi/${vYouTubeUrl}/maxresdefault.jpg`
    //     ytThumbnailEl.setAttribute("src", forVThumbs);
    // }
})




//* My Logic Storyline


// Prototype URLs
// https://www.youtube.com/watch?v=749DIRUHhNY&list=PL28dZNlHX63kjYvDr560F-0bW-dh9xQ62&index=17
// https://www.youtube.com/watch?v=Fh9YgIT1mPc
// https://www.youtube.com/watch?v=7wYKHZe9E1Q
// https://www.youtube.com/watch?v=_d-8H-8LjcU&list=RD_d-8H-8LjcU&start_radio=1&rv=749DIRUHhNY



// Two types URLS 
// One Type = Single "v=" Second Type = "&"

// if single v= then needs to output then else if remove

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



