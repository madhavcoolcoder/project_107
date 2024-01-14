









function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifer = ml5.soundClassifer('https://teachablemachine.withgoogle.com/models/tGhUCXI04/model.json', modelReady);
}

function modelReady()
{
    classifer.classify(gotResults);
}