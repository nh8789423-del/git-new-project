const Home=()=>{
    return(
        <>
         <main className="main-content">
          <div className="main-left">
           <h2><span className="first-letter">Afghanistan</span> <span className="second-letter">Cricket Board</span></h2>
           <p className="describe">Afghanistan Cricket board offical website<br/>
           in this website we look players records , Team matches and other staff .
           </p>
           <div className="btns">
            <button className="prev-btn"><span className="prev">⏪</span>Prev</button>
            <button className="next-btn">Next<span className="next">⏩</span></button>
           </div>
          </div>

          <div className="main-right">
            <img src="/assest/cricket/Facebook/All.jpg" />
          </div>

         </main>
        </>
    )
}
export default Home;