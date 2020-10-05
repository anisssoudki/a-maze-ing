function renderForm() {
  
  const loginForm = document.createElement('form')
  loginForm.setAttribute("id","loginForm")
  
  const signUpForm = document.createElement('form')
  signUpForm.setAttribute("id","signUpForm")
  
  const signInDiv = document.createElement('div')
  signInDiv.setAttribute("id", "signInDiv")
  document.body.appendChild(signInDiv)
  signInDiv.appendChild(loginForm)
  signInDiv.appendChild(signUpForm)
  
  
  const signInButton = document.createElement('button')
  signInButton.setAttribute("id", "signInButton")
  signInButton.innerText = `sign_in`
  loginForm.appendChild(signInButton)
  
  
  const signUpButton = document.createElement('button')
  signUpButton.setAttribute("id", "signUpButton")
  signUpButton.innerText = `sign_up`
  signUpForm.appendChild(signUpButton)
  
  
  signInButton.addEventListener('click', event => {
      let signInDiv = event.target.parentElement;
      signInDiv.innerHTML = `<form id="loginForm"> 
        <label> PlayerName </label>
        <input name="name" type="text" placeholder="PlayerName">
        <button id="signInBtn" type="submit">Submit</button>
      </form>`;
  
    });
  
    signUpButton.addEventListener('click', event => {
      event.preventDefault()
      let signInDiv = event.target.parentElement;
      signInDiv.innerHTML = `<form id="signUpForm"> 
        <label> NewPlayerName </label>
        <input name="name" type="text" placeholder="NewPlayerName">
        <button id="signUpBtn" type="submit">Submit</button>
      </form>`;
  });
  
}

