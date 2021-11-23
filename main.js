baseUrl = "https://msisdnhandler.jhorotek.com/api/";
var intervalCount;

function getToken() {
    let i = 0;
    console.log("Request get token initiated ...");

    setInterval(function () {
        i++;
        console.log(`Call count: ${i}`);
        var http = new XMLHttpRequest();
        // var url = 'http://118.67.215.144/api/getmsisdn?token=5505201712429';
        var url = `${baseUrl}getmsisdn?token=5505201712429`;
        var params = 'username=jhorotek&password=jh0r0@123';
        http.open('POST', url, true);

        let responseTxt;
        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function () {//Call a function when the state changes.
            if (http.readyState == 4 && http.status == 200) {
                // alert(http.responseText);
                responseTxt = http.responseText;
                console.log(responseTxt);
            }
        }
        http.send(params);

    }, 200);
}

function setMSISDN() {
    let i = 0;
    console.log("Request set MSISDN initiated ...");
    intervalCount = setInterval(function () {
        i++
        // console.log(8801924217100 + i);

        console.log(`Call count: ${i}`);
        // console.log(`http://118.67.215.144/api/gettoken?msisdn=${8801924217102+i}`);

        var http = new XMLHttpRequest();
        var url = `${baseUrl}gettoken?msisdn=${8801924217100 + i}`;
        var params = 'username=jhorotek&password=jh0r0@123';
        http.open('POST', url, true);

        let responseTxt;
        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function () {
            // if (http.readyState == 4 && http.status == 200) {
                // alert(http.responseText);
                responseTxt = http.responseText;
                // console.log(responseTxt);
                console.log(http.status);
            // }

        }
        http.send(params);
    }, 100);
}

function stopReq(){
    clearInterval(intervalCount);
}

function regCheck() {
    // var str = "8801400222222";
    var msisdn = `8801124217102`;
    console.log(msisdn.match('^8801+[3-9][0-9]+$'));
    console.log(msisdn.length);
    console.log(msisdn.length == 13);

    // var res = `8801200222222`.match('^8801+[3-9][0-9]+$');
    // `8801924217102`.match('^8801+[3-9][0-9]+$')!= null? console.log('ok') : console.log('no') 
    if (msisdn.match('^8801+[3-9][0-9]+$') == null || msisdn.length != 13)
        console.log('wrong number');
    else console.log('okay')
    // console.log(res)
}

// function myFunction() {
//     // const Http = new XMLHttpRequest();
//     // const url = 'https://jsonplaceholder.typicode.com/posts';
//     // Http.open("GET", url);
//     // Http.send();

//     // Http.onreadystatechange = (e) => {
//     //     console.log(Http.responseText)
//     // }

//     $(document).ready(function(){
//         const url= 'https://jsonplaceholder.typicode.com/posts';
//         $('.btn').click(function(){
//             $.ajax({
//                 url: url,
//                 type: "GET",
//                 success: function(result){
//                     console.log(result)
//                 },
//                 error: function(error){
//                     console.log(`Error ${error}`)
//                 }
//             })
//         }) 
//     })
// }