document.getElementById("chat_gpt_detect_form").addEventListener("submit", function(e){
    e.preventDefault();

    let rdiv=document.getElementById("gpt_results");
    rdiv.style.display="none";
    document.getElementById("loading").style.display="block";
    let content=document.getElementById("chat_gpt_content").value;
    fetch('https://api.chatgptdetectorapi.com/detect_gpt.php', {
        method: 'POST',
        body:JSON.stringify({content:content})
    }).then(function (response) {
        if (response.ok) {
          return response.json();
        }
    }).then(function (data) {
        showResults(data);
    }).catch(function (error) {
        //console.warn('Something went wrong.', error);
    });
});

function showResults(d){

    document.getElementById("loading").style.display="none";
    let rdiv=document.getElementById("gpt_results");
    rdiv.style.display="block";
    let r="This text scored "+d.score+" out of 10 for human generated. 10 means it's definitely created by human and 0 means it's definitely created by ChatGPT. Anything under 5 means it is likely ChatGPT generated content.";
    rdiv.textContent=r;

}
