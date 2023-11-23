import React from 'react'
import FeedbackHeader from './FeedbackHeader'
import { Link } from 'react-router-dom'
import FeedbackMenu from './FeedbackMenu'


function Feedback() {
  return (
    <>
    <FeedbackMenu/>
    <div className="container-fluid">
        <div className="row flex-row-reverse d-flex justify-content-center">
        <div className="col-lg-6 content-center">
               <img src={require('../../img/feedback.png')} className='rounded feedback_firstpage_image' alt="" />
            </div>
            <div className="col-lg-6 content-center">
              <div>
                <p style={{fontSize:"22px",fontWeight:"600"}}>Find out how customer really feels</p>
                <div style={{fontSize:"14px",color:"#22222299"}}>Survey your customers. Then use their feedback -- good and bad -- to make improvements, build your reputation, and grow your business.</div>
                <Link to="/chooseTemplate" className="text-white">
                <button type="button"
                className="primary-button primary-button:hover"
                style={{
                  height: "37px",
                  width: "137px",
                  fontWeight: "500",
                  fontSize: "12px",
                  marginTop: "30px",
                  padding: "3px, 19px, 3px, 19px",
                }}> Get Started</button></Link>
              </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Feedback