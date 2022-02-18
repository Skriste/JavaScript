 let laikai = document.getElementById('metulaikai');
 let body = document.querySelector('body');

        
        laikai.addEventListener('change', function () {
            let value = laikai.value;
            
            if (value === 'Žiema') {
              body.style.backgroundImage = 'url("./img/Žiema.jpg")';  
            } else if (value === 'Pavasaris') {
              body.style.backgroundImage = 'url("./img/Pavasaris.jpg")';
            } else if (value === 'Vasara') {
              body.style.backgroundImage = 'url("./img/Vasara.jpg")';
            } else {
              body.style.backgroundImage = 'url("./img/Ruduo.jpg")';
            }
            
        });