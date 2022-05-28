import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import img1 from "../assests/images/metals_alloys.png";
import icon1 from "../assests/icons/icon-1.png";
import icon2 from "../assests/icons/icon-2.png";
import icon3 from "../assests/icons/icon-3.png";
import icon4 from "../assests/icons/icon-4.png";
import icon5 from "../assests/icons/icon-5.png";
import icon6 from "../assests/icons/icon-6.png";
const Home = () => {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <div className="home container-fluid p-0">
      <Header />
      <Banner />
      <div className="d-flex flex-column">
        <div className="d-flex flex-column text-center py-5">
          <h3 className="font-weight-bold">Supplying to 12+ countries</h3>
          <p>All of your raw material requirements can be met in one place.</p>
          <div className="">
            <div>
              <span>1000+</span>
              <span>Registered SMEs</span>
            </div>
            <div>
              <span>500+</span>
              <span>Cities</span>
            </div>
            <div>
              <span>10000+</span>
              <span>Transactions</span>
            </div>
          </div>
          <h4 className="font-weight-bold">
            Satisfies the needs of 100+ different product categories in multiple
            industries
          </h4>
          <p>All of your raw material requirements can be met in one place.</p>
        </div>
        <div>
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
      </div>
      <div className="supplyfirst">
        <h3>Why SupplyFirst</h3>
        <h5>All of your raw material requirements can be met in one place.</h5>
        <div className="supplyfirst_list">
          <div className="supplyfirst_listItem">
            <div className="supplyfirst_icon">
              <img src={icon1} class="card-img-top" alt="..." />
            </div>
            <h5>Easy Sampling</h5>
            <p>
              By going online, you can utilize digital marketing strategies to
              increase your reach.
            </p>
          </div>
          <div className="supplyfirst_listItem">
            <div className="supplyfirst_icon">
              <img src={icon2} class="card-img-top" alt="..." />
            </div>
            <h5>large network of factories </h5>
            <p>
              By going online, you can utilize digital marketing strategies to
              increase your reach.
            </p>
          </div>
          <div className="supplyfirst_listItem">
            <div className="supplyfirst_icon">
              <img src={icon3} class="card-img-top" alt="..." />
            </div>
            <h5>Reliablity</h5>
            <p>
              By going online, you can utilize digital marketing strategies to
              increase your reach.
            </p>
          </div>
          <div className="supplyfirst_listItem">
            <div className="supplyfirst_icon">
              <img src={icon4} class="card-img-top" alt="..." />
            </div>
            <h5>Quality Assuarance</h5>
            <p>
              By going online, you can utilize digital marketing strategies to
              increase your reach.
            </p>
          </div>
          <div className="supplyfirst_listItem">
            <div className="supplyfirst_icon">
              <img src={icon5} class="card-img-top" alt="..." />
            </div>
            <h5>Best Prices</h5>
            <p>
              By going online, you can utilize digital marketing strategies to
              increase your reach.
            </p>
          </div>
          <div className="supplyfirst_listItem">
            <div className="supplyfirst_icon">
              <img src={icon6} class="card-img-top" alt="..." />
            </div>
            <h5>Real time Order Updates </h5>
            <p>
              By going online, you can utilize digital marketing strategies to
              increase your reach.
            </p>
          </div>
        </div>
      </div>
      <div className="process">
        <h3>Get Started Quickly </h3>
        <p>Fastest turnaround time from sampling to Production </p>
        <div className="process_lists">
          <div className="process_list">
            <div className="rounded_effect">1</div>
            <div className="">Create account</div>
          </div>
          <div className="process_list">
            <div className="rounded_effect">2</div>
            <div className="">Complete KYC </div>
          </div>
          <div className="process_list">
            <div className="rounded_effect">3</div>
            <div className="">Request Quote </div>
          </div>
          <div className="process_list">
            <div className="rounded_effect">4</div>
            <div className="">Start Production</div>
          </div>
        </div>
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
