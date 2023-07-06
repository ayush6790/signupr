import React from "react";
import './form.css';


export default function form() {
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
