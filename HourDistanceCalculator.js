let fakeHour;
function FakeAnHour(_fakeHour){
    fakeHour = _fakeHour;
}

function TESTCalcDistanceBetwenHoursAt24Systeme (_currentHour,_targetHour){
    return(CalcDistanceBetwenHours (24,_currentHour,_targetHour));
}

function CalcDistanceBetwenHoursAt24Systeme (_targetHour){
    let _date = new Date();
    let _currentHour = _date.getHours();
    if (fakeHour != null) {_currentHour=fakeHour;}
    return CalcDistanceBetwenHours (24,_currentHour,_targetHour);
}

function CalcDistanceBetwenHours (_maximumHour,_currentHour,_targetHour){
    let _distance;

    let _calculateFromTheRight= calDistanceCurrentToTarget(_currentHour,_targetHour,_maximumHour);
    _distance = _calculateFromTheRight;

    let _validForLeftAndRightCalcuation = (_distance <=(_maximumHour/2));

    if (!_validForLeftAndRightCalcuation){
        let _calculateFromTheLeft = calDistanceCurrentToTarget(_targetHour,_currentHour,_maximumHour);
        _distance = _calculateFromTheLeft;
    }
    return _distance;
}

function calDistanceCurrentToTarget(_current,_target,_maximum){
    let _distance = _current - _target 

    let _negativeResoult = _distance<0;

    if (_negativeResoult){
        _distance += _maximum;
    }
    return _distance;  

}