
function Educacion() {
    return (
      <section className="page-section bg-primary text-white mb-0" id="educacion">
              <div className="container">
                  {/* <!-- About Section Heading--> */}
                  <h2 className="page-section-heading text-center text-uppercase text-white">Educación</h2>
                  {/* <!-- Icon Divider--> */}
                  <div className="divider-custom divider-light">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                  </div>
                  {/* <!-- About Section Content--> */}
                  <div class="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
                    <div class="w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 hover:bg-slate-50 hover:scale-105 link">
                      <h1 class="text-3xl">Ort Argentina - Informatica</h1>
                      <p class="mt-5 opacity-40 text-xl">Bachiller en informatica con jurisdiccional en diseño y desarrollo de aplicaciones web y moviles.</p>
                      </div>
                      
                      <div class="w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 hover:bg-slate-50 hover:scale-105 link">
                        <h1 class="text-3xl">Shamrock Junior College</h1>
                        <p class="mt-5 opacity-40 text-xl">Escuela primaria bilingue.</p>
                        </div>
                        
                        
                          
                            </div>    
              </div>
          </section>
    )
  }
  
  export default Educacion