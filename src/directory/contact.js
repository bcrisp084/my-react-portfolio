import React from 'react';
import '../css/style.css';
const Contact=()=>{
    return(
        <main className="container about-me">
        <div className="row">
            <div className="col-sm-12">

                <h1 className="about-me-color" id="header">Contact Me</h1>
                <hr/>
                <form>
                    <section className="form-group form-check margin_set">
                        <label form="form_name" style={{color: 'white',float:"left",fontSize:"18px"}}>Name</label>
                        <input type="text" className="form-control" placeholder="name" required="required"/>
                    </section>
                    <section className="form-group form-check margin_set">
                        <label form="exampleInputEmail1" style={{color: 'white',float:"left",fontSize:"18px"}}>Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            required="required" placeholder="email"/>
                    </section>
                    <section className="form-group form-check margin_set">
                        <label form="form_message" style={{color: 'white', float:"left",fontSize:"18px"}}>Message </label>
                        <textarea id="form_message" name="message" className="form-control" placeholder="message" rows="4"
                            required="required" data-error="Please,leave us a message."></textarea>
                    </section>
                    <button type="submit" className="btn btn-info button_margin" style={{backgroundColor: 'blue'}}>Submit</button>
                </form>
            </div>
        </div>
    </main> 
    )
}

export default Contact;