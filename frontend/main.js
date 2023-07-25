window.addEventListerner('DOMConontentLoaded', (event) =>{
    getVisitCount();
})  

const fucntionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(funcitonApi).then(respone => {
        return respone.json
    }).then(respone =>{
        console.log("Website called fucntion API.");
        count = respone.count;
        document.getElementById("Ccounter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}