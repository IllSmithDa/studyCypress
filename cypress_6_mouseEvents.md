# Mouse Events 

  1. You can perform various mouse events using Cypress

# Mouse Hover

  1. You can mouse over items using .trigger("moouseover").click() when dealing
     with mouse hover

     e.g
    cy.get("#mouse-over-popover").should("not.exist")

    cy.get("p[class='MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root']")
      .trigger("mouseover").click();

    cy.get("#mouse-over-popover").should("exist")

      a. Here we test whether an mouse over element exists when we hover over this button. Once we trigger 'mouseover' event, the dom element will exist in the dom. 

# Right Click Trigger

  1. We can use the exact same process for other types of mouse events include
     right click or "contextmenu"

    e.g
    cy.get(".some-menu").rightclick();
    cy.get(".some-menu").trigger("contextmenu");

      a. both trigger the right click function on the menu

# Drag and Drop Event

  1. You can also test dragging in Cypress application 

    e.g
    cy.get("#drag-box").drag( #box204, { force: true})

      a. drag the box into element with id "box204"

# Scrolling Event

  1. You can scroll elements into view using scrollIntoView({ duration: 3000 })

    e.g
    cy.get("ul:nth-child(2) li:nth-child(1) a:nth-child(1) h2:nth-child(1)")
      .scrollIntoView({duration: 5000});

