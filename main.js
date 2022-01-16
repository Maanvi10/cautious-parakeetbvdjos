function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fa0F2NHsi/model.json",modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error , results){
    if (error) {
        console.error(error);
    }else {
        console.log(results);
        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("r_label").innerHTML = 'I Can Hear - '+
        results[0].label;

        document.getElementById("r_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" % ";
        
        document.getElementById("r_label").style.color = "rgb("
        +random_r +","+random_g+","+ random_b+")";
        
        document.getElementById("r_confidence").style.color = "rgb("
        +random_r +","+random_g+","+ random_b+")";
        
        an1 = document.getElementById("A")
        an2 = document.getElementById("C")
        an3 = document.getElementById("D")
        an4 = document.getElementById("E")
        an5 = document.getElementById("N")

        if (results[0].label == '"A" Note') {
            an1.src= 'A.gif';
            an2.src= 'C.png';
            an3.src= 'D.png';
            an4.src= 'E.png';
            an5.src= 'Noise.png';
        }else if(results[0].label == '"C" Note') {
            an1.src= 'A.png';
            an2.src= 'C.gif';
            an3.src= 'D.png';
            an4.src= 'E.png';
            an5.src= 'Noise.png';
        }else if(results[0].label == '"D" Note') {
            an1.src= 'A.png';
            an2.src= 'C.png';
            an3.src= 'D.gif';
            an4.src= 'E.png';
            an5.src= 'Noise.png';
        }else if(results[0].label == '"E" Note') {
            an1.src= 'A.png';
            an2.src= 'C.png';
            an3.src= 'D.png';
            an4.src= 'E.gif';
            an5.src= 'Noise.png';
        }else{
            an1.src= 'A.png';
            an2.src= 'C.png';
            an3.src= 'D.png';
            an4.src= 'E.png';
            an5.src= 'Noise.gif';
        }
    }
}
