let tareas = [{id: 1, descripcion: "Bañar al perro", realizado: false}, {id: 2, descripcion: "Limpiar el piso", realizado: false}, {id: 3, descripcion: "Lavar la loza", realizado: false}]
let id = 4
actualizarWeb()
function agregarTarea(descripcion) {
    tareas.push({id: id, descripcion: descripcion, realizado: false})
    id = id + 1
}

document.getElementById("agregar").addEventListener("click", () =>{
    let value = document.getElementById("tarea").value
    if(value != "") {
        agregarTarea(value)
        actualizarWeb()
    }
})

function actualizarWeb() {
    let tareasDiv = document.getElementById("tareas")
    let data = ""
    tareas.forEach((item, index) => {
        data += `<div class="row">
                    <div class="col-sm-3">${item.id}</div>
                    <div class="col-sm-3">${item.descripcion}</div>
                    <div class="col-sm-3">${realizado(item.realizado, index)}</div>
                    <div class="col-sm-3"><button onclick="borrarTarea(${index})">X</button></div>
                </div>`
    })
    tareasDiv.innerHTML = data
    let total = document.getElementById("total")
    total.innerHTML = tareas.length
    let realizadas = document.getElementById("realizadas")
    realizadas.innerHTML = tareas.filter(i => i.realizado).length
}
function realizado(realizado, index){
    if(realizado) {
        return `<input type="checkbox"  checked onchange="hecho(this, ${index})">`
    } else {
        return `<input type="checkbox" onchange="hecho(this, ${index})">`
    }

}
function borrarTarea(index) {
    tareas.splice(index, 1)
    actualizarWeb()
}
function hecho(element, index) {
    tareas[index].realizado = element.checked
    actualizarWeb()

}