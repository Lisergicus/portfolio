/* Modal */
const btns = document.querySelectorAll("[data-target-modal]");
const close_btns = document.querySelectorAll('.close-modal');
const overlay = document.querySelector("#overlay");

btns.forEach((btn) =>  {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.targetModal).classList.add("active");
        overlay.classList.add('active');
        console.log("funziona");
    });
});

close_btns.forEach((btn) =>  {
    btn.addEventListener('click', () => {
        // document.querySelector(btn.dataset.target).classList.remove("active");
        btn.closest('.modalL').classList.remove("active");
        overlay.classList.remove('active');
    });
});

window.onclick = (event) => {
    if(event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove('active'));
        overlay.classList.remove('active');
    }
};
/** NavBar  */


/** Active Icon */
const icon_core = document.querySelectorAll(".icon-core");

function click_attivo(ele){
    const idd = ele.id;
    console.log(ele);
    console.log(idd);

    if(document.getElementById(idd).style.opacity == 1){
        document.getElementById(idd).style.opacity = 0.4;
    } else {
        document.getElementById(idd).style.opacity = 1;
    }
}



/* ToDo */
const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
    todo.addEventListener("dragstart", dragStart);
    todo.addEventListener("draged", dragEnd);
});


function dragStart() {
    draggableTodo = this;
    
    console.log("dragStart")    
}

function dragEnd() {
    draggableTodo = null;
    
    console.log("dragEnd")
}

all_status.forEach((status) =>{
    status.addEventListener('dragover', dragOver);
    status.addEventListener('dragenter', dragEnter);
    status.addEventListener('dragleave', dragLeave);
    status.addEventListener('drop', dragDrop);
    
})

function dragOver(e) {
    e.preventDefault();
 //   console.log("dragOver")
}

function dragEnter() {
    this.style.border = "1px dashed #ccc";
    console.log("dragEnter")
}

function dragLeave() {
    this.style.border = "none";
    console.log("dragLeave")
}

function dragDrop() {
    this.style.border = "none";
    this.appendChild(draggableTodo);
}

/** Creat todo */
const todo_submit = document.getElementById('todo_submit');

todo_submit.addEventListener('click', createTodo);

function createTodo(){
    const todo_div = document.createElement("div");
    const input_val = document.getElementById("todo_input").value;
    const txt = document.createTextNode(input_val);

    
    todo_div.classList.add("todo");
    todo_div.setAttribute("draggable", "true");

    /** create Span */
    const span = document.createElement("span");
    const span_txt = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(span_txt);

    todo_div.appendChild(span);

    /** Creare icone */

        const span1 = document.createElement("span");
        const colonna3 = document.createAttribute("class");
        colonna3.value = "col-6";
        span1.setAttributeNode(colonna3);

        span1.appendChild(txt);

        todo_div.appendChild(span1);

        const span2 = document.createElement("span");
        const attIconCore = document.createAttribute("class");
        attIconCore.value = "icon-core col-1";
        span2.setAttributeNode(attIconCore);

        const p2 = document.createElement("p");
        const attOnclickIcon = document.createAttribute("onclick");
        attOnclickIcon.value = "click_attivo(this)";

        const theId = document.createAttribute("id");
        theId.value = Math.round(Math.random() * 10000000);
        p2.setAttributeNode(theId);

        p2.setAttributeNode(attOnclickIcon);
        span2.appendChild(p2);

        const img2 = document.createElement("img");
        const srcClass= document.createAttribute("src");
        srcClass.value = "img/icons8-spada-50.png";
        img2.setAttributeNode(srcClass);
        p2.appendChild(img2);

        todo_div.appendChild(span2);

        /** icona 3 */

        const span3 = document.createElement("span");
        const attIconCore3 = document.createAttribute("class");
        attIconCore3.value = "icon-core col-1";
        span3.setAttributeNode(attIconCore3);

        const p3 = document.createElement("p");
        const attOnclickIcon3 = document.createAttribute("onclick");
        attOnclickIcon3.value = "click_attivo(this)";
        const theId3 = document.createAttribute("id");
        theId3.value = Math.round(Math.random() * 10000000);
        p3.setAttributeNode(theId3);
        p3.setAttributeNode(attOnclickIcon3);
        span3.appendChild(p3);

        const img3 = document.createElement("img");
        const srcClass3= document.createAttribute("src");
        srcClass3.value = "img/icons8-scudo-48.png";
        img3.setAttributeNode(srcClass3);
        p3.appendChild(img3);

        todo_div.appendChild(span3);

        /** icona 4 */

        const span4 = document.createElement("span");
        const attIconCore4 = document.createAttribute("class");
        attIconCore4.value = "icon-core col-1";
        span4.setAttributeNode(attIconCore4);

        const p4 = document.createElement("p");
        const attOnclickIcon4 = document.createAttribute("onclick");
        attOnclickIcon4.value = "click_attivo(this)";
        const theId4 = document.createAttribute("id");
        theId4.value = Math.round(Math.random() * 10000000);
        p4.setAttributeNode(theId4);
        p4.setAttributeNode(attOnclickIcon4);
        span4.appendChild(p4);

        const img4 = document.createElement("img");
        const srcClass4= document.createAttribute("src");
        srcClass4.value = "img/icons8-halloween-costume-50.png";
        img4.setAttributeNode(srcClass4);
        p4.appendChild(img4);

        todo_div.appendChild(span4);

        /** icona 5 */

        const span5 = document.createElement("span");
        const attIconCore5 = document.createAttribute("class");
        attIconCore5.value = "icon-core col-1";
        span5.setAttributeNode(attIconCore5);

        const p5 = document.createElement("p");
        const attOnclickIcon5 = document.createAttribute("onclick");
        attOnclickIcon5.value = "click_attivo(this)";
        const theId5 = document.createAttribute("id");
        theId5.value = Math.round(Math.random() * 10000000);
        p5.setAttributeNode(theId5);
        p5.setAttributeNode(attOnclickIcon5);
        span5.appendChild(p5);

        const img5 = document.createElement("img");
        const srcClass5= document.createAttribute("src");
        srcClass5.value = "img/icons8-strega-60.png";
        img5.setAttributeNode(srcClass5);
        p5.appendChild(img5);

        todo_div.appendChild(span5);

        /** icona 5 */

        const span6 = document.createElement("span");
        const attIconCore6 = document.createAttribute("class");
        attIconCore6.value = "icon-core col-1";
        span6.setAttributeNode(attIconCore6);

        const p6 = document.createElement("p");
        const attOnclickIcon6 = document.createAttribute("onclick");
        attOnclickIcon6.value = "click_attivo(this)";
        const theId6 = document.createAttribute("id");
        theId6.value = Math.round(Math.random() * 10000000);
        p6.setAttributeNode(theId6);
        p6.setAttributeNode(attOnclickIcon6);
        span6.appendChild(p6);

        const img6 = document.createElement("img");
        const srcClass6= document.createAttribute("src");
        srcClass6.value = "img/icons8-spada-50.png";
        img6.setAttributeNode(srcClass6);
        p6.appendChild(img6);

        todo_div.appendChild(span6);





        const spanN = document.createElement("span");
        const colonna1 = document.createAttribute("class");
        colonna1.value = "col-1";
        spanN.setAttributeNode(colonna1);

        todo_div.appendChild(spanN);


        /** fine creare icone */
        


    no_status.appendChild(todo_div);

    todo_div.addEventListener("dragstart", dragStart);
    todo_div.addEventListener("draged", dragEnd);

    document.getElementById("todo_input").value = "";
    todo_form.classList.remove('active');
    overlay.classList.remove('active');

    const close_btns = document.querySelectorAll(".close");

    close_btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.parentElement.style.display = "none";
        });
    });
}

