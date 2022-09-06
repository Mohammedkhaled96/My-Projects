
    window.onload=function(){
      document.getElementById("my_audio").play();
    }
var date = new Date();
var currentDate = date.toISOString().slice(0,10);
var currentTime =currentDate+"<br/>"+ date.getHours() + ':' + date.getMinutes();





var $form = document.querySelector('#add-form')
var $table = document.querySelector('#list-table')

var contacts = JSON.parse(localStorage.getItem('contacts') || '[]')

contacts.forEach(function (contact) {
  var $row = document.createElement('tr')
  $row.dataset.note = contact.note
  $row.innerHTML = `

    <td>
      ${contact.name}
    </td>
    
    <td>
      ${contact.note || '-'}
    </td>
<tt>
      ${contact.date}
</tt>
   <td class="actions">
      <a href="#" data-action="edit">edit</a> |
      <a href="#" data-action="delete">delete</a>
    </td>

  `
  $table.appendChild($row)
})

$form.addEventListener('submit', function (event) {
  event.preventDefault()

  var name = document.querySelector('#title').value
  var note =document.querySelector('#note').value
  var date = document.getElementById('date').value =currentTime;
  var $row = document.createElement('tr')
  $row.dataset.note = note
  $row.innerHTML = `

    <td>
      ${name}
    </td>
    <td>
      ${note}
    </td>
<tt>
      ${date}
</tt>
        <td class="actions">
      <a href="#" data-action="edit">edit</a> |
      <a href="#" data-action="delete">delete</a>
    </td>

  `
  $table.appendChild($row)

  $form.reset()

  contacts.push({
    note: note,
    name: name,
date: date


  })
  localStorage.setItem('contacts', JSON.stringify(contacts))
})

$table.addEventListener('click', function (event) {
  event.preventDefault()

  var $button = event.target
  var $row = $button.closest('tr')
  var note = $row.dataset.note
  var action = $button.dataset.action

  if (action === 'delete') {
    contacts = contacts.filter(function (contact) {
      return contact.note !== note
    })
    localStorage.setItem('contacts', JSON.stringify(contacts))
    $row.remove()
  }

  if (action === 'edit') {
    var $cells = $row.querySelectorAll('td')
    var name = $cells[0].textContent.trim()
    var note = $cells[1].textContent.trim()
    var date = $cells[2].textContent.trim()
    $row.innerHTML = `

      <td>
        <input value="${name}" data-original="${name}">
      </td>
      
      <td>
        <textarea data-original="${note}">${note}</textarea>
      </td>
<tt>
        <input value="${currentTime}" data-original="${currentTime}">
</tt>
      <td class="actions">
        <button data-action="save">save</button>
        <a href="#" data-action="cancel">cancel</a>
      </td>

    `
  }

  if (action === 'save') {
    var $inputs = $row.querySelectorAll('input, textarea')
    var name = $inputs[0].value
    var note = $inputs[1].value
    var date = $inputs[2].value
    $row.innerHTML = `

      <td>
        ${name}
      </td>
      
      <td>
        ${note}
      </td>
<tt>
        ${date}
</tt>
      <td class="actions">
        <a href="#" data-action="edit">edit</a> |
        <a href="#" data-action="delete">delete</a>
      </td>

    `

    contacts.forEach(function (contactItem) {
      if (contactItem.note === note) {
        contactItem.name = name
        contactItem.note = note
        contactItem.date = date
      }
    })
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }

  if (action === 'cancel') {
    var $inputs = $row.querySelectorAll('input, textarea')
    var name = $inputs[0].dataset.original
    var note = $inputs[1].dataset.original
    var date = $inputs[2].dataset.original
    $row.innerHTML = `

      <td>
        ${name}
      </td>
      
      <td>
        ${note}
      </td>
<tt>
        ${date}
</tt>
      <td class="actions">
        <a href="#" data-action="edit">edit</a> |
        <a href="#" data-action="delete">delete</a>
      </td>

    `
  }
})

function exportToExcel(tableId){
	let tableData = document.getElementById(tableId).outerHTML;
	tableData = tableData.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
    tableData = tableData.replace(/<input[^>]*>|<\/input>/gi, ""); //remove input params
	tableData = tableData + '<br /><br />Code witten By sudhir K gupta.<br />My Blog - https://comedymood.com'

	let a = document.createElement('a');
	a.href = `data:application/vnd.ms-excel, ${encodeURIComponent(tableData)}`
	a.download = 'my notes' + getRandomNumbers() + '.xls'
	a.click()
}
function getRandomNumbers() {
	let dateObj = new Date()
	let dateTime = `${dateObj.getHours()}${dateObj.getMinutes()}${dateObj.getSeconds()}`

	return `${dateTime}${Math.floor((Math.random().toFixed(2)*100))}`
}


function generate() {
    var doc = new jsPDF('p', 'pt', 'letter');
    var htmlstring = '';
    var tempVarToCheckPageHeight = 0;
    var pageHeight = 0;
    pageHeight = doc.internal.pageSize.height;
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector  
        '#list-table': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"  
            return true
        }
    };
    margins = {
        top: 150,
        bottom: 60,
        left: 40,
        right: 40,
        width: 600
    };
    var y = 20;
    doc.setLineWidth(2);
    doc.text(200, y = y + 30, "MY NOTES");
    doc.autoTable({
        html: '#list-table',
        startY: 70,
        theme: 'grid',
        columnStyles: {
            0: {
                cellWidth: 180,
            },
            1: {
                cellWidth: 180,
            },
            2: {
                cellWidth: 180,
            }
        },
        styles: {
            minCellHeight: 40
        }
    })
    doc.save('my notes.pdf');
}

