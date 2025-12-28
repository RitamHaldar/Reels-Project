const reelsData = [
  {
    ismuted: false,
    channelName: "TechByte",
    profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    title: "Top 7 VS Code Extensions 🚀",
    video: "./reels/vscode.mp4",
    likes: 12450,
    comments: 320,
    shares: 180,
    isFollowed: false,
    isLiked: false
  },
  {
    ismuted: false,
    channelName: "FoodieVibes",
    profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    title: "Street Food You Must Try 😋",
    video: "./reels/Food.mp4",
    likes: 9820,
    comments: 210,
    shares: 145,
    isFollowed: true,
    isLiked: true
  },
  {
    ismuted: false,
    channelName: "TravelTales",
    profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    title: "Hidden Places in Kerala 🌴",
    video: "./reels/kerala.mp4",
    likes: 15400,
    comments: 410,
    shares: 260,
    isFollowed: false,
    isLiked: false
  },
  {
    ismuted: false,
    channelName: "CodeMaster",
    profilePic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    title: "JavaScript Tips You Didn’t Know ⚡",
    video: "./reels/javascript.mp4",
    likes: 18600,
    comments: 520,
    shares: 340,
    isFollowed: true,
    isLiked: false
  },
  {
    ismuted: false,
    channelName: "NatureSoul",
    profilePic: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200",
    title: "Relaxing Nature Sounds 🌿",
    video: "./reels/nature.mp4",
    likes: 26500,
    comments: 720,
    shares: 610,
    isFollowed: true,
    isLiked: true
  }
];

let mainwin = document.querySelector(".reel-main")
let addData = () => {
  let sum = ''
  reelsData.forEach((rel, idx) => {
    sum += `<div class="reel">
                    <button class="mute" id=${idx}> ${rel.ismuted ? `<i class="fa-solid fa-volume-xmark"></i>` : `<i class="fa-solid fa-volume-high"></i>`}</button>
                    <video autoplay id=${idx} ${rel.ismuted ? "muted" : ""}  loop playsinline src=${rel.video}></video>
                    <div class="bottom">
                        <div class="user">
                            <img src=${rel.profilePic}
                                alt="">
                            <h5>${rel.channelName}</h5>
                            <button class="follow" id=${idx}>${rel.isFollowed ? "Followed" : "Follow"}</button>
                        </div>
                        <h4>${rel.title}</h4>
                    </div>
                    <div class="right">
                        <div class="like" id=${idx}>
                            ${rel.isLiked ? `<i class="fa-solid fa-heart  red"></i>` : `<i class="fa-regular fa-heart "></i>`}
                            <p>${rel.likes}</p>
                        </div>
                        <div class="comment">
                            <i class="fa-regular fa-comment"></i>
                            <p>${rel.comments}</p>
                        </div>
                        <div class="share">
                            <i class="fa-regular fa-share-from-square"></i>
                            <p>${rel.shares}</p>
                        </div>
                        <div class="more">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                            <p>more</p>
                        </div>
                    </div>
                </div>`
  })
  mainwin.innerHTML = sum;
};
function observeVideos() {
  document.querySelectorAll("video").forEach(video => {
    observer.observe(video);
  });
}
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  },
  {
    threshold: 0.7
  }
);
addData();
observer.disconnect();
observeVideos();
let allbtn = document.querySelector(".reel-main")
allbtn.addEventListener("click", (ele) => {
  if (ele.target.className == "like") {
    if (!reelsData[ele.target.id].isLiked) {
      reelsData[ele.target.id].likes++;
      reelsData[ele.target.id].isLiked = true;
    }
    else {
      reelsData[ele.target.id].isLiked = false;
    }
  }
  if (ele.target.className == "follow") {
    if (!reelsData[ele.target.id].isFollowed) {
      reelsData[ele.target.id].isFollowed = true;
    }
    else {
      reelsData[ele.target.id].isFollowed = false;
    }
  }
  if (ele.target.className == "mute") {
    if (reelsData[ele.target.id].ismuted === false) {
      reelsData[ele.target.id].ismuted = true;
    } else {
      reelsData[ele.target.id].ismuted = false;
    }
  }
  
  addData();
  observer.disconnect();
  observeVideos();
})

