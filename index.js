//this file didn't come with the template, we created it inside the template's folder to
//call an api we created and do other things than the template. 
//now inside the index.html of the template, at the end, we link this js file to it so we can use this API

fetch('http://localhost:1234/services')
  .then(response => response.json())
  .then(json => {
    console.log(json)   //for debugging if we got an error, ispect -> console
    var allServices = document.getElementById('AllServices');    //we called it AllServices in the template html file
    //we got this from the template html file, we erased it over there
    //this is the services part of the web application, we want to change it to our services which are present in an excel file

    var content =   `<div>
                    <div class="icon"><i class="bi bi-briefcase"></i></div>
                    <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                    <p class="description">Voluptatum</p>
                    </div>`

    for (let i = 0; i < json.length; i++) {       //the api gives back json data from the excel sheet
      //json.length is the number of services
        var specificContent = content.replace("Lorem Ipsum",json[i].title)  
        specificContent = specificContent.replace("Voluptatum",json[i].description)
        var singleService = document.createElement('div');        
        singleService.className="col-lg-4 col-md-6 icon-box";            
        singleService.innerHTML = specificContent;
        allServices.appendChild(singleService);
    }
    
  })


  