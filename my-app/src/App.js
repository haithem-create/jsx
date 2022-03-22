import './App.css';

function App() {
  return (
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="titleRed">Hait-create</h1>
          <br />
         
          <br />
          <img src={process.env.PUBLIC_URL + '/imageInPublic.jpg'} height={200} width ={200}/> 
        </div>
        <br/>
          <iframe width="876" height="372" src="https://www.youtube.com/embed/HcoZbHBDHQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
      </div>  
    );
}

export default App;
