import { FC, useState } from 'react';
import { Pagination } from '../../components/pagination/Pagination';
import { RenderCardItem } from '../../components/renderCard/RenderCardItem';
import { CatalogList } from '../../ui-kit/catalog/CatalogList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, store } from '../../store';
import { IProduct } from '../../types/Types';
import './products.scss';
import {
  getProductFilter,
  setAppointment,
  setFormText,
  setShowCategore,
} from '../../store/productsReducer';

export const Products: FC = () => {
  const {
    products,
    catalog,
    catalogId,
    showCategore,
    formText,
    form,
    appointmentId,
    appointmentText,
  } = useSelector((state: RootState) => state.ProductsReducer);
  const dispatch = useDispatch<AppDispatch>();
  const [showForm, setShowForm] = useState(false);
  const [showAppointments, setshowAppointments] = useState(false);
  const [showСountry, setshowСountry] = useState(false);

  const renderCardItems = () => {
    return products.map((el: IProduct, id: number) => {
      return (
        <RenderCardItem
          key={id}
          id={el.id}
          title={el.title}
          thumbnail={el.thumbnail}
          manufacturer="{el.manufacturer}"
          price={el.price}
          is_req_prescription={el.is_req_prescription}
          favorites="false"
          catalog={0}
          discount_price={''}
          sale={''}
        />
      );
    });
  };

  const handleForm = (e: React.MouseEvent) => {
    const formId = (e.target as HTMLLinkElement).id;
    const formText = (e.target as HTMLLinkElement).innerHTML;
    setShowForm(false);
    const option = {
      id: catalogId,
      form: formId,
      appointment: appointmentId,
    };
    store.dispatch(getProductFilter(option));
    dispatch(setFormText({ formText, formId }));
  };

  const handleAppointment = (e: React.MouseEvent) => {
    const nodeLiId = (e.target as HTMLLinkElement).id;
    const nodeLiText = (e.target as HTMLLinkElement).innerHTML;
    setshowAppointments(false);
    const option = {
      id: catalogId,
      form: form,
      appointment: nodeLiId,
    };
    store.dispatch(getProductFilter(option));
    dispatch(setAppointment({ nodeLiId, nodeLiText }));
  };

  return (
    <div className="container">
      <div className="filter-input">
        <label className="select-ctigory" htmlFor="">
          <input
            type="text"
            placeholder="Категории товаров"
            defaultValue={catalog ? catalog : ''}
          />
          <button onClick={() => dispatch(setShowCategore(!showCategore))}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3334 12L16.0001 21.3333L6.66675 12"
                stroke="#003838"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div>{showCategore && <CatalogList prop="catalog-menu" />}</div>
        </label>
        <label className="select-pharmacies" htmlFor="">
          <input type="text" placeholder="Адрес аптек" />
          <button>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3334 12L16.0001 21.3333L6.66675 12"
                stroke="#003838"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </label>
      </div>
      <div className="main-page">
        <div className="filter-select">
          <div className="release-form">
            <label className="select-pharmacies" htmlFor="">
              <input
                type="text"
                placeholder="По форма выпуска"
                defaultValue={formText ? formText : ''}
              />
              <button onClick={() => setShowForm(!showForm)}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3334 12L16.0001 21.3333L6.66675 12"
                    stroke="#003838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div>
                {showForm && (
                  <ul onClick={handleForm}>
                    <li id="other">другой</li>
                    <li id="tablet">таблетки</li>
                    <li id="capsule">порошок</li>
                    <li id="powder">капсула</li>
                    <li id="ampoule">сироп</li>
                    <li id="syrup">ампула</li>
                    <li id="spray">спрей</li>
                    <li id="ointment">мазь</li>
                  </ul>
                )}
              </div>
            </label>
            <label className="select-pharmacies" htmlFor="">
              <input
                type="text"
                placeholder="Назначения"
                defaultValue={appointmentText ? appointmentText : ''}
              />
              <button onClick={() => setshowAppointments(!showAppointments)}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3334 12L16.0001 21.3333L6.66675 12"
                    stroke="#003838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div>
                {showAppointments && (
                  <ul onClick={handleAppointment}>
                    <li id="other">другой</li>
                    <li id="for_adults">взрослый</li>
                    <li id="for_children">детский</li>
                    <li id="for_nursing">уход</li>
                    <li id="for_pregnant_women">Беременным и кормящим</li>
                  </ul>
                )}
              </div>
            </label>
            <label className="select-pharmacies" htmlFor="">
              <input type="text" placeholder="Страна" />
              <button onClick={() => setshowСountry(!showСountry)}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3334 12L16.0001 21.3333L6.66675 12"
                    stroke="#003838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div>
                {showСountry && (
                  <ul>
                    <li>Россия</li>
                    <li>Кыргызстан</li>
                    <li>Германия</li>
                    <li>Франция</li>
                    <li>Индия</li>
                  </ul>
                )}
              </div>
            </label>
          </div>
        </div>
        <div className="catalog-page">{renderCardItems()}</div>
      </div>
      <Pagination />
    </div>
  );
};
