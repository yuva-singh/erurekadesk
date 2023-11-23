import React from 'react'

function RevievPage() {
  const name = localStorage.getItem('name');
  const question = localStorage.getItem('question');
  const description = localStorage.getItem('description');
  const redirectionLink = localStorage.getItem('redirectionLink');

  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-6">question:</div>
            <div className="col-lg-6">{name}</div>
            <div className="col-lg-6">question</div>
            <div className="col-lg-6">{question}</div>
            <div className="col-lg-6">description</div>
            <div className="col-lg-6">{description}</div>
            <div className="col-lg-6">redirectionLink</div>
            <div className="col-lg-6">{redirectionLink}</div>
        </div>
    </div>
  )
}

export default RevievPage