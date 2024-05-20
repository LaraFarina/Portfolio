function AcercaDeMi() {
    return (
      <section className="page-section bg-primary text-white mb-0" id="about">
              <div className="container">
                  {/* <!-- About Section Heading--> */}
                  <h2 className="page-section-heading text-center text-uppercase text-white">Sobre mí</h2>
                  {/* <!-- Icon Divider--> */}
                  <div className="divider-custom divider-light">
                      <div className="divider-custom-line1"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line2"></div>
                  </div>
                  {/* <!-- About Section Content--> */}
                  <div className="row">
                      <div className="col-lg-4 ms-auto"><p className="lead">¡Hola! Soy Lara Farina, tengo 17 años y resido en la ciudad autonoma de Buenos Aires.</p></div>
                      <div className="col-lg-4 me-auto"><p className="lead">Una apasionada Fullstack Web Developer y Diseñadora de Experiencias e Interfaces (UX/UI) con un enfoque en la creación de piezas creativas y limpias. Mi objetivo es desarrollar productos digitales únicos que cautiven a los usuarios. Con experiencia en trabajar en equipo, me adapto fácilmente a diversos entornos laborales. Estoy comprometida con la excelencia y la innovación en cada proyecto en el que participo.</p></div>
                  </div>
                  {/* <!-- About Section Button--> */}
                  <div className="text-center mt-4">
                      <a className="btn btn-xl btn-outline-light" href="#!">
                          <i className="fas fa-download me-2"></i>
                          Descargar CV!
                      </a>
                  </div>
              </div>
          </section>
    )
  }
  
  export default AcercaDeMi