import './UserRegister.css'

function userregister(){
    return(
        <div className="box1">
          <div className="registrationForm">
            <h1>Registration Form</h1>
            <form action="#" method="post">
              <p>Full Name:</p>
              <input type="text" name="full name" placeholder="Full Name"></input>
              <p>Use Name:</p>
              <input type="text" name="use name" placeholder="Use Name"></input>
              <p>Phone Number:</p>
              <input type="text" name="phone number" placeholder="Phone Number"></input>
              <p>E mail:</p>
              <input type="text" name="e-mail" placeholder="E mail"></input>
              <br></br>
              <button type="Save">Save</button>
            </form>
          </div>
        </div>
    )
}
export default userregister;