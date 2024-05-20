function Contacto() {
    return (
      <section className="page-section" id="contact">
              <div className="container">
                  <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contactame</h2>
                  <div className="divider-custom">
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line7"></div>
                  </div>
                  <div className="row justify-content-center">
                      <div className="col-lg-8 col-xl-7">
                    
                          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                              <div className="form-floating mb-3">
                                  <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                  <label for="name">Nombre completo</label>
                                  <div className="invalid-feedback" data-sb-feedback="name:required">Se requiere un nombre.</div>
                              </div>
                              <div className="form-floating mb-3">
                                  <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                  <label for="email">Dirección email</label>
                                  <div className="invalid-feedback" data-sb-feedback="email:required">Se requiere un email.</div>
                                  <div className="invalid-feedback" data-sb-feedback="email:email">El email no es valido.</div>
                              </div>
                              <div className="form-floating mb-3">
                                  <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                  <label for="phone">Número de telefono</label>
                                  <div className="invalid-feedback" data-sb-feedback="phone:required">Se requiere un número de telefono.</div>
                              </div>
                              <div className="form-floating mb-3">
                                  <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required"></textarea>
                                  <label for="message">Mensaje</label>
                                  <div className="invalid-feedback" data-sb-feedback="message:required">Se requiere un mensaje.</div>
                              </div>
                          
                              <div className="d-none" id="submitSuccessMessage">
                                  <div className="text-center mb-3">
                                      <div className="fw-bolder">Se ha enviado el formulario satisfactoriamente!</div>
                                      Para activar este formulario, inicia sesión en 
                                      <br />
                                      <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                  </div>
                              </div>
                              
                              <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                              <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Enviar</button>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
    )
  }
  
  export default Contacto