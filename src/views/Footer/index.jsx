function Footer() {
    return (
      <footer className="footer text-center">
              <div className="container">
                  <div className="row">
                      {/* <!-- Footer Location--> */}
                      <div className="col-lg-4 mb-5 mb-lg-0">
                          <p className="lead mb-0">
                                Lara Farina
                                                              <br />
                              Estudiante de Informatica - ORT Argentina
                          </p>
                      </div>
                      {/* <!-- Footer Social Icons--> */}
                      <div className="col-lg-4 mb-5 mb-lg-0">
                          <h4 className="text-uppercase mb-4">Mis redes sociales</h4>
                          <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                          <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                          <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                          <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
                      </div>
                     
                  </div>
              </div>
          </footer>
    )
  }
  
  export default Footer