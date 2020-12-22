import React from 'react';
import mypic from './Arezoo.jpg';

export default function AboutUs() {
    return (
        <> 
            <div></div>
            <div className="auth-form">
                <h1>Welcome to our store</h1>
                <p><img src={mypic} alt="Arezoo" width="200" height="200" align ="left" HSPACE="50"  /> 
                
                <body align="justify"> Hello and thanks for stopping by!
                        My name is Arezoo and I have a master of computer science specialized in machine learning. Here is my project for 
                        COMIT React workshop. I developed my art store. <br></br>
                        Painting is one of my hobbies and I have learned painting since my childhood. 
                        In this store, I am showing my artworks that are under the category of realism. Also, I am showing some other artworks from local artists in different categories. I hope you enjoy visiting our website. 
                        <br></br>
                        If you may have any questions, I would be more than happy to assist you.  </body>
                
                </p>
                
            </div>
        </>
        
        
    )
}
