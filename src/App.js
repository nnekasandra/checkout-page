import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import { faGlobeAfrica} from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard} from '@fortawesome/free-solid-svg-icons'
class Form extends React.Component{
    render(){
        return(
          <section className="main">
            <h2>Checkout</h2>
            <p>Contact infomation</p>
            <div className="contact">
              <div className="one">
                <form>
                  <label for ="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your Email..." className="input-field" />
              </form>
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope}  className="icon1"/>
              </div>
              </div>
              <div>
                <form>
                  <label for ="number">Phone</label>
                  <input type="number" id="number" placeholder="Enter your phone..." />
                </form>
                <div className="icon">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>  
              </div>
            </div>
            <div className="address">
              <p>Shipping address</p>
              <form>
                <div>
                  <label for="fullname">Full Name</label>
                  <input type="text" id="fullname" placeholder="Rodney Cotton"/>
                  <div className="icon">
                    <FontAwesomeIcon icon={faUserCircle}/>
                  </div>
                </div>
                <div>
                  <label for="address">Address</label>
                  <input type="text" id="address" placeholder="Your address..."/>
                <div className="icon">
                  <FontAwesomeIcon icon={ faHome}/>
                </div>
                </div>
                <div>
                  <label for="city">City</label>
                  <input type ="text" id="city" placeholder="Your city..."/>
                  <div className="icon">
                    <FontAwesomeIcon icon={ faCity}/>
                  </div>
                </div>
                <div className='lowerSection'>
                  <div>
                    <label for="country">Country</label>
                    <input type ="country" className="input" id="country" placeholder="Your country..."/>
                    <div className="icon">
                      <FontAwesomeIcon icon={faGlobeAfrica}/>
                    </div>
                    <div className="icon caret">
                      <FontAwesomeIcon icon ={faCaretDown}/>
                    </div>
                  </div>
                  <div>
                      <label for="postal">Postal code</label>
                      <input type ="number" className="input" id="postal" placeholder="Your postal code.."/>
                      <div className="icon">
                        <FontAwesomeIcon icon ={faAddressCard}/>
                      </div>
                  </div>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id="check"/>
                  <label for="check" className="check">Save this information for next time</label>
                </div>
              </form>
            </div>
            <div className="btn">
              <button>Continue</button>
            </div>
          </section>
        );
    }
}
export default Form;
