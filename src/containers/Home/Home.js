import React from 'react'
import './Home.css'
import  Card from '../../Components/Card/Card'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useSate } from 'react'
import {getArticles} from '../../redux/articles/articleReducer'
import {Link} from 'react-router-dom'

export default function Home() {

    const {articles} = useSelector(state => (
         {...state.articleReducer}
        ))
    
    const dispatch = useDispatch()

    useEffect(()=>{
        if(articles.length===0){
            dispatch(getArticles());
        }

    },[])

  return (
    <> 
    <h1 className='home-title'>Tous les articles</h1>
    <div className='container-cards'>
        {articles.map(item =>{ 
            return(
                <Card > 
                    <h2> {item.title} </h2>
                    <Link to={`articles/${item.title}`}
                        state= {
                                {
                                title: item.title,
                                body:  item.body
                                }
                        }
                        
                    > Lire l'Article </Link>
                </Card>
            )
        }
        )
        }
    </div>
    </>
  )
}
