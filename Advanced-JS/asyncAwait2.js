function fetchPostData()
{
    return new Promise((resolve) =>
    {
        setTimeout(() => {
            resolve("Post Data fetched")
        }, 2000);
    })
}

function fetchCommentData()
{
    return new Promise((resolve)=> {
       setTimeout(() => {
        resolve("Comment Data fetched successfully")
       }, 3000);
    });

}

async function getBlogData()
{
    try {
        console.log("fetching blog data");
        // const blogData = await fetchPostData()
        // const commentData = await fetchCommentData()
        const [blogData,commentData] = await Promise.all([fetchPostData(),
            fetchCommentData()
        ])
        console.log(blogData);
        console.log(commentData);
        console.log("Fetch Complete");
    } catch (error) {
        console.error("Error fetching block data");
    }
}

getBlogData();