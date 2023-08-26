import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y  } from "swiper";
import { CardVideo } from '../CardVideo';
import { useContext } from 'react';
import { Contexto } from "../../Contexto";

export function Carrousel({categoria_id, color}) {
    const datos = useContext(Contexto);
    const videos = datos.videos.filter((dato) => dato.categoria+'' === ''+categoria_id );
    
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={1}
            navigation
            effect='fade'
            breakpoints={{
                1024: {
                    slidesPerView: 3
                },
                640: {
                    slidesPerView: 2,
                },
                480: {
                    slidesPerView: 1
                }
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
        >
            {
                videos.map((video, indice) => {
                    return (
                        <SwiperSlide  key={indice} style={{ width: '120rem' }}>
                            <CardVideo link={video.link_video} src={video.link_imagen} color={color} />
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
}