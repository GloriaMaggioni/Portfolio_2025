
// SERVIZIO EMAIL

document.addEventListener('DOMContentLoaded', () =>{
     if (!window.emailjs) {
        alert('EmailJS non caricato o non funzionante: in caso di bisogno, contattarmi tramite social o linkedin. Mi scuso per il disagio');
        return;
      }

      emailjs.init('wn7YiUYIqd5qU0WBz');
      const form = document.getElementById('form')
      if (!form) {
        console.error('Form non trovato');
        alert('Form non trovato: controlla id="form"');
        return;
      }


      form.addEventListener('submit', async (e) => {
        e.preventDefault();


        const data = {
           name: document.getElementById('name').value,
           surname: document.getElementById('surname').value,
           email: document.getElementById('email').value,
           cell: document.getElementById('cellNumber').value,
           message: document.getElementById('message').value
        } ;

        try{
            const response = await emailjs.send('service_ovn1pzv', 'template_j4jjp0t', data);
            alert('email mandata')
            form.reset();

        }catch(error){
           alert('email non mandata', error)
        }
      })

})