# Screenshots

  1. We can capture the screenshot using a command and save it in the screenshot
     folder
  
    e.g
    cy.screenshot("homepage")
    cy.wait(5000);
    cy.get("#my-image").screenshot("image-product1")

# Automatic Screenshots and videos

  1. We can capture screenshots and videos when something fails but only when we
     excute the feature through the cli

    e.g
    cy.get("#some-element").click();
    cy.get("#camera-element).should("have.text", "tablet");

  2. We execute the command to automate screenshots by running cypress as normal
     but add some tags
     
    e.g
    npx cypress run --spec sample-proj\cypress\e2e\Screenshots.cy.js
      
      a. npx cypress run --spec  "path/to/cy/file" is the format here 

      b. right click on the file and find 'Copy Relative File Path' to add the file path to the cypress test file

      c. This will automatically capture and screenshot for error on this particular file not the entire project

      d. note that when you run cypress this way, you will not the get same application like browser as the test will run on the terminal rather than the browser

      e. However, you will recieve both a video and a screenshot when you do fail the tests for whatever reason