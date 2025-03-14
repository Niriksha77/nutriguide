document.addEventListener("DOMContentLoaded", function () 
{ 
  document.getElementById("childId").value = generateSequentialChildId(); }); 
  function generateSequentialChildId() 
  { 
    let childData = JSON.parse(localStorage.getItem("children")) || []; 
    let newId = childData.length + 1; 
    return "CH" + newId; 
  } 
    document.getElementById("childForm").addEventListener("submit", function (event) {
    event.preventDefault(); let childId = document.getElementById("childId").value; 
    
    let childName = document.getElementById("childName").value; 
    let childAge = document.getElementById("age").value; 
    let childGender = document.getElementById("childGender").value; 
    let childHeight = document.getElementById("height").value;
    let childWeight = document.getElementById("weight").value; 
    let parentPhone = document.getElementById("parentPhone").value; 
      // Retrieve existing data or initialize an empty array
    let childData = JSON.parse(localStorage.getItem("children")) || []; 
    // Add new child profile
    childData.push({ id: childId, name: childName, age: childAge, gender: childGender, height:childHeight, weight: childWeight, phone: parentPhone }); 
    // Store updated data in localStorage
    localStorage.setItem("children", JSON.stringify(childData)); // Show success message 
    alert("Profile Saved!\nChild ID: " + childId); // Reload page to reset form and generate next ID
    }); 


    function calculateBMI() 
    { 
      var heightCm = parseFloat(document.getElementById("height").value);
      var weight = parseFloat(document.getElementById("weight").value); 
      var age = parseInt(document.getElementById("age").value); 
      if (isNaN(heightCm) || isNaN(weight) || isNaN(age)) 
        { alert("Please enter valid height, weight, and age.");
          return; 
          } 
          var heightM = heightCm / 100; 
          var bmi = weight / (heightM * heightM); 
          var category = ""; var redirectUrl = "";
          if (age >= 1 && age <= 3) 
            { if (bmi < 14) 
              { category = "Underweight"; 
                redirectUrl = "s1.html"; 
              } 
              else if (bmi >= 14 && bmi <= 17) 
                { category = "Normal weight";
                  redirectUrl = "n1.html"; } 
              else if (bmi > 17)
                { category = "Overweight"; 
                  redirectUrl = "o1.html"; } } 
          else if (age >= 4 && age <= 6) 
            { if (bmi < 14.5)
              { category = "Underweight"; redirectUrl = "s2.html"; } 
              else if (bmi >= 14.5 && bmi <= 17.5)
                { category = "Normal weight"; redirectUrl = "n2.html"; } 
              else if (bmi > 17.5) 
                { category = "Overweight"; redirectUrl = "o2.html"; } } 
          else if (age >= 7 && age <= 9) 
            { 
              if (bmi < 15) { category = "Underweight"; redirectUrl = "s3.html"; } 
              else if (bmi >= 15 && bmi <= 18) { category = "Normal weight"; redirectUrl = "n3.html"; } 
              else if (bmi > 18) { category = "Overweight"; redirectUrl = "o3.html"; } }
          else if (age >= 10 && age <= 12) {
            if (bmi < 16) 
              { category = "Underweight"; redirectUrl = "s4.html"; }
              else if (bmi >= 16 && bmi <= 19) 
                { category = "Normal weight"; redirectUrl = "n4.html"; } 
              else if (bmi > 19) 
                { category = "Overweight"; redirectUrl = "o4.html"; } }
            else if (age >= 13 && age <= 15) 
              { 
                if (bmi < 17) 
                { category = "Underweight"; redirectUrl = "s5.html"; } 
                else if (bmi >= 17 && bmi <= 22)
                  { category = "Normal weight"; redirectUrl = "n5.html"; }
                  else if (bmi > 22)
                    { category = "Overweight"; redirectUrl = "o5.html"; } } 
                  else { alert("Age out of range. Please enter an age between 1 and 15."); 
            return; } 
        alert("Redirecting to your diet chart"); 
        window.location.href = redirectUrl;
    }
    
    //   Redirect to the corresponding food chart   
    //alert("Your BMI is " + bmi.toFixed(2) + " (" + category + ")");