  import avatar from "../../imgs/soyyo.png"

function Home() {
  return (
    <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
             { <img class="masthead-avatar mb-5" src={avatar} alt="..." />}   
                <h1 class="masthead-heading text-uppercase mb-0">Lara Farina</h1>
                <div class="divider-custom divider-light"><div class="divider-custom-icon"><i class="fas fa-star"></i></div><div class="divider-custom-line3"></div></div>
                <p class="masthead-subheading font-weight-light mb-0">FullStack WebDeveloper - UX/UI Designer</p>
            </div>
        </header>
  )
};

export default Home