import React, { useEffect } from 'react';
import './form.css'; 

function Form() {
    useEffect(() => {
      // Place the JavaScript code here
      const clickBtn = document.getElementById('clickbtn');
      const hideDiv = document.getElementById('qwe');
      const hideForm = document.getElementById('fillForm');
      const goHome = document.getElementById('home');
  
      const submitBtn = document.getElementById('submitBtn');
      const formResult = document.getElementById('formResult');
      const resultTable = document.getElementById('resultTable');
  
      goHome.addEventListener('click', function() {
        window.location.href = 'index.html';
      });
  
      clickBtn.addEventListener('click', function() {
        hideDiv.style.display = 'flex';
        clickBtn.style.display = 'none';
      });
  
      submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission and page refresh
        hideForm.style.display = 'none';
  
        // Collect form data
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const email = document.getElementById('mail').value;
        const mob = document.getElementById('mob').value;
        const disc = document.getElementById('disc').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('male').checked ? 'Male' : 'Female';
        const city = document.getElementById('citys').value;
        const car = document.getElementById('cars').value;
  
        if (
          firstName.trim() === '' ||
          lastName.trim() === '' ||
          mob.trim() === '' ||
          email.trim() === '' ||
          disc.trim() === '' ||
          dob.trim() === ''
        ) {
          alert('Please fill in all required fields.');
          return;
        }
  
        // Display form data
        resultTable.innerHTML = `
          <tr>
              <th>First Name:</th>
              <td>${firstName}</td>
          </tr>
          <tr>
              <th>Last Name:</th>
              <td>${lastName}</td>
          </tr>
          <tr>
              <th>Email:</th>
              <td>${email}</td>
          </tr>
          <tr>
              <th>Mobile:</th>
              <td>${mob}</td>
          </tr>
          <tr>
              <th>Date of Birth:</th>
              <td>${dob}</td>
          </tr>
          <tr>
              <th>Gender:</th>
              <td>${gender}</td>
          </tr>
          <tr>
              <th>Description:</th>
              <td>${disc}</td>
          </tr>
          <tr>
              <th>City:</th>
              <td>${city}</td>
          </tr>
          <tr>
              <th>Car:</th>
              <td>${car}</td>
          </tr>
      `;
  
        hideDiv.style.display = 'none';
        formResult.style.display = 'flex';
        formResult.style.flexDirection = 'column';
        formResult.style.justifyContent = 'center';
      });
    }, []);
  
    return (
      <>
       <div
                    id="fillForm"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <h1>Fill this form </h1>
                </div>
                <div className="qwe" id="qwe">
                    <form action="" method="post">
                        <label className="required-field" htmlFor="fname">
                            First name
                        </label>
                        <br />
                        <input
                            type="text"
                            placeholder="enter your first name"
                            name="fname"
                            id="fname"
                            required=""
                        />{" "}
                        <br />
                        <label className="required-field" htmlFor="lname">
                            Last name
                        </label>
                        <br />
                        <input
                            type="text"
                            placeholder="enter your last name"
                            name="lname"
                            id="lname"
                            required=""
                        />{" "}
                        <br />
                        <label className="required-field" htmlFor="mail">
                            Mail
                        </label>
                        <br />
                        <input
                            type="email"
                            name="mail"
                            id="mail"
                            placeholder="xyz@abc.com"
                            required=""
                        />
                        <br />
                        <label className="required-field" htmlFor="mob">
                            Mobile
                        </label>
                        <br />
                        <input type="text" name="mob" id="mob" placeholder={1234567890} />
                        <br />
                        <label htmlFor="dob">DOB</label>
                        <br />
                        <input type="date" name="dob" id="dob" required="" /> <br />
                        <label htmlFor="gender">Gender</label>
                        <br />
                        <input type="radio" name="gender" id="male" />
                        Male
                        <input type="radio" name="gender" id="female" />
                        Female <br />
                        <label className="required-field" htmlFor="disc">
                            Description
                        </label>
                        <br />
                        <input
                            type="text"
                            placeholder="Tell us something about yourself"
                            name="disc"
                            id="disc"
                        />
                        <br />
                        <label htmlFor="city">City</label>
                        <br />
                        <input list="city" name="city" id="citys" />
                        <br />
                        <br />
                        <label htmlFor="ques">What car do you drive</label>
                        <select name="cars" id="cars">
                            <option value="VW">VW</option>
                            <option value="Suzuki">Suzuki</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <datalist id="city">
                            <option value="delhi">Delhi</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Goa">Goa</option>
                            <option value="Punjab">Punjab</option>
                        </datalist>
                        <br />
                        <br />
                        <div className="btn">
                            <button type="submit" id="submitBtn">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <button id="clickbtn">Show the form</button>
                <div id="formResult" style={{ display: "none" }}>
                    <h2 style={{ display: "flex", justifyContent: "center" }}>
                        Form Submission Result
                    </h2>
                    <br />
                    <br />
                    <table id="resultTable">
                        {/* Form data will be displayed here */}
                    </table>
                    <button id="home">Go back to home </button>
                </div>
      </>
    );
  }
  
  export default Form;
  