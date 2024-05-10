
    function validatePassword() {
        var password = document.getElementById("Input").value;
        var indicator = document.getElementById("password-Strength");
        var Color=document.getElementById("Color")

        var Uppercase = /[A-Z]/.test(password);
        var Lowercase = /[a-z]/.test(password);
        var Number = /\d/.test(password);
        var SpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
        var isLongEnough = password.length >= 4;

        if (Uppercase && Lowercase && Number && SpecialChar && isLongEnough) {
            
            indicator.textContent = "your Password is Strong";
            indicator.style.color = "green";
            Color.style.width="300px"
            Color.style.backgroundColor="green"
        } 
        else if ((Uppercase || Lowercase || Number || SpecialChar) && isLongEnough) {
            indicator.textContent = "Your Password is Medium";
            indicator.style.color = "orange";
            Color.style.width="200px"
            Color.style.backgroundColor="orange"
        } 
        else {
            indicator.textContent = "your passwrod is to Weak";
            indicator.style.color = "red";
            Color.style.width="100px"
            Color.style.backgroundColor="red"
        }
    }
