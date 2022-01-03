const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;



/* Modal */
const btns = document.querySelectorAll("[data-target-modal]");
const close_btns = document.querySelectorAll('.close-modal');
const overlay = document.querySelector("#overlay");

btns.forEach((btn) =>  {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.targetModal).classList.add("active");
        overlay.classList.add('active');
    });
});

close_btns.forEach((btn) =>  {
    btn.addEventListener('click', () => {
       // document.querySelector(btn.dataset.target).classList.remove("active");
        btn.closest('.modal').classList.remove("active");
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



/* ToDo */

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

    todo_div.appendChild(txt);
    todo_div.classList.add("todo");
    todo_div.setAttribute("draggable", "true");

    /** create Span */
    const span = document.createElement("span");
    const span_txt = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(span_txt);

    todo_div.appendChild(span);

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

