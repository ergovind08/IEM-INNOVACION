import './Partner.css'
import { m_images, m_partner_img } from "../../assets/partner";
import React from 'react'

export default function Partners() {
  return (
    <section id="supporters" className="section-with-bg pt-0">
      <div className="container" data-aos="fade-up">
      <div class="d-flex justify-content-center header-awards pb-4"><h2>Collaborators</h2></div>
        <div class="row no-gutters supporters-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src={m_images} alt="IEM Labs" class="img-fluid"/>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src={m_partner_img} alt="GDSC IEM" class="img-fluid"/>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src={m_partner_img} alt="Society For Data Science" class="img-fluid"/>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src={m_images} alt="SPS" class="img-fluid"/>
            </div>
          </div>
          </div>

        </div>
        </section>
  )
}