let tickets = [];

function purchaseTickets() {
    const ticketQuantity = document.getElementById("ticketQuantity").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;

    // Input validation
    if (!ticketQuantity || !firstName || !lastName || !phoneNumber || !email) {
        alert("Please fill in all fields");
        return;
    }

    const ticket = {
        quantity: ticketQuantity,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };

    tickets.push(ticket);
    displayTickets();
    clearFields();
}

function displayTickets() {
    const ticketList = document.getElementById("allTickets");
    ticketList.innerHTML = "<h2>Alle biletter</h2>";

    const deleteButtonContainer = document.getElementById("deleteButton")

    const deleteTicketsButton = document.createElement('button');
    deleteTicketsButton.textContent = 'Slett alle biletter';
    deleteTicketsButton.addEventListener('click',() => deleteAllTickets());

    tickets.forEach(ticket => {
        const ticketInfo = document.createElement("div");
        ticketInfo.textContent = `Quantity: ${ticket.quantity}, Name: ${ticket.firstName} ${ticket.lastName}, Phone: ${ticket.phoneNumber}, Email: ${ticket.email}`;
        ticketList.appendChild(ticketInfo);
    });


    if (tickets.length && deleteButtonContainer.childNodes.length == 2) {
        deleteButtonContainer.appendChild(deleteTicketsButton);
    }
}


function clearFields() {
    document.getElementById("ticketQuantity").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";
}

function deleteAllTickets() {
    tickets = [];
    displayTickets();
}