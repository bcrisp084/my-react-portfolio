import React from 'react';
import '../css/style.css';
const Contact=()=>{
    return(
        <main class="container about-me">
        <div class="row">
            <div class="col-sm-12">

                <h1 class="about-me-color" id="header">Contact Me</h1>
                <hr/>
                <form>
                    <section class="form-group form-check margin_set">
                        <label for="form_name" style={{color: 'white',float:"left",fontSize:"18px"}}>Name</label>
                        <input type="text" class="form-control" placeholder="name" required="required"/>
                    </section>
                    <section class="form-group form-check margin_set">
                        <label for="exampleInputEmail1" style={{color: 'white',float:"left",fontSize:"18px"}}>Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            required="required" placeholder="email"/>
                    </section>
                    <section class="form-group form-check margin_set">
                        <label for="form_message" style={{color: 'white', float:"left",fontSize:"18px"}}>Message </label>
                        <textarea id="form_message" name="message" class="form-control" placeholder="message" rows="4"
                            required="required" data-error="Please,leave us a message."></textarea>
                    </section>
                    <button type="submit" class="btn btn-info button_margin" style={{backgroundColor: 'blue'}}>Submit</button>
                </form>
            </div>
        </div>
    </main> 
    )
}

export default Contact;