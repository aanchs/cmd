import React from 'react'
import PropTypes from 'prop-types'


import pic01 from '../images/pic01.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="portfolio" className={`${this.props.article === 'portfolio' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Portfolio</h2>
          <span className="image main">
          <img src={pic01} alt="" />
          </span>
          {close}
        </article>

        <article id="news" className={`${this.props.article === 'news' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">What's New</h2>
          <span className="image main">03.08.2018&nbsp;&nbsp;&nbsp;<a href='http://www.print-publishing.com/3467/indias-second-fujifilm-acuity-at-colormate/'>FUJIFILM Acuity At Colormate</a></span>
          <span className="image main">01.12.2017&nbsp;&nbsp;&nbsp;<a href='http://www.signnews.in/color-mate-digital-installs-hp-latex-570-and-impulsa-sewing-station/'>Colour Mate installs HP Latex 570 and Impulsa Sewing Station</a></span>
          <span className="image main">08.08.2017&nbsp;&nbsp;&nbsp;<a href='https://www.paper-world.com/firmennews.php?sprache=es&amp;keyfirma=2654873&amp;AktuelleSeite=0'>Delhi signage and display firm installs first multifunction cutting table in India</a></span>
          <span className="image main">03.08.2017&nbsp;&nbsp;&nbsp;<a href='http://www.signnews.in/colormate-digital-expands-portfolio-with-esko-kongsberg-c60/'>Colormate expands portfolio with ESKO</a></span>
          <span className="image main">01.08.2017&nbsp;&nbsp;&nbsp;<a href='https://issuu.com/cpublish/docs/pia_8_2017'>Colour Mate in Print Innovation India</a></span>
          <span className="image main">01.08.2017&nbsp;&nbsp;&nbsp;<a href='https://www.printinnovationasia.com/single-post/2017/08/02/India%E2%80%99s-first-multifunction-cutting-table-goes-to-Colour-Mate-Digital'>Colormate featured in Print Innovation Asia</a></span>
          <span className="image main">31.07.2017&nbsp;&nbsp;&nbsp;<a href='https://issuu.com/pressideas/docs/pi_july_2017_lr'>Colour Mate's gets India's first multifuntion cutting table</a></span>
          <span className="image main">01.07.2017&nbsp;&nbsp;&nbsp;<a href='https://issuu.com/cpublish/docs/7_2017_pia'>Colour Mate in Print Innovation India</a></span>
          <span className="image main">25.07.2017&nbsp;&nbsp;&nbsp;<a href='https://packagingsouthasia.com/packaging-production/delhi-signage-and-display-firm-installs-first-multifunction-cutting-table-in-india/'>Colour Mate made news in Packaging South Asia</a></span>
          <span className="image main">19.07.2017&nbsp;&nbsp;&nbsp;<a href='https://www.pressideas.com/2017/07/indias-first-multifunction-cutting-table-at-delhi-based-signage-and-display-firm/'>Colour Mate in PressIdeas</a></span>
          <span className="image main">18.07.2017&nbsp;&nbsp;&nbsp;<a href='https://www.esko.com/en/company/press-releases/2017/color-mate-digital-india-kongsberg-c60'>Colour Mate's and Esko</a></span>
          <span className="image main">18.07.2017&nbsp;&nbsp;&nbsp;<a href='http://www.duomedia.com/news-detail/esko/11522/delhi-signage-and-display-firm-installs-first-multifunction-cutting-table-in-india/english'>Colour Mate in Duo Media</a></span>
          <span className="image main">17.07.2017&nbsp;&nbsp;&nbsp;<a href='http://www.lfam.in/news_details.php?news_id=69'>Colour Mate in Lfam</a></span>
          <span className="image main">01.03.2017&nbsp;&nbsp;&nbsp;<a href='http://www.signandgraphics.com/march17/articles09.htm'>COLORMATE Digital equipped with ESKO Kongsberg C60</a></span>
          <span className="image main">20.10.2016&nbsp;&nbsp;&nbsp;<a href='http://www.printweek.in/Features/growing-steady-blockout-printing-22224'>Colour Mate's blockout printing</a></span>
          <span className="image main">01.07.2015&nbsp;&nbsp;&nbsp;<a href='http://online.fliphtml5.com/dwtky/fdaj/'>Colour Mate's get Seiko M64 </a></span>
          <span className="image main">01.03.2015&nbsp;&nbsp;&nbsp;<a href='http://www.smediagroup.in/emag/sng-mar15/files/s&amp;g-marapr15.pdf'>Pred8tor helps Colourmate Digital garner new momentum in blockout applications</a></span>
          <span className="image main">08.03.2014&nbsp;&nbsp;&nbsp;<a href='http://www.printweek.in/News/colour-mate-strengths-production-fuji-acuity-13440'>Colour Mate featured in Print Week India</a></span>
          <span className="image main">01.01.2014&nbsp;&nbsp;&nbsp;<a href='http://www.signandgraphics.com/jan14/articles05.htm'>India’s second FUJIFILM Acuity at Colormate</a></span>
          <span className="image main">28.05.2011&nbsp;&nbsp;&nbsp;<a href='https://www.youtube.com/watch?v=mK5i--N6XNQ'>Colour Mate Digital at ISD(India Sign Digital)</a></span>
          <span className="image main">01.05.2011&nbsp;&nbsp;&nbsp;<a href='http://www.signandgraphics.com/may11/articles02.htm'>ISD(India Sign Digital) 2011</a></span>
          <span className="image main">28.05.2010&nbsp;&nbsp;&nbsp;<a href='http://www.signandgraphics.com/may10/cutting_edge.htm'>Colour Mate Digital at ISD(India Sign Digital)</a></span>
          <span className="image main">01.03.2010&nbsp;&nbsp;&nbsp;<a href='http://www.signandgraphics.com/march09/delhi_exclusive.htm'>Colour Mate Digital featured in SignAndGraphics</a></span>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <p><b> Think Print, Think ColourMate !</b></p>
          <p>We are a complete design and print house. Dealing with wide format digital printing, display systems , backlit boards and almost everything that would be put up as an end-signage,in store graphics ,outdoor media , Structural POS displays etc. </p>
          <p>Our team works round the clock designing ,printing & creating innovative products to cater to the competitive market of advertising,marketing & visual merchandising.</p>
          <p>Established in 2000, by three young first generation entrepreneurs - Nitin, Sandeep & Gaurav - the company has been surging its status since its inception. It is a result of the continuous creative efforts of our hardworking team towards building a highly satisfied and happy clientele. We strive to give our customers a 100% satisfaction by designing and creating products apt for their business. We have a long client list comprising small and medium advertising agencies operating across PAN India.</p>
          <p>With 60 people team strength ,more than 2000+ respected client list comprising of small , medium to large scale and government agencies, we keep on adding new clients while keeping our promise of quality and upgradation to latest technology.Concerning the tasks that can be done at Colourmate Digital will include almost everything that would be put up as an end-signage , graphics , visual merchandising operating across PAN India.</p>
          <p>Colour Mate Digital has always been a pioneer in adopting the latest and best technology available for the sign and display graphics industry. We have it all to cater to your print media needs. <b>You can trust us.</b></p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <div className="field half first"><h2 className="major">Contact Us</h2>
        <div class="container">
            <div class="section">
            <a href="https://goo.gl/maps/xSPcLeb5Hvj" className="icon fa-map-pin"><span className="label">Facebook</span>
                    <p><b>Head Office </b>
2940/3 Chuna Mandi , Pahar Ganj 
New Delhi-55</p></a></div>
<div class="section">
            <a href="https://goo.gl/maps/QTUQmm5EQMaQxC2A6" className="icon fa-map-pin"><span className="label">Facebook</span>
                    <p><b>Works</b>
Plot no 20, MM road
Behind Rani  Jhansi Road 
New Delhi-55
Landline +91-11-23617066</p></a></div>
            <div class="section">
              <a href="mailto:colourmate@yahoo.co.in" className="icon fa-envelope-o">
                <span className="label">Facebook</span>
                <p>colourmate@yahoo.co.in</p></a>
                </div>
            <div class="section"><a href="mailto:colourmate@yahoo.co.in" className="icon fa-phone"><span className="label">Phone</span><p>Contact person
Gaurav - +91 9811192136
Sandeep - +91 9711192136
Nitin - + 91 9811898013</p></a></div>
            </div>
        </div>


          <h2 className="major">Send us a message</h2>
          <form action="mailto:query@colourmatedigital.com" method="post" enctype="text/plain">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
