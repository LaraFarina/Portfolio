import first from "../../imgs/html.png";
import second from "../../imgs/css.png";
import third from "../../imgs/.net.png";
import fourth from "../../imgs/js.png";
import fifth from "../../imgs/reactt.png";
import six from "../../imgs/figma.png";
import seven from "../../imgs/sql.png";
import eight from "../../imgs/boostrappp.png"; 
import nine from "../../imgs/Python.png";
import ten from "../../imgs/postman.jpg";
import eleven from "../../imgs/github.png";



function Conocimientos() {
  return (
    <section className="page-section portfolio" id="conocimientos">
      <div className="container">
        {/* <!-- About Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Conocimientos</h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Portfolio Grid Items--> */}
        <div className="row justify-content-center align-items-center">
          {/* <!-- Portfolio Item 1--> */}
          <div className="col-md-2 col-lg-2 mb-5">
            <div className="portfolio-item mx-auto">
              <img className="img-fluid portfolio-img" src={first} alt="..." />
            </div>
          </div>
          {/* <!-- Portfolio Item 2--> */}
          <div className="col-md-2 col-lg-2 mb-5">
            <div className="portfolio-item mx-auto">
              <img className="img-fluid portfolio-img" src={second} alt="..." />
            </div>
          </div>
          {/* <!-- Portfolio Item 3--> */}
          <div className="col-md-2 col-lg-2 mb-5">
            <div className="portfolio-item mx-auto">
              <img className="img-fluid portfolio-img" src={third} alt="..." />
            </div>
          </div>
          {/* <!-- Portfolio Item 4--> */}
          <div className="col-md-2 col-lg-2 mb-5">
            <div className="portfolio-item mx-auto">
              <img className="img-fluid portfolio-img" src={fourth} alt="..." />
            </div>
          </div>
          {/* <!-- Portfolio Item 5--> */}
          <div className="col-md-2 col-lg-2 mb-5">
            <div className="portfolio-item mx-auto">
              <img className="img-fluid portfolio-img" src={fifth} alt="..." />
            </div>
          </div>
          {/* <!-- Portfolio Item 6--> */}
          <div className="col-md-2 col-lg-2 mb-5">
            <div className="portfolio-item mx-auto">
              <img className="img-fluid portfolio-img" src={six} alt="..." />
            </div>
          </div>
          {/* <!-- Portfolio Item 7--> */}
          <div className="col-md-2 col-lg-2">
            <div className="portfolio-item mx-auto">
              <img className="img-fluid portfolio-img" src={seven} alt="..." />
            </div>
          </div>
          {/* <!-- Portfolio Item 8--> */}
          <div className="col-md-2 col-lg-2 mb-5">
            <div className="portfolio-item mx-auto">
              <img className="img-fluid portfolio-img" src={eight} alt="..." />
            </div>
          </div>
           {/* <!-- Portfolio Item 9--> */}
           <div className="col-md-2 col-lg-2 mb-5">
            <div className="portfolio-item mx-auto">
              <img className="img-fluid portfolio-img" src={nine} alt="..." />
            </div>
          </div>
          {/* <!-- Portfolio Item 10--> */}
          <div className="col-md-2 col-lg-2 mb-5">
            <div className="portfolio-item mx-auto">
              <img className="img-fluid portfolio-img" src={ten} alt="..." />
            </div>
          </div>
           {/* <!-- Portfolio Item 11--> */}
           <div className="col-md-2 col-lg-2 mb-5">
            <div className="portfolio-item mx-auto">
              <img className="img-fluid portfolio-img" src={eleven} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conocimientos;
