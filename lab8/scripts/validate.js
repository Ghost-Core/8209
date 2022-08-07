/*For doing this assignment I have used the sample assignment as a source. 
  Therefore, there may be some similarity between these files but they are
   only those that I fully understood. Thank you */


function validateProfile(x){

    x.preventDefault();

    var valid=true;

    if(profile.firstName.value == ""){
    document.querySelector('#fnameWarning').innerHTML="*Please enter Your First Name*";
        valid = false;
    }

    if(profile.lastName.value == ""){
        document.querySelector('#lnameWarning').innerHTML="*Please enter Your Last Name*";
        valid=false;
    }

    if(profile.address1.value == ""){
        document.querySelector('#addressWarning').innerHTML="*Please enter Your Address*";
        valid=false;
    }

    if(profile.city.value == ""){
        document.querySelector('#cityWarning').innerHTML="*Please enter Your City*";
        valid=false;
    }

    if(profile.country.value == ""){ 
        document.querySelector('#countryWarning').innerHTML="*Select Your  Country*";
        valid = false;
    }
    
    if(profile.province.value == ""){
        document.querySelector('#provinceWarning').innerHTML="*Select Your Province*";
        valid = false;
    }

    if(valid){
        alert("Thank You, Have a Nice Day!");
    }

    return valid;

};
