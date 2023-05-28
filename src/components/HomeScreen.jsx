import React, { useEffect, useState } from 'react'
import CardList from './CardList';
import './style/CardStyle.css'
import Navbar from './Navbar';
import Footer from './Footer';

const HomeScreen = () => {
    const [farms, setFarms] = useState([
        {
            id: '1', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Finca.jpg',
            description: 'Finca El Roble: Hermosa finca rodeada de exuberante vegetación y hermosas vistas panorámicas. Cuenta con amplias áreas verdes, piscina, zona de barbacoa y espacios ideales para el descanso y la recreación familiar.',
            price: '$ 500.000 por noche'
        },
        {
            id: '2', 
            image: 'https://i.pinimg.com/550x/98/61/1d/98611dbae0db87a4f65691a584518e4f.jpg',
            description: 'Finca La Cabaña: Encantadora finca campestre con un estilo rústico y acogedor. Disfruta de la tranquilidad y la paz que ofrece este lugar, con extensos jardines, espacios para actividades al aire libre y una cabaña de madera para alojamiento.',
            price: '$ 250.000 por noche'
        },
        {
            id: '3', 
            image: 'https://multimedia.metrocuadrado.com/10697-M3473260/10697-M3473260_1_p.jpg',
            description: 'Finca Los Pinos: Un verdadero paraíso natural con un ambiente sereno y rodeado de altos pinos. Esta finca ofrece una experiencia única en contacto con la naturaleza, con senderos para caminatas, miradores panorámicos y una casa principal con todas las comodidades.',
            price: '$ 220.000 por noche'
        },
        {
            id: '4', 
            image: 'https://calimadarien.com/alojamiento/fincas/0010/cover.jpg',
            description: 'Finca El Paraíso: Un oasis de relajación y diversión en medio del campo. Disfruta de sus amplias instalaciones que incluyen una piscina, canchas deportivas, zona de juegos para niños y áreas de descanso. Ideal para escapar del bullicio de la ciudad y disfrutar de momentos inolvidables en familia.',
            price: '$ 290.000 por noche'
        },
        {
            id: '5', 
            image: 'https://www.portafolio.co/files/article_multimedia/files/crop/uploads/2017/04/26/590156ea809fb.r_1493260093092.0-0-666-500.png',
            description: 'Finca La Montaña: Un lugar mágico ubicado en las montañas, rodeado de hermosos paisajes y aire puro. Esta finca cuenta con cabañas acogedoras, rutas de senderismo, cascadas y un ambiente tranquilo para aquellos que buscan un refugio en la naturaleza.',
            price: '$ 210.000 por noche'
        },
        {
            id: '6', 
            image: 'https://fincaspanacah10.com/wp-content/uploads/2021/09/POOL-1-2.jpg',
            description: 'Amplia finca rodeada de hermosos paisajes naturales. Ideal para disfrutar de la tranquilidad y realizar actividades al aire libre. Cuenta con espaciosas áreas verdes y una casa principal con todas las comodidades.',
            price: '$ 190.000 por noche'
        },
        {
            id: '7', 
            image: 'https://imagenes.noticiasrcn.com/ImgNoticias/finca.jpg?VersionId=YM5Hd7NH9.x344aVxCj5h4JlQjZTkJMG',
            description: 'Finca con vistas panorámicas impresionantes. Ubicada en una zona montañosa, esta propiedad ofrece privacidad y un entorno tranquilo. Cuenta con una piscina, terraza y amplios jardines.',
            price: '$ 220.000 por noche'
        },
        {
            id: '8', 
            image: 'https://envilladeleyva.com/es/wp-content/uploads/2019/09/1-5-627x376.jpg',
            description: 'Encantadora finca campestre con estilo rústico. Rodeada de árboles frutales y hermosas flores, esta finca ofrece un ambiente acogedor y relajante. Dispone de una casa de campo con todas las comodidades necesarias.',
            price: '$ 295.000 por noche'
        },
        {
            id: '9', 
            image: 'https://colombiafincas.com/wp-content/uploads/2022/10/imagen_2022-10-22_124300636-671x650.png',
            description: 'Finca con amplios terrenos y espacios para actividades recreativas. Perfecta para eventos al aire libre, cuenta con una cancha de tenis, piscina, zona de barbacoa y áreas de descanso.',
            price: '$ 230.000 por noche'
        },
        {
            id: '10', 
            image: 'https://www.shutterstock.com/image-photo/manizales-colombia-february-23-2105-260nw-325579409.jpg',
            description: 'Exclusiva finca de lujo con impresionantes vistas al mar. Diseñada con elegancia y sofisticación, esta propiedad cuenta con amplias habitaciones, piscina privada, jacuzzi y acceso directo a una playa privada.',
            price: '$ 170.000 por noche'
        },
        {
            id: '11', 
            image: 'https://alquilesufinca.com/wp-content/uploads/2019/03/F-123-04-1024x576.jpg',
            description: 'Finca con huerto y cultivos orgánicos. Ideal para aquellos que buscan una experiencia agrícola, esta propiedad ofrece la oportunidad de cultivar sus propios alimentos y disfrutar de la vida en el campo.',
            price: '$ 110.000 por noche'
        },
        {
            id: '12', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiv7UsM-Kaph729GUtaI0UnLwPBSJAiLXB8oSBcAxOSLOtKan6MMZTZeC9MXJR_sauZjI&usqp=CAU',
            description: 'Finca con amplios establos y áreas para la cría de caballos. Perfecta para los amantes de la equitación, esta propiedad cuenta con instalaciones de primera calidad para el cuidado y entrenamiento de caballos.',
            price: '$ 320.000 por noche'
        },
        {
            id: '13', 
            image: 'https://s3.amazonaws.com/imagenesprof.fincaraiz.com.co/OVFR_COL/2021/5/12/59748842.jpg',
            description: 'Hermosa finca rodeada de viñedos y bodegas. Ideal para los amantes del vino, esta propiedad ofrece la oportunidad de cultivar uvas y producir vinos artesanales. Además, cuenta con una casa de estilo mediterráneo.',
            price: '$ 380.000 por noche'
        },
        {
            id: '14', 
            image: 'https://img.mitula.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzFkYTBiMzg1LTYxOTMtNDI1ZC1hYTZlLTAwODA5NTMyMGZjOC83ZGZkMTViYi01OWY2LTQ2MWQtYWZhNy00M2VjOWYyZjVjNzYuanBnIiwiYnJhbmQiOiJNSVRVTEEiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjM4MCwiaGVpZ2h0IjoyMzAsImZpdCI6ImNvdmVyIn19fQ==',
            description: 'Finca con piscina y amplias áreas de recreación. Perfecta para el entretenimiento familiar, esta propiedad cuenta con un parque infantil, zona de juegos, cancha de fútbol y amplias zonas de descanso.',
            price: '$ 256.000 por noche'
        },
        {
            id: '15', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Pagx_F1gBx8uYm9OSDx4uRIA90994vIkl_dlVNPiak5Xz8bB_stL61JiNxSXS0vy2sI&usqp=CAU',
            description: 'Finca con laguna privada y muelle. Ideal para los amantes de los deportes acuáticos, esta propiedad ofrece la posibilidad de practicar actividades como la pesca, el kayak y el paddleboarding.',
            price: '$ 223.000 por noche'
        },
        {
            id: '16', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Mg27L4OHHQE3em5ZALIRZWytn5UJVdESElViOrAnEKO08-uQ4Xa38kE9toq1YtNSV9g&usqp=CAU',
            description: 'Encantadora finca con jardines exuberantes y una casa de estilo colonial. Perfecta para aquellos que buscan un ambiente sereno y elegante, esta propiedad cuenta con una piscina, terraza y áreas de relajación al aire libre.',
            price: '$ 100.000 por noche'
        },
        {
            id: '17', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7Qrw3Y8GO_cjvNkwqf_EB3aEDB5YXZ3CpPhccmFFKUBJtzjn5ckJdskaRVlde4Ow3Jg&usqp=CAU',
            description: 'Finca con amplios cultivos de café y una casa de estilo tradicional. Ideal para los amantes del café, esta propiedad ofrece la oportunidad de participar en el proceso de cultivo y producción de café.',
            price: '$ 192.000 por noche'
        },
        {
            id: '18', 
            image: 'https://www.integralfincasderecreo.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-05-07-at-10.49.07-AM-1024x728.jpg',
            description: 'Finca con cascadas y senderos naturales. Perfecta para los amantes de la naturaleza y el ecoturismo, esta propiedad ofrece la posibilidad de explorar paisajes impresionantes y disfrutar de la flora y fauna local.',
            price: '$ 254.000 por noche'
        },
        {
            id: '19', 
            image: 'https://www.integralfincasderecreo.com/wp-content/uploads/2020/10/906182ae-42de-4b4f-be65-33ef8e34ccc6-1024x768.jpg',
            description: 'Finca con amplios viñedos y una bodega de vinos. Perfecta para los entusiastas del vino, esta propiedad ofrece la oportunidad de participar en la producción y degustación de vinos de alta calidad.',
            price: '$ 215.000 por noche'
        },
        {
            id: '20', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxbqlk8UHqn2Gpn8WsFLb7rpHCimUc_JvIS630wpU9BMBmXDyvGUM5BB4JQ8EMPYwK_E&usqp=CAU',
            description: 'Espaciosa finca con vistas panorámicas a la montaña. Ubicada en un entorno tranquilo y natural, esta propiedad ofrece amplios terrenos para disfrutar de actividades al aire libre. ',
            price: '$ 120.000 por noche'
        },
    ]);

    /*useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20')
          .then(response => {
            setFarms(response.data);
          })
          .catch(error => {
            console.error('Error fetching farms:', error);
          });
    }, []);*/
    

    return(
        <>
            <Navbar />
            <div className='product-list'>
                {
                    farms.map(farm => (
                        <div key={farm.id}>
                            <CardList image={farm.image} title={farm.title} description={farm.description} price={farm.price}/>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </>
    )
}

export default HomeScreen;