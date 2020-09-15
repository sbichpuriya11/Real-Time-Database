var counter = 1;
document.getElementById('add').addEventListener('click',function(event){

    //getting the vlaue of the fields
    const name = document.getElementById('name').value,
    email = document.getElementById('email').value,
    password = document.getElementById('password').value,
    address = document.getElementById('address').value,
    city = document.getElementById('city').value,
    zip = document.getElementById('zip').value;

    //validate email
    // ValidateEmail(email);
    
    if(name==='' || email==='' || password==='' || address==='' || city==='' || zip==='')
        showError('Plase fill the required fields');

    else
        
        {
            //code for building UI for adding records
            var tbody = document.getElementById('tbody');
            var trow = document.createElement('tr');
            var tdSr = document.createElement('td');
            var tdName = document.createElement('td');
            var tdEmail = document.createElement('td');
            var tdAddress = document.createElement('td');
            var tdCity = document.createElement('td');
            var tdZip = document.createElement('td');
        
            //code for appending the text into td
            tdSr.appendChild(document.createTextNode(counter));
            tdName.appendChild(document.createTextNode(name));
            tdEmail.appendChild(document.createTextNode(email));
            tdAddress.appendChild(document.createTextNode(address));
            tdCity.appendChild(document.createTextNode(city));
            tdZip.appendChild(document.createTextNode(zip));
            
            //appending all td to tr element
            trow.append(tdSr,tdName,tdEmail,tdAddress,tdCity,tdZip);
            

            tbody.appendChild(trow);
    
        
            counter++;
            
            //after successful entry of record
            success('Thank you for filling out your information!');

            //For clearing the fields
            setFields();


        }
        
    
        
    //To prevent default action
    event.preventDefault();
});

//function to reset the fields to defaults
function setFields()
    {
    document.getElementById('name').value  = '';
    document.getElementById('email').value  = '';
    document.getElementById('password').value  = '';
    document.getElementById('address').value  = '';
    document.getElementById('city').value  = '';
    document.getElementById('zip').value  = '';    
    }


//function to  display error
function showError(e){

    var child = document.getElementById('alert').children;
    if(child.length==0)
        {
            var newElement = document.createElement('h6');
            newElement.appendChild(document.createTextNode(e));
            newElement.className = 'alert alert-danger';
            document.getElementById('alert').appendChild(newElement);
            setTimeout(function(){document.getElementById('alert').removeChild(newElement)},3000);
        }
}

//function after successive entry
function success(e){
    var child = document.getElementById('alert').children;
    if(child.length==0)
        {
            var newElement = document.createElement('h6');
            newElement.appendChild(document.createTextNode(e));
            newElement.className = 'alert alert-success';
            document.getElementById('alert').appendChild(newElement);
            setTimeout(function(){document.getElementById('alert').removeChild(newElement)},3000);
        }
}




//To validate email
function ValidateEmail(inputText)
{
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mailformat.test(inputText)== false)
        {
            showError("Please enter an valid email address!");
        }

}