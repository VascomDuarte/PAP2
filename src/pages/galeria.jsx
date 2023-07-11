'../public/fotografias_site/espetada1.jpg';
import React from 'react';
import NavBar from "../Components/navbar";
import Footer from "../Components/footer";
import espetada1 from '../public/fotografias_site/espetada1.jpg';
import espetada2 from '../public/fotografias_site/espetada2.jpg';
import pernaFrangoRecheada from '../public/fotografias_site/perna_frango_recheada.jpg';

const ImageGallery = () => {
  // Array de objetos com as informações das imagens
  const images = [
    {
      path: espetada1,
      name: 'Imagem 1',
      price: 'R$ 10,00',
      type: 'Tipo 1',
    },
    {
      path: espetada2,
      name: 'Imagem 2',
      price: 'R$ 20,00',
      type: 'Tipo 2',
    },
    {
      path: pernaFrangoRecheada,
      name: 'Imagem 3',
      price: 'R$ 30,00',
      type: 'Tipo 3',
    },
    // Adicione mais objetos de imagem aqui...
  ];

  return (
    <div>
      <NavBar />
      <div className="pt-52 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              display: 'inline-block',
              width: '33%',
              padding: '10px',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={image.path}
              alt={image.name}
              style={{
                maxWidth: '400px',
                maxHeight: '400px',
                width: '100%',
                height: 'auto',
              }}
            />
            <div>
              <h4>{image.name}</h4>
              <p>{image.price}</p>
              <p>{image.type}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ImageGallery;
