import './App.css';
import projetos from './data'

function App() {
  return (
      <main>
          <div className="pg-header">
            <div className="container"> 
                <div className='row alig-items-center'>
                  <div className="col-lg-7">
                      <h1>Meu Arsenal de Projetos</h1>
                  </div>
                  <div className="col-lg-5">
                    <nav>
                      <ol className='breadcrumb justify-content-end'>
                        <li className="breadcrumb-item">
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
            </div>
          </div>

          <div className='container'>
            <div className='row products-row'>
              {projetos.map((projeto) => {
                return(
                  <div className='col-lg-4' key={projeto.id}>
                    <div className='card mt-3 mb-3'>
                      <div className='img-wrap'>
                        <img src={projeto.img} alt="" />
                      </div>
                      <div className='card-body'>
                        <h5 className='card-title'>{projeto.title}</h5>
                        <p className='card-text'>{projeto.description}</p>
                        <a href={projeto.site} className='btn btn-primary w-100'>Ver Projeto</a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
      </main>
  );
}

export default App;
