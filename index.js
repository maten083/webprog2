document.addEventListener('DOMContentLoaded', setupApp);

function setupApp(){
    document.getElementById('form-app')?.addEventListener('click',displayForm);
}

function displayForm(){
    destoryForm();

    const startTime = +new Date();

    const appElem = document.getElementById('app');
    const formElem = document.createElement('form');
    formElem.className = 'row g-3 needs-validation';
    formElem.noValidate = true;

    //form
    appElem.appendChild(formElem);
    
    //form -> div1
    formElem.appendChild(document.createElement('div'));
    formElem.lastChild.className = 'col-md-4';
    
    //form -> div1 -> label
    formElem.lastChild.appendChild(document.createElement('label'));
    formElem.lastChild.lastChild.className = 'form-label';
    formElem.lastChild.lastChild.textContent = 'First name';
    formElem.lastChild.lastChild.setAttribute = ('for', 'validationCustom01');
    
    //form -> div1 -> input
    formElem.lastChild.appendChild(document.createElement('input'));
    formElem.lastChild.lastChild.type = 'text';
    formElem.lastChild.lastChild.className = 'form-control';
    formElem.lastChild.lastChild.id = 'validationCustom01';
    formElem.lastChild.lastChild.value = 'Mark';
    formElem.lastChild.lastChild.required = true;
    
    //form -> div1 -> validation group
    formElem.lastChild.appendChild(document.createElement('div'));
    formElem.lastChild.lastChild.className = 'valid-feedback validation';
    formElem.lastChild.lastChild.textContent = 'Looks good!';
    
    //form -> div2
    formElem.appendChild(document.createElement('div'));
    formElem.lastChild.className = 'col-md-4';
    
    //form -> div2 -> label
    formElem.lastChild.appendChild(document.createElement('label'));
    formElem.lastChild.lastChild.className = 'form-label';
    formElem.lastChild.lastChild.textContent = 'Last name';
    formElem.lastChild.lastChild.setAttribute = ('for', 'validationCustom02');
    
    //form -> div2 -> input
    formElem.lastChild.appendChild(document.createElement('input'));
    formElem.lastChild.lastChild.type = 'text';
    formElem.lastChild.lastChild.className = 'form-control';
    formElem.lastChild.lastChild.id = 'validationCustom02';
    formElem.lastChild.lastChild.value = 'Otto';
    formElem.lastChild.lastChild.required = true;
    
    //form -> div2 -> validation group
    formElem.lastChild.appendChild(document.createElement('div'));
    formElem.lastChild.lastChild.className = 'valid-feedback validation';
    formElem.lastChild.lastChild.textContent = 'Looks good!';
    
    //form -> div3
    formElem.appendChild(document.createElement('div'));
    formElem.lastChild.className = 'col-md-4';
    
    //form -> div3 -> label
    formElem.lastChild.appendChild(document.createElement('label'));
    formElem.lastChild.lastChild.className = 'form-label';
    formElem.lastChild.lastChild.textContent = 'Username';
    formElem.lastChild.lastChild.setAttribute = ('for', 'validationCustomUsername');
    
    //form -> div3 -> validation group
    formElem.lastChild.appendChild(document.createElement('div'));
    formElem.lastChild.lastChild.className = 'input-group has-validation';
    
    //form -> div3 -> validation group -> span
    formElem.lastChild.lastChild.appendChild(document.createElement('span'));
    formElem.lastChild.lastChild.lastChild.className = 'input-group-text';
    formElem.lastChild.lastChild.lastChild.id = 'inputGroupPrepend';
    formElem.lastChild.lastChild.lastChild.textContent = '@';
    
    //form -> div3 -> validation group -> input
    formElem.lastChild.lastChild.appendChild(document.createElement('input'));
    formElem.lastChild.lastChild.lastChild.type = 'text';
    formElem.lastChild.lastChild.lastChild.className = 'form-control';
    formElem.lastChild.lastChild.lastChild.id = 'validationCustomUsername';
    formElem.lastChild.lastChild.lastChild.setAttribute = 'inputGroupPrepend';
    formElem.lastChild.lastChild.lastChild.required = true;
    
    //form -> div3 -> validation group -> invalid-feedback
    formElem.lastChild.lastChild.appendChild(document.createElement('div'));
    formElem.lastChild.lastChild.lastChild.className = 'invalid-feedback validation';
    formElem.lastChild.lastChild.lastChild.textContent = 'Please choose a username.';
    
    //form -> div4
    formElem.appendChild(document.createElement('div'));
    formElem.lastChild.className = 'col-md-6';
    
    //form -> div4 -> label
    formElem.lastChild.appendChild(document.createElement('label'));
    formElem.lastChild.lastChild.className = 'form-label';
    formElem.lastChild.lastChild.textContent = 'City';
    formElem.lastChild.lastChild.setAttribute = ('for', 'validationCustom03');
    
    //form -> div4 -> input
    formElem.lastChild.appendChild(document.createElement('input'));
    formElem.lastChild.lastChild.type = 'text';
    formElem.lastChild.lastChild.className = 'form-control';
    formElem.lastChild.lastChild.id = 'validationCustom03';
    formElem.lastChild.lastChild.required = true;
    
    //form -> div4 -> validation group
    formElem.lastChild.appendChild(document.createElement('div'));
    formElem.lastChild.lastChild.className = 'invalid-feedback validation';
    formElem.lastChild.lastChild.textContent = 'Please provide a valid city.';
    
    //form -> div5
    formElem.appendChild(document.createElement('div'));
    formElem.lastChild.className = 'col-md-3';
    
    //form -> div5 -> label
    formElem.lastChild.appendChild(document.createElement('label'));
    formElem.lastChild.lastChild.className = 'form-label';
    formElem.lastChild.lastChild.textContent = 'State';
    formElem.lastChild.lastChild.setAttribute = ('for', 'validationCustom04');
    
    //form -> div5 -> select
    formElem.lastChild.appendChild(document.createElement('select'));
    formElem.lastChild.lastChild.className = 'form-select';
    formElem.lastChild.lastChild.id = 'validationCustom04';
    formElem.lastChild.lastChild.required = true;
    
    //form -> div5 -> select -> option1
    formElem.lastChild.lastChild.appendChild(document.createElement('option'));
    formElem.lastChild.lastChild.lastChild.value = 'Choose...';
    formElem.lastChild.lastChild.lastChild.textContent = '...';
    
    //form -> div5 -> select -> option2
    formElem.lastChild.lastChild.appendChild(document.createElement('option'));
    formElem.lastChild.lastChild.lastChild.value = 'Choose...';
    formElem.lastChild.lastChild.lastChild.textContent = '...';
    
    //form -> div5 -> validation group
    formElem.lastChild.appendChild(document.createElement('div'));
    formElem.lastChild.lastChild.className = 'invalid-feedback validation';
    formElem.lastChild.lastChild.textContent = 'Please provide a valid state.';
    
    //form -> div6
    formElem.appendChild(document.createElement('div'));
    formElem.lastChild.className = 'col-md-3';
    
    //form -> div6 -> label
    formElem.lastChild.appendChild(document.createElement('label'));
    formElem.lastChild.lastChild.className = 'form-label';
    formElem.lastChild.lastChild.textContent = 'Zip';
    formElem.lastChild.lastChild.setAttribute = ('for', 'validationCustom05');
    
    //form -> div6 -> input
    formElem.lastChild.appendChild(document.createElement('input'));
    formElem.lastChild.lastChild.type = 'text';
    formElem.lastChild.lastChild.className = 'form-control';
    formElem.lastChild.lastChild.id = 'validationCustom05';
    formElem.lastChild.lastChild.required = true;
    
    //form -> div6 -> validation group
    formElem.lastChild.appendChild(document.createElement('div'));
    formElem.lastChild.lastChild.className = 'invalid-feedback validation';
    formElem.lastChild.lastChild.textContent = 'Please provide a valid Zip.';
    
    //form -> div7
    formElem.appendChild(document.createElement('div'));
    formElem.lastChild.className = 'col-md-12';
    
    //form -> div7 -> form-check
    formElem.lastChild.appendChild(document.createElement('div'));
    formElem.lastChild.lastChild.className = 'form-check';
    
    //form -> div7 -> form-check -> input
    formElem.lastChild.lastChild.appendChild(document.createElement('input'));
    formElem.lastChild.lastChild.lastChild.className = 'form-check-input';
    formElem.lastChild.lastChild.lastChild.type = 'checkbox';
    formElem.lastChild.lastChild.lastChild.value = '';
    formElem.lastChild.lastChild.lastChild.id = 'invalidCheck';
    formElem.lastChild.lastChild.lastChild.required = true;
    
    //form -> div7 -> form-check -> label
    formElem.lastChild.lastChild.appendChild(document.createElement('label'));
    formElem.lastChild.lastChild.lastChild.className = 'form-check-label';
    formElem.lastChild.lastChild.lastChild.setAttribute = ('for', 'invalidCheck');
    formElem.lastChild.lastChild.lastChild.textContent = 'Agree to terms and conditions';
    
    //form -> div7 -> form-check -> validation group
    formElem.lastChild.lastChild.appendChild(document.createElement('div'));
    formElem.lastChild.lastChild.lastChild.className = 'invalid-feedback validation';
    formElem.lastChild.lastChild.lastChild.textContent = 'You must agree before submitting';
    
    //form -> div8
    formElem.appendChild(document.createElement('div'));
    formElem.lastChild.className = 'col-md-12';
    
    //form -> div8 -> botton
    formElem.lastChild.appendChild(document.createElement('button'));
    formElem.lastChild.lastChild.className = 'btn btn-primary';
    formElem.lastChild.lastChild.type = 'submit';
    formElem.lastChild.lastChild.textContent = 'Submit form';
    
    formElem.addEventListener('submit', function(evt) {
        evt.preventDefault();
        const form = evt.target;
        const inputElems = form.querySelectorAll('input,select');
        
        for (let inputElem of inputElems){
            const validElem = searchValidationElem(inputElem);
            let validationMsg = 'Looks good!';
            let error = false;

            //Validation
            if (inputElem.required && !inputElem.value){
                validationMsg = 'This field is required';
                error = true;
            }

            //Set Validation div
            if (validElem){
                validElem.textContent = validationMsg;
                validElem.style.display = 'block';
                if (error){
                    validElem.classList.remove('valid-feedback');
                    validElem.classList.add('invalid-feedback');
                } else {
                    validElem.classList.remove('invalid-feedback');
                    validElem.classList.add('valid-feedback');
                }
            }
        }    
    });
    const elapsedTime = +new Date() - startTime;
    const statBarElem = document.getElementById('status'); 
    if (statBarElem) {
        statBarElem.textContent = 'form application loaded in ' + elapsedTime + 'ms';
    }
}
    function searchValidationElem(sourceElem){
        if (!sourceElem instanceof HTMLElement){
            throw new Error('No source element was provoided!');
        }
        
        if (sourceElem instanceof HTMLFormElement || !sourceElem.parentElement) {
            return null;
        }

        //Search through siblings
        const siblings = sourceElem.parentElement.children;
        for (let sibling of siblings) {
            if (sibling.classList.contains('validation')) {
                return sibling;
            }
        }

        return searchValidationElem(sourceElem.parentElement);
    }

    function destoryForm(){
        const appElem = document.getElementById('app');
        while (appElem.lastChild){
            appElem.lastChild.remove();
        }
    }