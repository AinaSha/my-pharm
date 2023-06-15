import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './style.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const mapState = { center: [42.87, 74.59], zoom: 10 };

const MapYandex = () => {
  const { activeCoordinate } = useSelector((state: RootState) => state.ProductsReducer);

  return (
    <YMaps>
      <Map state={mapState} style={{ height: '300px' }}>
        <Placemark
          geometry={activeCoordinate}
          properties={{
            iconContent: '+',
          }}
        />
      </Map>
    </YMaps>
  );
};

export default MapYandex;
