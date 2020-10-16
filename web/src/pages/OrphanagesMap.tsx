import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import '../styles/pages/orphanagesMap.css';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';


function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src= {mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Mauá</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            <Map
                center={[-23.6578535,-46.4296952]}
                zoom={16}
                style={{ width: '100%', height: '100%' }}
            >   
            {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
            <TileLayer
             /**
                url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>*/
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

            </Map>
            
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>

    );
}
export default OrphanagesMap;