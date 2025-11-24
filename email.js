


document.addEventListener('DOMContentLoaded', () =>{
     if (!window.emailjs) {
        console.error('EmailJS non caricato');
        alert('EmailJS non caricato: controlla CDN/HTTPS/CSP');
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
            console.log('Funziona', response.status, response.text);
            alert('email mandata')
            form.reset();

        }catch(error){
            console.log('Non funziona', error);
           alert('email non mandata')
        }
      })

})