
// main box
let mainBox = document.createElement("div")
mainBox.classList.add("mainBox")      //mainBox.setAttribute("class","mainBox")
let p = document.createElement("p")
p.textContent = "960x360px"
mainBox.append(p)
document.body.append(mainBox)

// cards
let container = document.createElement("div")
container.classList.add("container")
let row = document.createElement("div")
row.classList.add("row")
document.body.append(container)
container.append(row)
row.innerHTML = `  <div class="col-4">
<div class="card">
        <div class="line">
            <div class="img">290x180px</div>
        </div>
        <div class="card-body">
            <h5 class="card-title"><i>Indonectetus facilis</i></h5>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, dolor ipsam!</p>
            <a href="#" class="link-button">Read more <i class="fa-solid fa-chevron-right"></i></a>
        </div>
    </div>
</div>
<div class="col-4">
<div class="card">
        <div class="line">
            <div class="img">290x180px</div>
        </div>
        <div class="card-body">
            <h5 class="card-title"><i>Indonectetus facilis</i></h5>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, dolor ipsam!</p>
            <a href="#" class="link-button">Read more <i class="fa-solid fa-chevron-right"></i></a>
        </div>
    </div>
</div>
<div class="col-4">
<div class="card">
        <div class="line">
            <div class="img">290x180px</div>
        </div>
        <div class="card-body">
            <h5 class="card-title"><i>Indonectetus facilis</i></h5>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, dolor ipsam!</p>
            <a href="#" class="link-button">Read more <i class="fa-solid fa-chevron-right"></i></a>
        </div>
    </div>
</div>`







