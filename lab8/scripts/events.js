/*For doing this assignment I have used the sample assignment as a source. 
  Therefore, there may be some similarity between these files but they are
   only those that I fully understood. Thank you */


document.querySelector('#firstName').addEventListener("change", function(){
    greeting.innerHTML = "Hello " + this.value;
});

document.querySelector('#firstName').addEventListener("blur", function(){
    if(this.value !== ""){
        fnameWarning.innerHTML = "";
    }
});

document.querySelector('#country').addEventListener("click", function(){
    if(profile.country.options.selectedIndex !== -1){
        countryWarning.innerHTML = "";
    }
});

document.querySelector('#province').addEventListener("click", function(){
    if(profile.province.options.selectedIndex !== -1){
        provinceWarning.innerHTML = "";
    }
});

document.querySelector('#lastName').addEventListener("blur", function(){
    if(this.value !== ""){
        lnameWarning.innerHTML = "";
    }
});

document.querySelector('#address1').addEventListener("blur", function(){
    if(this.value !== ""){
        addressWarning.innerHTML = "";
    }
});

document.querySelector('#city').addEventListener("blur", function(){
    if(this.value !== ""){
        cityWarning.innerHTML = "";
    }
});

document.profile.addEventListener("submit", validateProfile);

