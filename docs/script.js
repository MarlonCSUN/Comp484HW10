$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    

    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.pet-button').click(clickedPetButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Riley", weight:"5", happiness:"10", energy:"10"};
    
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info['happiness'] += 1;
      // Increase pet weight
      pet_info['weight'] += 1;
      // Increase pet energy
      pet_info['energy'] += 1;
      // Animate pet image when treat button is clicked
      animatePetImage();
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info['happiness'] += 1;
      // Decrease pet energy
      pet_info['energy'] -= 1;
      // Decrease pet weight
      pet_info['weight'] -= 1;
      // Animate pet image when play button is clicked
      animatePetImage();
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info['happiness'] -= 2;
      // Decrease pet weight
      pet_info['weight'] -= 2;
      // Decrease pet energy
      pet_info['energy'] -= 2;
      // Animate pet image when exercise button is clicked
      animatePetImage();
      checkAndUpdatePetInfoInHtml();
    }

    function clickedPetButton() {
      // Increase pet happiness
      pet_info['happiness'] += 1;
      // Increase pet energy
      pet_info['energy'] += 1;
      // Animate pet image when pet button is clicked
      animatePetImage();
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info['weight'] < 0) {
        pet_info['weight'] = 0;
      }
      // Add conditional so if weight is higher than 10.
      if (pet_info['weight'] > 10) {
        pet_info['weight'] = 10;
      }
      // Add conditional so if happiness is lower than zero.
      if (pet_info['happiness'] < 0) {
        pet_info['happiness'] = 0;
      }
      // Add conditional so if happiness is higher than 10.
      if (pet_info['happiness'] > 10) {
        pet_info['happiness'] = 10;
      }
      // Add conditional so if energy is lower than zero.
      if (pet_info['energy'] < 0) {
        pet_info['energy'] = 0;
      }
      // Add conditional so if energy is higher than 10.
      if (pet_info['energy'] > 10) {
        pet_info['energy'] = 10;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.energy').text(pet_info['energy']);

      // Add conditionals to change the pet image and message based on the happiness of your pet
      if (pet_info['happiness'] <= 3 && pet_info['energy'] <= 2 && pet_info['weight'] <= 3) {
        $('.pet-image').attr('src', 'images/sad.png');
        showPetMessage("Your pet is sad. Try playing with it or giving it a treat!");

      } else if (pet_info['energy'] <= 3 && pet_info['happiness'] >= 3 && pet_info['weight'] >= 3) {
        $('.pet-image').attr('src', 'images/tired.png');
        showPetMessage("Your pet is tired. Try giving it a treat!");

      } else if (pet_info['weight'] >= 10) {
        $('.pet-image').attr('src', 'images/full.png');
        showPetMessage("Your pet is full. Try playing with it or giving it some exercise!");

      } else if (pet_info['happiness'] >= 7 && pet_info['energy'] >= 7 && pet_info['weight'] >= 5) {
        $('.pet-image').attr('src', 'images/happy.png');
        showPetMessage("Your pet is happy! Keep up the good work!");

      } else if (pet_info['weight'] <= 2 && pet_info['happiness'] >= 2 && pet_info['energy'] >= 2) {
        $('.pet-image').attr('src', 'images/hungry.png');
        showPetMessage("Your pet is hungry. Try giving it a treat!");

      } else {
        $('.pet-image').attr('src', 'images/idle.png');
        showPetMessage("Your pet is idle. Try playing with it!");
      }
    }

    function showPetMessage(message) {
    // fadeToggle() alternates between fading in and fading out.
    // I use it twice to create a quick blinking effect when the message updates.
      $('.message-text').text(message).fadeToggle(200).fadeToggle(200);
    }

    function animatePetImage() {
    // animate() changes the CSS of an element with a smooth animation.
    // I use it here to make the pet image quickly grow and shrink when you interact with your pet.
      $('.pet-image').animate({ width: '270px' }, 150).animate({ width: '250px' }, 150);
    }

    function runAllLogs() {
      // This is a UserMessage log that is manually created by myself
      // It is not a log that is automatically generated by the browser
      console.log("[User] This is a log message.");
      // This is a Info Level log that is manually created by myself
      console.info("[User] This is an info message.");
      // This is a Warning Level log that is manually created by myself
      console.warn("[User] This is a warning message.");
      // This is an Error Level log that is manually created by myself
      console.error("[User] This is an error message.");

      // This is a log that displays an object in a table format in the console
      console.table([ {name: "Dog", age: 5},
                      {name: "Cat", age: 3}]);

      // This is a log that groups multiple log messages together in the console
      console.group("Grouped Logs");
      console.log("This is a log message inside a group.");
      console.warn("This is a warning message inside a group.");
      // This is the end of the group, so the next log message will be outside of the group
      console.groupEnd();
      // This is a log that displays a message with custom CSS styling in the console
      console.log("This is a custom log message: %cCustom Message", "color: blue; font-size: 16px;");
    }

    function activate404() {
      // Attempt to load a non-existent image to trigger a 404 error in the console
      // This will cause a 404 error in the console because the image does not exist
      // This error is automatically generated by the browser when it fails to load the image
      var img = new Image();
      img.src = "non_existent_image.png";
    }

    function activateTypeError() {
      // Attempt to call a non-function to trigger a TypeError in the console
      // This will cause a TypeError in the console because we are trying to call a number as if it were a function
      // This error is automatically generated by the browser when it encounters this type of mistake in the code
      var notAFunction = 5;
      notAFunction();
    }

    function activateViolation() {
      // Create a long-running loop to trigger a violation warning in the console
      // This error is automatically generated by the browser when it detects a potential performance issue
      for (let i = 0; i < 1e9; i++) {}
    }

    function reproduceBug() {
      // This function intentionally contains a bug (undefined variable) to demonstrate debugging
      console.log(undefinedVariable);
    }

    function fixBug() {
      // This function fixes the bug by defining the previously undefined variable
      var undefinedVariable = "Now it's defined!";
      console.log(undefinedVariable);
    }

    function breakpointDemo() {
      // This function demonstrates the use of breakpoints in debugging
      let x = 10;
      let y = 20;
      let sum = x + y; // I set a breakpoint on this line to inspect variable values
      console.log("The sum of x and y is: " + sum);
    }