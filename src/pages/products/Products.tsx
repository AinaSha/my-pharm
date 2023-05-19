import { FC, useEffect, useState } from 'react';
import { Pagination } from '../../components/pagination/Pagination';
import { RenderCardItem } from '../../components/renderCard/RenderCardItem';
import { CatalogList } from '../../ui-kit/catalog/CatalogList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { IProduct } from '../../types/Types';
import './products.scss';
import {
  setAppointment,
  setCatalog,
  setCountry,
  setFormText,
  setShowCategore,
} from '../../store/productsReducer';

export const Products: FC = () => {
  const {
    appointmentId,
    products,
    searchName,
    catalog,
    catalogId,
    countryId,
    showCategore,
    form,
    resetFilter,
  } = useSelector((state: RootState) => state.ProductsReducer);
  const dispatch = useDispatch<AppDispatch>();
  const [showForm, setShowForm] = useState(false);
  const [textForm, setTextForm] = useState('');
  const [textCatalog, setTextCatalog] = useState('');
  const [showAppointments, setshowAppointments] = useState(false);
  const [textAppointments, setTextAppointments] = useState('');
  const [showСountry, setshowСountry] = useState(false);
  const [textСountry, setTextСountry] = useState('');

  const favirutesProduct = localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites') as string)
    : [];

  const resetSets = () => {
    setTextСountry('');
    setTextAppointments('');
    setTextForm('');
  };

  const renderCard = (el: IProduct) => {
    return (
      <RenderCardItem
        key={el.id}
        id={el.id}
        name={el.name}
        manufacturer={el.manufacturer}
        price={el.price}
        favorites={favirutesProduct.includes(String(el.id))}
        page="main"
        discount_price={el.discount_price}
        image={el.image}
        rating={el.rating}
        characteristics={el.characteristics}
      />
    );
  };

  const renderCardItems = () => {
    return products.map((el: IProduct) => {
      if (catalogId && el.in_stock) {
        if (appointmentId && textForm && countryId) {
          if (
            form === el.form_type &&
            el.manufacturer?.id === countryId &&
            el.category?.id === Number(catalogId) &&
            appointmentId === el.appointment
          ) {
            return renderCard(el);
          }
        } else if (appointmentId && textForm) {
          if (
            form === el.form_type &&
            el.category?.id === Number(catalogId) &&
            appointmentId === el.appointment
          ) {
            return renderCard(el);
          }
        } else if (appointmentId && countryId) {
          if (
            el.manufacturer?.id === countryId &&
            el.category?.id === Number(catalogId) &&
            appointmentId === el.appointment
          ) {
            return renderCard(el);
          }
        } else if (textForm && countryId) {
          if (
            el.manufacturer?.id === countryId &&
            el.category?.id === Number(catalogId) &&
            form === el.form_type
          ) {
            return renderCard(el);
          }
        } else if (appointmentId) {
          if (el.category?.id === Number(catalogId) && appointmentId === el.appointment) {
            return renderCard(el);
          }
        } else if (textForm) {
          if (el.category?.id === Number(catalogId) && form === el.form_type) {
            return renderCard(el);
          }
        } else if (countryId) {
          if (el.category?.id === Number(catalogId) && el.manufacturer?.id === countryId) {
            return renderCard(el);
          }
        } else if (catalogId) {
          if (el.category?.id === Number(catalogId)) {
            return renderCard(el);
          }
        }
      } else if (searchName && el.in_stock) {
        if (el.name.indexOf(searchName) !== -1) {
          return renderCard(el);
        }
      } else if (el.in_stock) {
        if (textForm && countryId && appointmentId) {
          if (
            el.manufacturer?.id === countryId &&
            form === el.form_type &&
            appointmentId === el.appointment
          ) {
            return renderCard(el);
          }
        } else if (appointmentId && countryId) {
          if (el.manufacturer?.id === countryId && appointmentId === el.appointment) {
            return renderCard(el);
          }
        } else if (appointmentId && textForm) {
          if (form === el.form_type && appointmentId === el.appointment) {
            return renderCard(el);
          }
        } else if (textForm && countryId) {
          if (el.manufacturer?.id === countryId && form === el.form_type) {
            return renderCard(el);
          }
        } else if (appointmentId) {
          if (appointmentId === el.appointment) {
            return renderCard(el);
          }
        } else if (textForm) {
          if (form === el.form_type) {
            return renderCard(el);
          }
        } else if (countryId) {
          if (el.manufacturer?.id === countryId) {
            return renderCard(el);
          }
        } else {
          return renderCard(el);
        }
      }
    });
  };

  const handleForm = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).classList.contains('parant-ul')) {
      const nodeLiId = (e.target as HTMLLinkElement).id;
      const nodeLiText = (e.target as HTMLLinkElement).innerHTML;
      setTextForm(nodeLiText);
      setShowForm(false);
      dispatch(setFormText({ nodeLiText, nodeLiId }));
    }
  };

  const handleAppointment = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).classList.contains('parant-ul')) {
      const nodeLiId = (e.target as HTMLLinkElement).id;
      const nodeLiText = (e.target as HTMLLinkElement).innerHTML;
      setshowAppointments(false);
      setTextAppointments(nodeLiText);
      dispatch(setAppointment({ nodeLiId, nodeLiText }));
    }
  };

  const handleCountry = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).classList.contains('parant-ul')) {
      const nodeLiId = (e.target as HTMLLinkElement).id.split('_')[1];
      const nodeLiText = (e.target as HTMLLinkElement).innerHTML;
      setshowСountry(false);
      setTextСountry(nodeLiText);
      dispatch(setCountry({ nodeLiId, nodeLiText }));
    }
  };

  useEffect(() => {
    setTextCatalog(catalog);
    resetSets();
    window.scrollTo(0, 0);
  }, [catalog, resetFilter]);

  const resetFilters = () => {
    const option = {
      nodLiId: '',
      nodeLiText: '',
    };
    resetSets();
    dispatch(setCatalog(option));
    dispatch(setFormText(option));
    dispatch(setCountry(option));
    dispatch(setAppointment(option));
  };

  return (
    <div className="container">
      <div className="filter-input">
        <label className="select-ctigory" htmlFor="">
          <input
            type="text"
            placeholder="Категории товаров"
            defaultValue={textCatalog ? textCatalog : ''}
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
      </div>
      <div className="main-page">
        <div className="filter-select">
          <div className="release-form">
            <label className="select-pharmacies" htmlFor="">
              <input
                type="text"
                placeholder="По форма выпуска"
                defaultValue={textForm ? textForm : ''}
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
                  <ul className="parant-ul" onClick={handleForm}>
                    <li id="other">другой</li>
                    <li id="tablets">таблетки</li>
                    <li id="powder">порошок</li>
                    <li id="capsule">капсула</li>
                    <li id="syrup">сироп</li>
                    <li id="ampoule">ампула</li>
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
                defaultValue={textAppointments ? textAppointments : ''}
              />
              <button onClick={() => setshowAppointments(!showAppointments)}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={showAppointments ? 'up' : ''}
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
                  <ul className="parant-ul" onClick={handleAppointment}>
                    <li id="all">все</li>
                    <li id="adult">взрослый</li>
                    <li id="child">детский</li>
                    <li id="pregnant">Беременным и кормящим</li>
                  </ul>
                )}
              </div>
            </label>
            <label className="select-pharmacies" htmlFor="">
              <input
                type="text"
                placeholder="Страна"
                defaultValue={textСountry ? textСountry : ''}
              />
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
                  <ul className="parant-ul" onClick={handleCountry}>
                    <li id="russia_1">Россия</li>
                    <li id="kyrgystan_7">Кыргызстан</li>
                    <li id="germany_5">Германия</li>
                    <li id="france_4">Франция</li>
                    <li id="kz_6">Казакстан</li>
                    <li id="izrail_8">Израиль</li>
                    <li id="koreya_9">Корея</li>
                    <li id="usa_2">США</li>
                    <li id="india_3">Индия</li>
                  </ul>
                )}
              </div>
            </label>
            <label className="reset-btn">
              <input onClick={resetFilters} type="button" placeholder="Страна" value="очистить" />
            </label>
          </div>
        </div>
        <div className="catalog-page">{renderCardItems()}</div>
      </div>
      <Pagination />
    </div>
  );
};
