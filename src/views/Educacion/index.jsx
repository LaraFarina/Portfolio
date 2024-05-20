function Educacion() {
  return (
    <section className="page-section bg-primary text-white mb-0" id="educacion">
              <div className="container">
                  {/* <!-- About Section Heading--> */}
                  <h2 className="page-section-heading text-center text-uppercase text-white">Educación</h2>
                  {/* <!-- Icon Divider--> */}
                  <div className="divider-custom divider-light">
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line6"></div>
                  </div>
                  {/* <!-- About Section Content--> */}
                  <div className="row">
                      <div className="col-lg-4 ms-auto"><p className="lead" style={{ fontWeight: 'bold' }}>Shamrock Junior College</p>
                      <p className="lead">Escuela primaria bilingue</p></div>
                      <div className="col-lg-4 me-auto"><p className="lead" style={{ fontWeight: 'bold' }}>ORT Argentina</p>
                      <p className="lead">Bachiller en Informatica con jurisdiccional en diseño de aplicaciones web y moviles</p></div>
                  </div>
              </div>
          </section>
  );
}

export default Educacion;