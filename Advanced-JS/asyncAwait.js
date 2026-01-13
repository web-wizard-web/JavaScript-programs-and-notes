function fetchUserData()
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({name:"chaicode" , url:"https://chaicode.com"})
        }, 3000);
    })
}

async function getUserData()
{
    try {
        console.log("Fetching user data .......")
        const userData = await fetchUserData();
        console.log("User Data fetched successfully");
        console.log("user Data : " ,userData);
        
        
    } catch (error) {
        console.log("Error fetching th data" ,error);
        
        
    }
}
getUserData();