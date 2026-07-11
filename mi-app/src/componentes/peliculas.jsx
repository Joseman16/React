import React from 'react';

import '../estilo/estilo.css'

function Pelicula(){
    return(
        <div className='con-pelicula'>
            <div className='tar-pelicula'>
                <h3>500 dias con Ella</h3>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFviy8h6R8gX7198fa0tllXJxR_akOu9t1rjzD5oJE0Hjqvtge0j2iooRX&s=10'/>
            </div>

            <div className='tar-pelicula'>
                <h3>Cars</h3>
                <img src='https://static.wikia.nocookie.net/el-mundo-de-cars/images/0/00/Cars_-_poster.jpg/revision/latest/thumbnail/width/360/height/360?cb=20240314223709&path-prefix=es'/>
            </div>

            <div className='tar-pelicula'>
                <h3>La Pasión de Cristo</h3>
                <img src='https://m.media-amazon.com/images/M/MV5BNTE2OTEzMDctOWMwNy00YmNmLTk3ODAtMmVkZjRmYjI0ZmFlXkEyXkFqcGc@._V1_.jpg'/>
            </div>
        </div>
    );
} 

export default Pelicula