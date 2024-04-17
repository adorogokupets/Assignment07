// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    ['35183091','John Doe', '4723', 'johnDoe@test.com', 'Quality Assurance'],
    ['74347931','John Smith', '7392', 'johnSmith@test.com', 'Engineering'],
    ['84346212','Anna Smith', '7392', 'annaSmith@test.com', 'Engineering'],
    ['03945457','Rebeca Wood', '7392', 'rebecaWoodh@test.com', 'Sales'],
    ['83433284','Samanta Rawn', '7392', 'samantaRawn@test.com', 'Executive']
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
let storage = localStorage.getItem('employees') || ''

if (storage.length > 0){
    employees = JSON.parse(localStorage.getItem('employees'))
}


// GET DOM ELEMENTS
let $ = (id) => document.getElementById(id)
let form = $('addForm')
let table = $('empTable')
let tbody = table.getElementsByTagName('tbody')[0]
let count = 0
let empCount = $('empCount')



// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeId = $('id').value
    let employeeName = $('name').value
    let employeeExtension = $('extension').value
    let employeeEmail = $('email').value
    let employeeDepartment = $('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [employeeId, employeeName, 
        employeeExtension, employeeEmail, employeeDepartment]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee)

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
    // CONFIRM THE DELETE
        let confirmed = confirm("Are you sure you want to delete this employee?")
        if (confirmed) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let tr = e.target.parentNode.parentNode //e.target.closest('tr')
        let rowIndex = tr.rowIndex - 1
        
        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex, 1)

        // BUILD THE GRID
        buildGrid()
        }
    }

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    if (tbody) {
        table.removeChild(tbody)
    }

    // REBUILD THE TBODY FROM SCRATCH
    tbody = document.createElement('tbody')

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    employees.forEach((employee) => {
        let tr = document.createElement('tr')  
        employee.forEach((detail) => {
            let td = document.createElement('td')  
            td.textContent = detail  
            tr.appendChild(td) 
        });
        
        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'btn btn-danger btn-sm delete'
        let deleteTxt = document.createTextNode('X')
        deleteBtn.appendChild(deleteTxt)
        let deleteCell = document.createElement('td')
        deleteCell.appendChild(deleteBtn)
        tr.appendChild(deleteCell)
    
        tbody.appendChild(tr) 
        })

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    table.appendChild(tbody)

    // UPDATE EMPLOYEE COUNT
    empCount.textContent = `(${employees.length})`

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))

};