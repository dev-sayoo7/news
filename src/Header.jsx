import React from 'react'

function Header() {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">News-24</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link badge btn btn-primary position-relative" href="#">Latest News</a>
        <a className="nav-link badge btn btn-primary position-relative" href="#">Tech</a>
        <a className="nav-link badge btn btn-primary position-relative" href="#">Fasion</a>
        <a className="nav-link badge btn btn-primary position-relative" href="#">Sports</a>
        <a className="nav-link badge btn btn-primary position-relative" href="#">trending</a>
        
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header