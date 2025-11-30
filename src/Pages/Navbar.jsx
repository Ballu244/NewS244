import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Navbar() {
  let [search,setSearch]=useState("")
  let [q,setQ]=useState("")
  let [language,setLanguage]=useState("")
  let [searchParams]=useSearchParams()

let navigate = useNavigate()
  function postSearch(e){
e.preventDefault()
navigate(`/?q=${search}&language=${language}`)
  }

  useEffect(()=>{
     setQ(searchParams.get("q")??"All")
     setLanguage(searchParams.get("language")??"hi")
  },[searchParams])
  return (
   
    <>
    <nav className="navbar navbar-expand-lg bg-primary p-3 sticky-top ">
  <div className="container-fluid ">
    <a className="navbar-brand text-light fw-bold " ><img src="/image/News.png"  alt="..." /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
                <a className="nav-link active text-light fw-bold" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light fw-bold" aria-current="page" href={`/?q=Cricket&language=${language}`}>
                  Cricket
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light fw-bold " aria-current="page" href={`/?q=Crime&language=${language}`}>
                 Crime
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light fw-bold" aria-current="page" href={`/?q=Politics&language=${language}`}>
                  Politics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light fw-bold" aria-current="page" href={`/?q=India&language=${language}`}>
                  India
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light fw-bold" aria-current="page" href={`/?q=Sports&language=${language}`}>
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light fw-bold" aria-current="page" href={`/?q=Entertainment&language=${language}`}>
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light fw-bold" aria-current="page" href={`/?q=Technology&language=${language}`}>
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light fw-bold" aria-current="page" href={`/?q=Education&language=${language}`}>
                  Education
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light fw-bold"
                  href={`/?q=${q}&language=hi`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Languages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href={`/?q=${q}&language=hi`}>
                      Hindi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href={`/?q=${q}&language=en`}>
                      English
                    </a>
                  </li>
                 
                  <li>
                    <a className="dropdown-item" href={`/?q=${q}&language=fr`}>
                     
                      French
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href={`/?q=${q}&language=es`}>
                     
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href={`/?q=${q}&language=de`}>
                     
                      German
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href={`/?q=${q}&language=jp`}>
                     
                      Japanese
                    </a>
                  </li>
                 
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href={`/?q=${q}&language=hi`}>
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
            </ul> 
         <form className="d-flex" role="search" onSubmit={postSearch}>
        <input className="form-control me-2" name='search' onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
