import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { GetUserMe, RefreshToken } from '../../store/authUserReducer';
import { getCookiFile, removeLocalStorage } from '../../utils/utilsForm';
import { siginin, exit } from '../../store/authUserReducer';
import { Breadcrumbs } from '../../ui-kit/breadcrumbs/Breadcrumbs';

export const Contact: FC = () => {
  const { exp } = useSelector((state: RootState) => state.AuthReducer);
  const dispatch = useDispatch();
  const getUserMe = () => {
    const curentTime = Math.ceil(new Date().getTime() / 1000) >= exp;
    if (curentTime && localStorage.getItem('__userIsAuth')) {
      const refresh = getCookiFile('refreshToken');
      if (!refresh) {
        removeLocalStorage('__token');
        removeLocalStorage('__userIsAuth');
        removeLocalStorage('__userId');
        dispatch(exit());
        dispatch(siginin());
      }
      store.dispatch(RefreshToken(refresh!));
      setTimeout(() => {
        store.dispatch(GetUserMe());
      }, 700);
    }
    store.dispatch(GetUserMe());
  };

  return (
    <div>
      <div className="contacts container">
        <Breadcrumbs homeLabel="Home" />
        <h3>Контакты</h3>
        <div className="contacts__inner">
          <div className="contacts__info">
            <p>
              Связаться с нами:
              <span>
                По вопросам связанным с оформлением, исполнение заказа вы можете обратиться:
              </span>
            </p>
            <p>
              Телефон: <span>+996 777 22 22 22</span>
            </p>
            <p>
              E-mail: <span>info@mypharm.kg</span>
            </p>
          </div>
        </div>
        <div className="contact__form">
          <p>
            Обратная связь
            <span>
              Если у Вас есть вопросы и пожелания по работе сайта, контакт-центра или службы
              доставки, воспользуйтесь формой обратной связи:
            </span>
          </p>
          <form>
            <div>
              <label>Имя</label>
              <input type="text" placeholder="Ваше имя" />
            </div>
            <div>
              <div>
                <label>E-mail</label>
                <input type="text" placeholder="E-mail" />
              </div>
              <div>
                <label>Номер телефона</label>
                <input type="text" placeholder="Телефон" />
              </div>
            </div>
            <div>
              <label htmlFor="">Сообщение</label>
              <textarea name="" id="" placeholder="Сообщение"></textarea>
            </div>
          </form>
        </div>
        {/* <button onClick={getUserMe}>get Catalog</button> */}
      </div>
    </div>
  );
};
