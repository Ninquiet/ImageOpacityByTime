
let allImagesInfo = new Map();
let updateTime = 5000;

CheckImagesTransitions();
function AddImage(_IdOfImage,_targetHour,_maxDistanceVisible){
    allImagesInfo.set(_IdOfImage,[_targetHour,_maxDistanceVisible]);
}

function CheckImagesTransitions (){
    for (const[key,value] of allImagesInfo)
    {checkImageState(key,value);}
    setTimeout(CheckImagesTransitions,updateTime)
}

function checkImageState(_IdOfImage,_imageValues){
    _targetHour = _imageValues[0]
    _maxDistanceVisible= _imageValues[1]
    _distanceOnHours = CalcDistanceBetwenHoursAt24Systeme(_targetHour);
    
    _piceOfHourToFade = 1/_maxDistanceVisible;
    _amoutToFadeOut = ((_distanceOnHours+1)*_piceOfHourToFade);
    
    _actualFadeValue = 1-_amoutToFadeOut;

    // Just a little help at the end
    if (_actualFadeValue > 0.9)
    {_actualFadeValue = 1;}

    applyFadeToImage(_IdOfImage,_actualFadeValue);
}

function applyFadeToImage(_IdOfImage,_actualFadeValue) {
    $("#"+_IdOfImage).css("opacity",_actualFadeValue);
}

