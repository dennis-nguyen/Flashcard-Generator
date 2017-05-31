$('button').on('click',function(){
    $.get("http://localhost:3000/data/", function(data, status){
        // alert("Data: " + data + "\nStatus: " + status);
		console.log(data);
    });
});