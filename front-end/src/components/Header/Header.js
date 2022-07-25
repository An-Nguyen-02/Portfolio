import React, {useEffect} from "react";
import './Header.css';

const Header = () =>{
    useEffect(()=>{
        const jobTitles = ['Developer','Student'];
        // Current sentence being processed
        var _PART = 0;

        // Character number of the current sentence being processed 
        var _PART_INDEX = 0;

        // Holds the handle returned from setInterval
        var _INTERVAL_VAL;

        // Element that holds the text
        var _ELEMENT = document.querySelector("#jobTitle");
        // Implements typing effect
        function Type() { 
            var text =  jobTitles[_PART].substring(0, _PART_INDEX + 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX++;

            // If full sentence has been displayed then start to delete the sentence after some time
            if(text === jobTitles[_PART]) {
                clearInterval(_INTERVAL_VAL);
                setTimeout(function() {
                    _INTERVAL_VAL = setInterval(Delete, 50);
                }, 1000);
            }
        }

        // Implements deleting effect
        function Delete() {
            var text =  jobTitles[_PART].substring(0, _PART_INDEX - 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX--;

            // If sentence has been deleted then start to display the next sentence
            if(text === '') {
                clearInterval(_INTERVAL_VAL);

                // If last sentence then display the first one, else move to the next
                if(_PART === (jobTitles.length - 1))
                    _PART = 0;
                else
                    _PART++;
                _PART_INDEX = 0;

                // Start to display the next sentence after some time
                setTimeout(function() {
                    _INTERVAL_VAL = setInterval(Type, 100);
                }, 200);
            }
        }
        // Start the typing effect on load
        _INTERVAL_VAL = setInterval(Type, 100);
    })
    
    return (
        <div id="header">
            <h1 id="name">An <span>Nguyen</span></h1>
            <div id="jobTitleContainer">
                <span>I'm a </span>
                <strong id="jobTitle"></strong>
            </div>
        </div>
    )
}

export default Header;