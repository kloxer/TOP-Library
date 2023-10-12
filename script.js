
const library = []; // add book objects to this array

function Book(title,author,pages,read){
    this.title = title;
    this.author=  author;
    this.pages = pages;
    this.read = read;

    this.bookInfo = function (){
        return "Title: "+ this.title + " Author: " + this.author + " Pages: " + this.pages + " Read?: " +this.read    
    }


}

//Find body
const selector = document.querySelector("body");


//top Cols = Book Name, Author, Pages, Read <- First row
const ob1 = new Book("Percy Jackson", "Jk rowling", "145 pages", "Yes");
const ob2 = new Book("Percy Jackson 2", "Jk rowling 2", "145 pages", "Yes");
library.push(ob1);
library.push(ob2);


function createTable(){
//create table, and start adding stuff to it 
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const td = document.createElement("th");
    td.textContent = "Book Name";
    td.scope = 'col'
    const td2 = document.createElement("th");
    td2.textContent = "Author";
    const td3 = document.createElement("th");
    td3.textContent = "Number of Pages:";
    const td4 = document.createElement("th");
    td4.textContent = "Read(Yes/No)";
    const td5 = document.createElement("th");
    td5.textContent = "Delete";
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    thead.appendChild(tr);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    for (let i = 0; i < library.length; i++) {
        const element = library[i];
        console.log(library.length);

        //Start with a new row, tr
        const tr = document.createElement("tr");

        //create a new value
        j = document.createElement("td");
        j.textContent = element.title
        tr.appendChild(j);
    
        j = document.createElement("td");
        j.textContent = element.author;
        tr.appendChild(j);

        j = document.createElement("td");
        j.textContent =element.pages;
        tr.appendChild(j);

        j = document.createElement("td");
        j.textContent =element.read;
        tr.appendChild(j);

        x = document.createElement("td");
        y= document.createElement("button");
        y.textContent="Delete";
        y.id= i;


        x.append(y);

        tr.append(x);

        console.log(element.title + element.author + element.pages + element.read);
        console.log(element.bookInfo())
        tbody.appendChild(tr);

        //remove book here if clicked
        y.addEventListener('click', function(){
            tbody.removeChild(tr);

            const index = library.indexOf(y.id);
            console.log("yid and name " + y.id + library[y.id].name);
            library.splice(y.id, 1); // 2nd parameter means remove one item only
            console.log("SPLICE");

            console.log(library);
            
        });

    }
    table.appendChild(tbody);
    selector.appendChild(table);

}



const button = document.createElement("button");
button.textContent = "NEW BOOK";
selector.appendChild(button);

generateForm();
const buttonlistener = button.addEventListener('click', showDiag);
const diag = document.getElementById("formdiag");


function generateForm(){
    const dialog = document.createElement("dialog");
    dialog.id='formdiag';
    const form = document.createElement("form");
    form.action=  '';
    form.method = 'post';
    generateLabelAndInput(form, "Name", "inputName");
    generateLabelAndInput(form, "Author", "inputAuthor");
    generateLabelAndInput(form, "Pages", "inputPages");
    generateLabelAndInput(form, "Read", "inputRead");
    
    const submitbutton = document.createElement("button");
    submitbutton.type = 'submit';
    submitbutton.textContent="SUBMIT";
    form.appendChild(submitbutton);

    dialog.appendChild(form);
    selector.appendChild(dialog);
    
    //diag is closed below
    const submitbuttonlistener = submitbutton.addEventListener('click', addObjs);


}

function showDiag(){
    diag.showModal();
}


//so I don't have to be repetitive
function generateLabelAndInput(form, labelName,inputName){
    const label = document.createElement("label");
    label.label = labelName;
    label.textContent= labelName;
    const input =document.createElement("input");
    input.name=inputName;
    form.appendChild(label);
    form.appendChild(input);

}

//Once submit is hit from form, do the following below
function addObjs(event){
    event.preventDefault(); //prevent button default
    diag.close();//close the diag before doing rest
    const findTable = document.querySelector("table");
    if (findTable){
        selector.removeChild(findTable);

    }

    const book = document.querySelector('input[name="inputName"]');
    const author = document.querySelector('input[name="inputAuthor"]')
    const pages = document.querySelector('input[name="inputPages"]')
    const read = document.querySelector('input[name="inputRead"]')
    let x = new Book(book.value, author.value, pages.value, read.value);
    library.push(x);
    createTable();

    // const findForm = document.querySelector("form");
    // if (findForm){
    //     selector.removeChild(findForm);
    // }

}


// createTable();

// let x = prompt("Enter a book:");