import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './style.scss';

const mapState = { center: [42.87, 74.59], zoom: 10 };

const MapYandex = () => {
  const { activeCoordinate } = useSelector((state: RootState) => state.ProductsReducer);
  const { windowWidth } = useSelector((state: RootState) => state.windowWidthReducer);

  return (
    <YMaps
      enterprise
      query={{
        apikey: '450876a1-6a73-467c-a19b-1943878ff346',
      }}
    >
      <Map
        state={mapState}
        style={
          windowWidth < 758 ? { width: '100%', height: '300px' } : { width: '50%', height: '300px' }
        }
      >
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
