// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Header(props){
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault(); // onClick의 기본동작인 page reload를 막기위해
      props.showAlert();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis = []
  for (let i = 0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href = {'/read/'+t.id} onClick={(event)=>{
        event.preventDefault();
        props.showAlert(Number(event.target.id));
      }}>{t.title}</a>
      </li>)
  }

  return <nav>
      <ol>
        {lis}
      </ol>
    </nav>
}
function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'READ'){
    let title, body = null;
    for (let i=0; i<topics.length; i++){
      if (topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>

  }
  return (
    <div>
      <Header title="WEB" showAlert={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} showAlert={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
