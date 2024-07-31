

    document.addEventListener('DOMContentLoaded', function() {

     let bodycontent = main.innerHTML;

     main.innerHTML = 'LOADING BILING INFO ......................'

      request.sendRequest('GET', '/client/billing')
        .then(data => {
          request.succ(data)

          main.innerHTML = bodycontent;

          updateCard(data)

          updateInvoice(data)

          navigation(data);

          updateTable(data)

        })

        .catch(error => {console.error('Error loading billing history:', error)

            this.body.innerHTML = `AN UNEXPECTED ERROR OCCURED PLEASE REPORT TO US`;

        });

    });





function updateTable(data) {

const tableBody = document.querySelector('#billingHistoryTable');

    if (data.billing.length <= 0) {

      tableBody.innerHTML = '<tr><td colspan="4">OOPS! You have no billing history</td></tr>';

      return;

    }

    data.billing.forEach(item => {

      const row = document.createElement('tr');

      row.innerHTML = `

        <td>${item.date}</td>

        <td>${item.service}</td>

        <td>N${item.amount / 100}</td>

        <td><button onclick="window.location.href='${item.receiptUrl}'">receipt</button></td>

      `;

      tableBody.appendChild(row);

    });

}



function updateCard(data)

{

    if(data.card.length <= 0){

        cardContainer.innerHTML = `

                <div class="card-info">

                <h4>Add a card to get started</4>

                <button onclick='addcard()'>Add a card </buton>

                </div>
        `
        return;
    }

    cardName.innerHTML = data.card[0].account_name
    cardImage.src = `/assets/images/${data.card[0].brand}.png`
    cardBrand.innerHTML = `${data.card[0].brand}`
    cardBank.innerHTML = `${data.card[0].bank}`
    last4.innerHTML = `${data.card[0].bin}********${data.card[0].last4}`
    expMonth.innerHTML = data.card[0].exp_month
    expYear.innerHTML = data.card[0].exp_year

}



function updateInvoice(data){

    if (data.invoice.length <= 0) {

        document.getElementById('invoiceContainer').innerHTML += `<div> <P> You have no unpaid or due invoice</p></div>`;

        return;

      }

      else {

        data.invoice.forEach((invoice) => {

          document.getElementById('services').innerHTML += `

           <li style="background: white">

            <div style="padding: 10px; ;" class="invoice-count"> <b>INVOICE</b>

              <span id="invoiceId"> #${invoice.invoice_number}</span>

              <div style="padding-top: 5px;"> <span s id="invoiceDate">Due: ${invoice.due_date} </span> <span id="invoiceAmount"

                  style="margin-left: 10px;">

                  Amount: NGN ${invoice.amount} </span> <span id="invoiceAmount" style="margin-left: 10px;"> <button onclick="viewInvoice('${invoice.invoice_number}')"

                    style="margin-top:10px;"> <i  class="fa fa-eye" aria-hidden="true"></i> view</button> <button

                    onclick="chargeInvoice('${invoice.invoice_number}')"

                    style="margin-top:10px;"> pay</button></span></div>

            </div>

          </li>`

        })

      }

}



function addcard(){

    let confirm = window.confirm(`In other to add a debit/credit, your card will be charged the sum of (N50 only) for authentication reasons.The sum will be returned back in value after authentication `)

    if(confirm){

        request.showloader('Initializing transaction..')

        request.sendRequest('GET','/client/addcard')

        .then((data)=>{
            request.succ(data)
        })
        .catch((error)=>{
            request.err(error);
        })

    }
}



function chargeInvoice(invoiceId){

    request.showloader('Initializing transaction..')

    request.sendRequest('GET', `/client/chargeinvoice/${invoiceId}`)
       .then((data) => {
            request.succ(data)
        })
       .catch((error) => {
            request.err(error);
        })

}

// request transaction receipt
function requestTransactionReceipt(reffrence) {
    request.sendRequest('POST', '/transaction/receipt', { reffrence: reffrence })
        .then((data) => {
          request.succ(data)
        })
        .catch((error) => {
           request.err(error)
        })
}


function navigation(){
    request.sendRequest('GET', '/auth/check')

    .then((data) => {
      if (data.authenticated === false) {
        window.location.href = '/auth/login';

      } else {

        headerName.innerHTML = data.client.name

        clientName.innerHTML = data.client.name

        clientEmail.innerHTML = data.client.email

        clientPin.innerHTML = data.client.pin

        clientContact.innerHTML = data.client.contact

        clientAddress.innerHTML = data.client.address

      }})



    document.querySelectorAll(".drop-down-opener").forEach((element) => {

    element.addEventListener("click", function (event) {

      event.preventDefault();

      let dropdown = this.nextElementSibling;

      let down = this.querySelector(".fa-angle-down");

      let up = this.querySelector(".fa-angle-up");

      const dropdownMenu = document.querySelectorAll(".mid-section");

      const faupIcon = document.querySelectorAll(".fa-angle-up");

      const fadownIcon = document.querySelectorAll(".fa-angle-down");

      dropdownMenu.forEach((menu) => {

        if (menu !== dropdown && !menu.classList.contains("hidden")) {

          menu.classList.add("hidden");

        }

      });

      dropdown.classList.toggle("hidden");

      down.parentNode.classList.toggle("hidden");

      up.parentNode.classList.toggle("hidden");

      fadownIcon.forEach((icon) => {

        if (icon !== down && icon.parentNode.classList.contains("hidden")) {

          icon.parentNode.classList.remove("hidden");

        }

      });

      faupIcon.forEach((icons) => {

        if (icons !== up && !icons.parentNode.classList.contains("hidden")) {

          icons.parentNode.classList.add("hidden");

        }

      });

    });

  });

}