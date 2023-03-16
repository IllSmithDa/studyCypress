# File Upload 

  1. Its very simple. You just need to install an external package 

    e.g
    npm i -D cypress-file-upload

  2. Add the import at the top of the cypress file 

    e.g
    import "cypress-file-upload";

  3. All you have to do is to identify the 'input' with type 'file' and retrieve
     it with the 'attachFile('someFile.txt')' method with the file path as its
     argument
     
    e.g
    cy.get("input#file-upload[type='file']").attachFile("test-file.txt");

      a. Note that the file path is root in fixtures so make sure to add any test files there first 

  4. You can specify a file path if you want to add files to different folder
     using relative pathing from the 'fixtures' folder

    e.g
    cy.get(".css-k008qs>input[type='file']")
      .attachFile({fileName: "test.txt", filePath:"./files/test.txt"});

# Drag and Drop

  1. You can even test drag and drop functionality using adding 
  { subjectType:'drag-n-drop'} to the second argument in the method
  '.attachFile()' 
  
    e.g
    cy.get("div[class='css-16rbq1h'] div[role='button']")
      .attachFile({fileName: "test.txt", filePath:"./files/test.txt"}, 
      { subjectType:  'drag-n-drop'});

# Multiple files 

  1. you can also addin in list of files as an argument for .attachFile() to
     test multiple file upload functionaility

    e.g
    cy.get("#file-upload").attachFile(["file-1.text", "file-2.text"])

# Handling File input inside shadowdom

  1. You can set the shadowdom to true if your file upload exists inside a
     shadow dom

    e.g
    cy.get('#smart-input', {includeShadowDom: true}).attachFile("test-file.txt");