function fetchdata()
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        let success = true
        if(success)
        {
            resolve("Data fetched successfully")
        }
        else{
            reject("Error in fetching data")
        }
    },3000)
    })
}


// let response = fetchdata()
// console.log(response) // Promise { <pending> }
fetchdata()
  .then((data) => {console.log(data);
    return data.toLowerCase();
  })
 .catch((errors) => {console.log(errors)})
 .finally(() => {console.log("Executes when operation complete")})

