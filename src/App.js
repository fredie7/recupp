import "./App.css";
import { MdEmojiEvents } from "react-icons/md";
import { VscSymbolEvent } from "react-icons/vsc";
import { PiStudentLight } from "react-icons/pi";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="container">
          <header className="header">
            {/* <div class="box">
              <div class="inner">
                <span>RECUP</span>
              </div>
              <div class="inner">
                <span>RECUP</span>
              </div>
            </div> */}
            <p className="be_seen">WANT TO BE SEEN AT THE CAMPUS ?</p>
            <div className="option_wrapper">
              <div className="options">
                {/* <div className="for">FOR:</div> */}
                <div className="ad_options">
                  <div className="ad_icon_wrapper">
                    <div className="ad_summer_job">
                      <div className="ad_icon">
                        <PiStudentLight size={27} />
                      </div>
                      <p className="recruit">recruitment</p>
                    </div>
                    <div className="ad_events">
                      <div className="ad_icon">
                        <VscSymbolEvent size={27} />
                      </div>
                      <p className="stud_event">student events</p>
                    </div>
                    <div className="ad_summer_job">
                      <div className="ad_icon">
                        <MdEmojiEvents size={27} />
                      </div>
                      <p className="hack">hackathons</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="reach_out">
              {/* You are one step away on to reaching out to your target audience - */}
              {/* Do fill in fill-in your contact details, make your request - Let's
              make the magic happen! */}
              Sign up now to join our campaign or express your interest
              in our service!
            </p>
          </header>
          <form action="" className="form">
            <input
              type="text"
              className="company_name"
              placeholder="Enter company name"
            />
            <input
              type="email"
              className="company_email"
              placeholder="Enter company email"
            />
            <textarea
              className="ad_description"
              placeholder="What do you want to tell students right now?"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="btn">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
