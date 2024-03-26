const apiKey = 'dMolIWcWQDFmhzxSZLUTsg==XAwJJJdqVhexmLgr';
const url = 'https://api.api-ninjas.com/v1/profanityfilter?text=';

const input = document.getElementById('textInput')
const filter = document.querySelector('#inputButton')
const censor = document.getElementById('censoredInput')
// const censored = document.querySelector('.censored')
// console.log(censored)
// console.log(censor.value)


filter.addEventListener('click',()=>{
    console.log(input.value)
    fetch(url + input.value , {
        headers: {
          'x-api-key': apiKey
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching data from API');
        }
      })
      .then(data => {
        // console.log(data);
        
        censor.value = data.censored
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
})