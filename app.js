

AgeCalculaot = () => {
    var birth = document.getElementById("ageInput").value;
    var birthDate = new Date(birth)
    var birthTime = birthDate.getTime()
    var currentDate = new Date();
    var diff = currentDate - birthTime;
    var age = diff / (1000 * 60 * 60 * 24 * 365);
    age = Math.floor(age)
    alert("The Age = " + age)
}
Reset=()=>{
  document.getElementById("ageInput").value = '';
}