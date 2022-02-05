function startClassifation(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/sr3UUYel9/model.json", modelReady);
}

function modelReady(){
    classifier.classify(getResults);
}

function getResults(error, results){
    if (error){
      console.error(error);  
    }
    else{
        console.log("get result");
        randomNumber_r = Math.floor(Math.random()*255) + 1;
        randomNumber_g = Math.floor(Math.random()*255) + 1;
        randomNumber_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2) + "%" ;
        document.getElementById("result_label").style.color = "rgb ("+ randomNumber_r + "," + randomNumber_g + "," + randomNumber_b +")" ; 
        document.getElementById("result_confidence").style.color = "rgb ("+ randomNumber_r + "," + randomNumber_g + "," + randomNumber_b +")" ;
        
        img = document.getElementById("alien1");
        img1 = document.getElementById("alien2");
        img2 = document.getElementById("alien3");
        img3 = document.getElementById("alien4");

        if(results[0].label == "clap"){
            img.src = "aliens-01.gif";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.png";
        }
         else if(results[0].label == "bell"){
            img.src = "aliens-01.png";
            img1.src = "aliens-02.gif";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.png"; 
         }
         else if(results[0].label == "Background Noise"){
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.gif";
            img3.src = "aliens-04.png"; 
         }
         else if(results[0].label == "snap"){
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.gif"; 
         }
    }
    
    
}