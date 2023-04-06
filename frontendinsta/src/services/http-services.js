const BaseUrl=process.env.Node_Api;

export function getAllPost(){

    return(
        fetch(`${BaseUrl}/post`)
        .then(res=>res.json())
        .catch(err=>alert(err.message))
    )
}
export function addNewPost(post){
    return(
        fetch(`${BaseUrl}/post`,{
            method:"POST",
            body: post,
        }).then(res=>res.json())
        .catch(err=>alert(err.message))
    )
}