const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainSection = document.getElementById("main-section")

for(let i = 0; i < posts.length; i++) {
    const currentPost = posts[i]
    const newSection = document.createElement("div")
    newSection.setAttribute("id","out-container")
    newSection.innerHTML = `
        <div class="title">
            <img class="avatar" src="${currentPost.avatar}">
            <div class="info">
                <p><b>${currentPost.name}</b></p>
                <p>${currentPost.location}</p>
            </div>
        </div>
        <img class="post" src="${currentPost.post}">
        <div class="icon-container">
            <img id="kudo" src="/images/icon-heart.png">
            <img src="/images/icon-comment.png">
            <img src="/images/icon-dm.png">
        </div>
        <div class="comment">
            <p><b>${currentPost.likes} likes.</b></p>
            <p><b>${currentPost.username}</b> ${currentPost.comment}</p>
        </div>
    `
    mainSection.append(newSection)
}



