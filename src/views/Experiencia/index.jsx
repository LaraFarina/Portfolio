import first from "../../imgs/Trawl.png"
import second from "../../imgs/Lynq.png"

function Experiencia() {
  return (
    <>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* <!-- Portfolio Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- Portfolio Grid Items--> */}
          <div className="row justify-content-center">
            {/* <!-- Portfolio Item 1--> */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto position-relative">
                <img className="img-fluid" src={first} alt="..." />
                <div className="portfolio-item-caption">
                  <div className="caption-content">
                    <h4 className="text-white">Proyecto freelance</h4>
                    <p className="text-white mb-0">Diseñé como proyecto de 5to año, una aplicación de ayuda a personas sordas.</p>
                    <p className="text-white mb-0">Rol: UX/UI Designer</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Portfolio Item 2--> */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto position-relative">
                <img className="img-fluid" src={second} alt="..." />
                <div className="portfolio-item-caption">
                  <div className="caption-content">
                    <h4 className="text-white">Proyecto freelance</h4>
                    <p className="text-white mb-0">Diseñé una aplicación GPS.</p>
                    <p className="text-white mb-0">Rol: UI Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experiencia
