import React, { useEffect, useState } from 'react'
import { AiFillHeart } from "react-icons/ai"
import { RiShareBoxFill } from "react-icons/ri"
import { FaHandPointUp } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { SyncLoader } from 'react-spinners'




const Home = () => {


  let carts = (useSelector(state => state)).carts;


  const [scroll, setScroll] = useState(carts.carts.slice(0, 29))
  let page = 0

  const fetchMoreData = () => {
    page++
    setTimeout(() => {
      setScroll(scroll.concat(carts.carts.slice(28 + (page * 20), (28 + (page * 20)) + 20)))
    }, 1500)
  }


  return (
    <main >
      <div className="my-container home-scroll">

        {
          <InfiniteScroll
            dataLength={scroll.length}
            next={fetchMoreData}
            hasMore={true}
            height={"82vh"}
            loader={<div style={{ textAlign: "center", margin: "30px 0" }}><SyncLoader color="#36d7b7" /></div>}
          >
            {
              <div className="row g-5">
                <div className="col-lg-2-4 col-md-3 col-sm-4 col-6">
                  <Link to={"/card"}>
                    <div className="cart add-btn">
                      <p>+</p>
                      <p>Add New Survey</p>
                    </div>
                  </Link>
                </div>
                {
                  scroll.map((elem, index) => {
                    return (
                      <div key={index + 1} className="col-lg-2-4 col-md-3 col-sm-4 col-6">
                        <Link to={elem.url}>
                          <div className="cart">
                            <img src={elem.img} alt="cart-photo" />
                            <div className="vote">
                              Vote: {
                                ((index + 1) % 4) == 0 ? 86.323 : ((index + 1) % 3) == 0 ? 86.323 : ((index + 1) % 2) == 0 ? 146.123 : 435.323
                              }
                            </div>
                            <div className="info">
                              <div>
                                <p className='title'>
                                  {elem.title}
                                </p>
                              </div>
                              <div className='d-flex justify-content-between align-items-center'>
                                <p className='subtitle'>
                                  {
                                    elem.subtitle
                                  }
                                </p>
                                <div className='buttons d-flex'>
                                  <button>
                                    <AiFillHeart style={{ fill: "red", fontSize: "15px" }} />
                                  </button>
                                  <button className='ms-1'>
                                    <RiShareBoxFill style={{ fill: "#8ddb29", fontSize: "15px" }} />
                                  </button>
                                  <button className='ms-1'>
                                    <FaHandPointUp style={{ fill: "#00ddff", fontSize: "15px" }} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                        </Link>
                      </div>
                    )
                  })

                }
              </div>
            }
          </InfiniteScroll>

        }

      </div>

    </main>
  )
}

export default Home