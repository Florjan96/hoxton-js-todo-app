let state ={
    todos: [
        { text:`Work out`, completed: false},
        { text: `See the doctor`, completed: true},
        { text: `Go shopping`, completed: false},
        

    ],
    showComplited: true,
}

function createTodo(text){
    let foundMachs=state.todos.some(todo=> todo.text===text)
    if (foundMachs) return

    state.todos.push({text:text, completed: false})
}
function deleteTodo(text){
    let updateteTodo= state.todos.filter(todo=>todo.text!=text)
    state.todos=updateteTodo
}
function deleteAlltodos(){
    state.todos= []
}
function toggleTodo(text) {
let match=state.todos.find(todo=>todo.text===text)
if (!match) return

match.completed!=match.completed
}

function toggleshowcompleted(){

    state.showComplited!=state.showComplited
}





function renderOptionsSection(){
let OptionsSection= document.createElement("section")
OptionsSection.classList.add("options")

let OptionsTitle=document.createElement("h3")
OptionsTitle.classList.add("section-title")
OptionsTitle.innerText="OPTIONS"
  
let OptionsLabel= document.createElement("label")

let OptionsInput= document.createElement("input")
OptionsInput.type="checkbox"

OptionsLabel.append("Show completed", OptionsInput)
OptionsSection.append(OptionsTitle, OptionsLabel)

let appEl=document.querySelector(`.app`)
appEl.append(OptionsSection)
}
 function renderApp(){
    
    let appEl=document.createElement(`div`)
    appEl.className=`app`
    document.body.append(appEl)
 }
 function renderAddItem(){
    let SectionAddItem=document.createElement("section")
    SectionAddItem.className="add-item"
    let SeSectionAddItemTitle=document.createElement("h3")
    SeSectionAddItemTitle.className=("section-tittle")
    SeSectionAddItemTitle.innerText="ADD ITEM"
 

    let SectionAddItemlabel=document.createElement("label")
    let SectionAddItemForm=document.createElement("form")

    let SectionAddItemInput=document.createElement("input")
    SectionAddItemInput.type="text"

    let SectionAddItemButton=document.createElement("button")
    SectionAddItemButton.innerText="ADD"

    SectionAddItemlabel.append(SectionAddItemForm, SectionAddItemInput, SectionAddItemButton)
    SectionAddItem.append(SeSectionAddItemTitle, SectionAddItemlabel)
    let appEl=document.querySelector(`.app`)
   appEl.append(SectionAddItem)

 }
function renderToDo(){
 let SectionToDo=document.createElement("section")

 let SectionToDoTitle=document.createElement("h2")
 SectionToDoTitle.className="section-tittle"
 SectionToDoTitle.innerText="TO DO"

 let SectionToDoUl=document.createElement("ul")
 let SectionToDoLi=document.createElement("li")
 SectionToDoLi.className="todo"
 let SectionToDoInput=document.createElement("input")
 SectionToDoInput.type="checkbox"
 let SectionToDop=document.createElement("p")
//  for(todo of state.todos){
//  SectionToDop.innerText=todo.text
//  }
 let SectionToDoButton=document.createElement("button")
 SectionToDoButton.innerText="Delete"
 SectionToDoLi.append(SectionToDoInput, SectionToDop, SectionToDoButton)

 let SectionToDoLi2=document.createElement("li")
 SectionToDoLi2.className="todo"
 let SectionToDoInput2=document.createElement("input")
 SectionToDoInput2.type="checkbox"
 let SectionToDop2=document.createElement("p")
 for(let todo of state.todos){
    SectionToDop.textContent=todo.text
    SectionToDop2.textContent=todo.text
 
    }
//  SectionToDop2.innerText="Work out"
 let SectionToDoButton2=document.createElement("button")
 SectionToDoButton2.innerText="Delete"
 SectionToDoLi2.append(SectionToDoInput2, SectionToDop2, SectionToDoButton2)

 SectionToDoUl.append(SectionToDoLi,  SectionToDoLi2)

 SectionToDo.append(SectionToDoUl)
 let appEl=document.querySelector(`.app`)
   appEl.append(SectionToDo)
}
function renderSectinCompleted(){

    let SectinCompleted= document.createElement("section")
    let SectinCompletedh2= document.createElement("h2")
    SectinCompletedh2.className="section-tittle"
    SectinCompletedh2.innerText="COMPLETED"
    let SectinCompletedUl= document.createElement("ul")
    SectinCompletedUl.className="completed-todo-list"
    let  SectinCompletedli=document.createElement("li")
    SectinCompletedli.className="todo completed"
    let  SectinCompletedInput=document.createElement("input")
    SectinCompletedInput.type="checkbox"
 let  SectinCompletedp=document.createElement("p")
 SectinCompletedp.innerText="See the doctor"
 let  SectinCompletedButton=document.createElement("button")
 SectinCompletedButton.innerText="Delete"

 SectinCompletedli.append(SectinCompletedInput,SectinCompletedp,SectinCompletedButton )
 SectinCompletedUl.append(SectinCompletedli)
 SectinCompleted.append(SectinCompletedh2, SectinCompletedUl )

 let appEl=document.querySelector(`.app`)
   appEl.append(SectinCompleted)


}
function render (){
 document.body.textContent= ``
 renderApp()
 renderOptionsSection()
 renderAddItem()
 renderToDo()
 renderSectinCompleted()

}
render ()