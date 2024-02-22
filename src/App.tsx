import './styles.css';
function App() {

  // const name = " Hüseyin"
  // const surname = "Pektas"
  // const baslik  = "Hosgeldiniz"
  // const title = "Buraya gel"
  // const yil= new Date().toLocaleString()
  // const konular = ["HTML, "," CSS, "," JAVASCRİPT, "," REACT"]
  // const author = {
  //   firstName :"Esra",
  //   lastName:" Pektaş",
  // }
  const style = {
    backgroundColor: '#61DBFB',
    fontFamily: 'Helvetica Neue',
    padding: 25,
    lineHeight: 1.5,
  }
  // console.log("stillerde ne var",style)
  return (
    <>
      <div className="container" style={style}>
        <h1>SUBSCRİBE</h1>
        <p>Sign Up with your email adress to receive
          news and update</p>
        <div className="nput">
          <input className='put' type="text" placeholder="Recipient's username" />
          <input className='put' type="text" placeholder="Recipient's username" />
          <input className='put' type="text" placeholder="Recipient's username" />
        </div>
        <button className='buton'>Subscribe</button>

      </div>




      {/* <div style={style}>
       <h1 style={{border:"2px solid red"}}>React Öğreniyorum</h1>
       <h2>Adı: {name}</h2>
       <h2>Soyadı:{surname}</h2>
       <h2>Misafir Karşılama{baslik}</h2>
       <h2>Çağırma:{title}</h2>
       <p>Date:{yil}</p>
       <h3>{author.firstName} {author.lastName}</h3>
      
      </div>
      <ul>
        <li>Konular: {konular}</li>
      </ul>
      <p>Adı Soyadı: {name} {surname}</p> */}
    </>
  )
}

export default App
