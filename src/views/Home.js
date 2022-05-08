import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import img1 from "../assests/images/metals_alloys.png";
const Home = () => {
  return (
    <div className="home container-fluid p-0">
      <Header />
      <Banner />
      <div>
        <h3>Supplying to 12+ countries</h3>
        <p>All of your raw material requirements can be met in one place.</p>
        <h4>
          satisfies the needs of 100+ different product categories in multiple
          industries
        </h4>
        <p>All of your raw material requirements can be met in one place.</p>
        <div className="categorylist row row-cols-4 row-cols-md-4 g-4">
          <div class="col">
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." />
              <h5>Metals & Alloys</h5>
              <div className="card-body categorylist_button">
                <button>25K+ orders</button>
                <button>view</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." />
              <h5>Metals & Alloys</h5>
              <div className="card-body categorylist_button">
                <button>25K+ orders</button>
                <button>view</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." />
              <h5>Metals & Alloys</h5>
              <div className="card-body categorylist_button">
                <button>25K+ orders</button>
                <button>view</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." />
              <h5>Metals & Alloys</h5>
              <div className="card-body categorylist_button">
                <button>25K+ orders</button>
                <button>view</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." />
              <h5>Metals & Alloys</h5>
              <div className="card-body categorylist_button">
                <button>25K+ orders</button>
                <button>view</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." />
              <h5>Metals & Alloys</h5>
              <div className="card-body categorylist_button">
                <button>25K+ orders</button>
                <button>view</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." />
              <h5>Metals & Alloys</h5>
              <div className="card-body categorylist_button">
                <button>25K+ orders</button>
                <button>view</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." />
              <h5>Metals & Alloys</h5>
              <div className="card-body categorylist_button">
                <button>25K+ orders</button>
                <button>view</button>
              </div>
            </div>
          </div>
        </div>
        <button>view all categories</button>
      </div>
      <div>
        <h3>Why SupplyFirst</h3>
        <h5>All of your raw material requirements can be met in one place.</h5>
        <ul>
          <li>
            <h5>Easy Sampling</h5>
            <p>
              By going online, you can utilize digital marketing strategies to
              increase your reach.
            </p>
          </li>
          <li>
            <h5>large network of factories </h5>
            <p>
              By going online, you can utilize digital marketing strategies to
              increase your reach.
            </p>
          </li>
          <li>
            <h5>Reliablity</h5>
            <p>
              By going online, you can utilize digital marketing strategies to
              increase your reach.
            </p>
          </li>
          <li>
            <h5>Quality Assuarance</h5>
            <p>
              By going online, you can utilize digital marketing strategies to
              increase your reach.
            </p>
          </li>
          <li>
            <h5>Easy Sampling</h5>
            <p>
              By going online, you can utilize digital marketing strategies to
              increase your reach.
            </p>
          </li>
          <li>
            <h5>Best Prices</h5>
            <p>
              By going online, you can utilize digital marketing strategies to
              increase your reach.
            </p>
          </li>
          <li>
            <h5>Real time Order Updates </h5>
            <p>
              By going online, you can utilize digital marketing strategies to
              increase your reach.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h3>Get Started Quickly </h3>
        <p>Fastest turnaround time from sampling to Production </p>
        <ul>
          <li>
            <div className="rounded">1</div>
            <div className="">Create account</div>
          </li>
          <li>
            <div className="rounded">2</div>
            <div className="">Complete KYC </div>
          </li>
          <li>
            <div className="rounded">3</div>
            <div className="">Request Quote </div>
          </li>
          <li>
            <div className="rounded">4</div>
            <div className="">Start Production</div>
          </li>
        </ul>
      </div>
      <div className="quotes_section">
        <div className="row">
          <div className="col-6">
            <h3>Get Best Prices For 100+ Products in 24-48 Hours</h3>
            <p>
              All of your raw material requirements can be met in one place.
            </p>
          </div>
          <div className="col-6">
            <h3>Get Best Prices For 100+ Products in 24-48 Hours</h3>
            <p>
              All of your raw material requirements can be met in one place.
            </p>
          </div>
        </div>
      </div>
      <div className="supplier_network">
        <h3>Join Our supplier Netwrok </h3>
        <button>Get started</button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
