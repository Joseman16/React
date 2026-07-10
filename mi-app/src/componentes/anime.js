import React from 'react';

import '../estilo/estilo.css'

function Anime(){

    return(
        <div className='con-anime'>
            <div className='tar-anime'>
                <h3>Berserk</h3>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjYopxZYqAGmVmhRXH7mg_sdzQXDfC06_jxd1VoGeHIGXrnjwLC3Whj0&s=10' alt='img1'/>
            </div>

            <div className='tar-anime'>
                <h3>Air Gear</h3>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-dUmhmAB0IrNKLG_4i3C3Djh-YYZAcRh5SdYwLNh61qkGLXbymQj2As&s=10' alt='img2'/>
            </div>

            <div className='tar-anime'>
                <h3>Dragon Ball Super</h3>
                <img src='https://static.wikia.nocookie.net/doblaje/images/2/2a/Dragon_Ball_Super.jpg/revision/latest/scale-to-width-down/1200?cb=20241005051656&path-prefix=es' alt='img3'/>
            </div>    
        </div>
    );
}

export default Anime