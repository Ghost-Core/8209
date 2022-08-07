function myFunction() {

    document.getElementById("Sat").disabled = true;
  
    document.getElementById("Sun").disabled = true;
}
$('#specialDiet').change(function() {
    if(this.checked != true){
          $("#conditional_part").hide();
     }
  else{
        $("#conditional_part").show();
  }
});

$('#Teritorial').change(function() {
    if(this.checked != true){
          $("#descTeritorial").hide();
     }
  else{
        $("#descTeritorial").show();
  }
});
