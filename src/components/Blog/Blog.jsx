import './Blog.css'
import React, { useState, useEffect } from 'react';


function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://www.googleapis.com/blogger/v3/blogs/5027863848660726350/posts?key=AIzaSyCPl9JJvbpHt2WMuugqpO96otYU5zvVS3M'
            );
            const data = await response.json();
            setPosts(data.items);
        };

        fetchData();
    }, []);
    var indNot = 0;


    return (
        <section className="blog" id='blog'>
            <div className='contenedor'>
                <div className='frame-blog'>
                    <div className='titulos-opiniones'>
                        <p className='op-titulo'><span>Novedades</span></p>
                        <h2 className='oh2-titulo'>Últimas Noticias</h2>
                    </div>
                    <div className='api-blogger' id='api-blogger'>
                        {posts.map(post => (

                            <div className={`frame-noticia noticia-${indNot++}`}>
                                <div className='frame-noticia-texto'>
                                    <p>{`${post.labels} / ${post.published.substring(0, 7)}`}</p>
                                    <h5>{`${post.title}`}</h5>
                                    <a className='btn-not' href={post.url} target="_blank">Ver</a>
                                </div>
                                <div className='frame-noticia-imagen'>
                                    <div className="separator">
                                        <img border="0" data-original-height="911" data-original-width="1366" height="422" src={`${post.content.slice(152, 424)}`} width="633" />
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div >
            </div >
        </section >
    );
}

export { Blog };

