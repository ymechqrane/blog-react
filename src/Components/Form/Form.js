import {React, useState} from 'react'
import './Form.css'
import {useDipatch, useDispatch} from 'react-redux'
import Navbar from "../../Components/Navbar/Navbar";

export default function Form() {

  const [article, setArticle]=useState({
    title:"ggggt",
    body:" younes ",
  });

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    
    dispatch({
      type: 'ADDARTICLE',
      payload: {...article}
    })

    setArticle({
      title: '',
      body:''
    })
  };

  const handleImputs = (e) => {
    if(e.target.classList.contains('imp-title')){
      console.log('hello from handleImputs');
      const newArticle={...article, title: e.target.value}
      setArticle(newArticle);
    }else if(e.target.classList.contains('imp-body')){
      console.log('hello from handleImputs__');;
      const newArticle={...article, body: e.target.value}
      setArticle(newArticle);
    }
  }
  
  
  return (
    <>
      <h1 className="title-form">Écrivez un article</h1>
      <form 
      onSubmit={handleForm}
      className="container-form" 
      >
        <label htmlFor="title">Titre</label>
        <input value={article.title} className='imp-title' onChange={handleImputs} type="text" id="title" placeholder="Entrez votre nom" />

        <label htmlFor="article">Votre article</label>
        <textarea value={article.body} className='imp-body' onChange={handleImputs} id="article" placeholder="Votre article"> </textarea>

        <button>Envoyer l'article</button>
      </form>
    </>
  )
}
