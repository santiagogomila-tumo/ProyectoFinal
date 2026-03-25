 /********* Loader demorado para los links *********/

let links = document.querySelectorAll('a')
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    event.preventDefault()
    let targetUrl = this.href
    document.querySelector('body').insertAdjacentHTML('beforeend', `
      <div id="lds-ring" class="lds-ring"><div></div><div></div><div></div><div></div></div>`)
    let loader = document.querySelector(`#lds-ring`)
    loader.style.display = 'block'
    setTimeout(function() {
      window.location.href = targetUrl
    }, 1250)
  })
}


 /********* Modal para el formulario de contacto *********/

let popup = document.querySelector('#slidePopup')
let mostrar = document.querySelectorAll('.mostrarPopup')
let ocultar = document.querySelector('#cerrarPopup')

for (let i = 0; i < mostrar.length; i++) {
  mostrar[i].addEventListener('click', (event) => {
    let producto = event.target.value
    popup.querySelector('#descripcion').textContent = producto
    popup.classList.add('active')
    setTimeout(() => {
      popup.classList.remove('active')
    }, 2000)
  })
}

ocultar.addEventListener('click', () => {
    popup.classList.remove('active')
})


 /********* Modal para el formulario de contacto *********/

document.querySelector('#contacto_form').addEventListener('submit', function(event) {
  event.preventDefault()
  document.querySelector('body').insertAdjacentHTML('beforeend', `
    <div id="contacto-modal" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body contacto_info text- center">
            <h2>Tu consulta ha sido enviada<br></h2>
            <p>En breve uno de nuestros coaches<br>te va a contactar.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>`)
  let myModal = new bootstrap.Modal(document.getElementById('contacto-modal'))
  let modalToggle = document.getElementById('contacto-modal')
  myModal.show(modalToggle)
  document.querySelector('#contacto_form').reset()
})