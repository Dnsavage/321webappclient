function getBooks(){
    //const allBooksApiUrl = "https://localhost:5001/api/books";
    const allBooksApiUrl = "https://webappapi321.herokuapp.com/api/books";

    //Javascript doesn't wait for a return value to execute the next method
    //use "then" to wait until it returns
    fetch(allBooksApiUrl).then(function(response){
        console.log(response);//effectively a writeline
        return response.json();//turns object into json
    }).then(function(json){//passes the array of json objects into the next function
        let html = "<ul>";
        json.forEach((book)=>{
            html += "<li>" + book.title + " written by " + book.author + "</li>";
        })
        html += "</ul>";
        document.getElementById("books").innerHTML = html;
    }).catch(function(error){
        console.log(error);//Log any caught errors
    });
}

function postBook(){
    //const postBookApiUrl = "https://localhost:5001/api/books";
    const allBooksApiUrl = "https://webappapi321.herokuapp.com/api/books";
    const bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value;

    fetch(postBookApiUrl, {
        method: "post",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            title: bookTitle,
            author: bookAuthor
        })
    }).then((response)=>{
        console.log(response);
        getBooks();
    })
}