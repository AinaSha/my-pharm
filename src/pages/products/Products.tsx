import { FC, useEffect, useState } from 'react';
import { Pagination } from '../../components/pagination/Pagination';
import { RenderCardItem } from '../../components/renderCard/RenderCardItem';
import { CatalogList } from '../../ui-kit/catalog/CatalogList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, store } from '../../store';
import { IProduct } from '../../types/Types';
import './products.scss';
import {
  getProduct,
  setAppointment,
  setCatalog,
  setCountry,
  setFormText,
  setSearchName,
  setShowCategore,
} from '../../store/productsReducer';

export const Products: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const {
    products,
    appointmentId,
    searchName,
    catalog,
    catalogId,
    countryId,
    form,
    showCategore,
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

  const cardsOnPage = 4;
  const [allCards, setAllCards] = useState<IProduct[]>([]);
  const [curentPage, setCurentPage] = useState('1');
  const allPageNumbers = Math.ceil(allCards.length / cardsOnPage);
  const [cards, setCards] = useState<IProduct[]>(allCards.slice(0, cardsOnPage));

  const favirutesProduct = localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites') as string)
    : [];

  if (!products[0].name) store.dispatch(getProduct());

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

  useEffect(() => {
    const allCard: IProduct[] = [];
    products.map((el: IProduct) => {
      if (catalogId && el.in_stock) {
        if (appointmentId && textForm && countryId) {
          if (
            form === el.form_type &&
            el.manufacturer?.id === countryId &&
            el.category?.id === Number(catalogId) &&
            appointmentId === el.appointment
          ) {
            allCard.push(el);
          }
        } else if (appointmentId && textForm) {
          if (
            form === el.form_type &&
            el.category?.id === Number(catalogId) &&
            appointmentId === el.appointment
          ) {
            allCard.push(el);
          }
        } else if (appointmentId && countryId) {
          if (
            el.manufacturer?.id === countryId &&
            el.category?.id === Number(catalogId) &&
            appointmentId === el.appointment
          ) {
            allCard.push(el);
          }
        } else if (textForm && countryId) {
          if (
            el.manufacturer?.id === countryId &&
            el.category?.id === Number(catalogId) &&
            form === el.form_type
          ) {
            allCard.push(el);
          }
        } else if (appointmentId) {
          if (el.category?.id === Number(catalogId) && appointmentId === el.appointment) {
            allCard.push(el);
          }
        } else if (textForm) {
          if (el.category?.id === Number(catalogId) && form === el.form_type) {
            allCard.push(el);
          }
        } else if (countryId) {
          if (el.category?.id === Number(catalogId) && el.manufacturer?.id === countryId) {
            allCard.push(el);
          }
        } else if (catalogId) {
          if (el.category?.id === Number(catalogId)) {
            allCard.push(el);
          }
        }
      } else if (searchName && el.in_stock) {
        if (el.name.toLocaleLowerCase().indexOf(searchName.toLocaleLowerCase()) !== -1) {
          allCard.push(el);
        }
      } else if (el.in_stock) {
        if (textForm && countryId && appointmentId) {
          if (
            el.manufacturer?.id === countryId &&
            form === el.form_type &&
            appointmentId === el.appointment
          ) {
            allCard.push(el);
          }
        } else if (appointmentId && countryId) {
          if (el.manufacturer?.id === countryId && appointmentId === el.appointment) {
            allCard.push(el);
          }
        } else if (appointmentId && textForm) {
          if (form === el.form_type && appointmentId === el.appointment) {
            allCard.push(el);
          }
        } else if (textForm && countryId) {
          if (el.manufacturer?.id === countryId && form === el.form_type) {
            allCard.push(el);
          }
        } else if (appointmentId) {
          if (appointmentId === el.appointment) {
            allCard.push(el);
          }
        } else if (textForm) {
          if (form === el.form_type) {
            allCard.push(el);
          }
        } else if (countryId) {
          if (el.manufacturer?.id === countryId) {
            allCard.push(el);
          }
        } else {
          allCard.push(el);
        }
      }
    });
    setAllCards(allCard);
    setCards(allCard.slice(0, cardsOnPage));
  }, [appointmentId, searchName, catalog, catalogId, countryId, form, resetFilter, products]);

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
    dispatch(setSearchName(''));
  };

  const paginate = (
    pageNumber: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    btnChilde: ChildNode | null | undefined
  ) => {
    let btn: HTMLButtonElement;
    if (!!e) btn = e.currentTarget as HTMLButtonElement;
    const buttons: ChildNode | NodeListOf<ChildNode> | undefined = btnChilde
      ? btnChilde.childNodes
      : btn!.parentElement?.childNodes;
    if (!buttons) return;
    buttons.forEach((el: ChildNode) => {
      const btn = el as HTMLButtonElement;
      btn.classList.remove('active-btn');

      if (btn.textContent === String(pageNumber)) btn.classList.add('active-btn');
    });

    const start = (pageNumber - 1) * cardsOnPage;
    const end = start + cardsOnPage;
    setCurentPage(String(pageNumber));
    setCards(allCards.slice(start, end));
  };

  return (
    <div className="container">
      <div className="filter-input">
        <label className="select-ctigory" htmlFor="">
          <input
            type="text"
            placeholder={translate.productСategories}
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
                placeholder={translate.accordingReleaseForm}
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
                    <li id="other">{translate.another}</li>
                    <li id="tablets">{translate.pills}</li>
                    <li id="powder">{translate.powder}</li>
                    <li id="capsule">{translate.capsule}</li>
                    <li id="syrup">{translate.syrup}</li>
                    <li id="ampoule">{translate.ampoule}</li>
                    <li id="spray">{translate.spray}</li>
                    <li id="ointment">{translate.ointment}</li>
                  </ul>
                )}
              </div>
            </label>
            <label className="select-pharmacies" htmlFor="">
              <input
                type="text"
                placeholder={translate.appointments}
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
                    <li id="all">{translate.another}</li>
                    <li id="adult">{translate.adult}</li>
                    <li id="child">{translate.child}</li>
                    <li id="pregnant">{translate.pregnant}</li>
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
                    <li id="russia_1">{translate.russia}</li>
                    <li id="kyrgystan_7">{translate.kyrgystan}</li>
                    <li id="germany_5">{translate.germany}</li>
                    <li id="france_4">{translate.france}</li>
                    <li id="kz_6">{translate.kz}</li>
                    <li id="izrail_8">{translate.izrail}</li>
                    <li id="koreya_9">{translate.koreya}</li>
                    <li id="usa_2">{translate.usa}</li>
                    <li id="india_3">{translate.india}</li>
                  </ul>
                )}
              </div>
            </label>
            <label className="reset-btn">
              <input
                onClick={resetFilters}
                type="button"
                placeholder={translate.country}
                value={translate.clear}
              />
            </label>
          </div>
        </div>
        <div className="catalog-page">
          {cards.map((el) => {
            return renderCard(el);
          })}
        </div>
      </div>
      {allPageNumbers > 1 && (
        <Pagination allPageNumbers={allPageNumbers} paginate={paginate} curentPage={curentPage} />
      )}
    </div>
  );
};
