import React from "react"
import "./Home.css"

const Home = () => {
  const svcs = [
    {
      id: 1,
      title: "AI + RPA is what we do",
      desc:
        "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience",
      img: "https://www.xivtech.io/rp2.jpg",
      link: "AI + RPA Automation",
    },
    {
      id: 2,
      title: "Make Bolder Choices",
      desc: "Digital focused strategies to realize market-changing ideas",
      img: "https://www.xivtech.io/p1.png",
      link: "Build Better App",
    },
    {
      id: 3,
      title: "Innovate with Speed",
      desc:
        "Create higher quality software, deliver on customer expectations and business goals",
      img: "https://www.xivtech.io/p2.jpg",
      link: "DevOps",
    },
    {
      id: 4,
      title: "Embrace Cloud",
      desc: "With Cloud-First accelerate innovation and optimize performance",
      img: "https://www.xivtech.io/p3.jpg",
      link: "Cloud Services",
    },
  ]
  return (
    <div className="home">
      <div className="svcs">
        {svcs.map((svc) => (
          <div className="svc" key={svc.id}>
            <div className="content">
              <h1>{svc.title}</h1>
              <p>{svc.desc}</p>
              <a href="#">{svc.link}</a>
            </div>
            <div className="img">
              <img src={svc.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home