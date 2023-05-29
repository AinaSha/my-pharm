import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Breadcrumbs } from '../../ui-kit/breadcrumbs/Breadcrumbs';

import './contact.scss';

export const Contact: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);

  return (
    <div>
      <div className="contacts container">
        <Breadcrumbs homeLabel="home" name="" />
        <h3>{translate.contacts}</h3>
        <div className="contacts__inner">
          <div className="contacts__info">
            <p>
              {translate.connectWithUs}:<span>{translate.questionsRelated}:</span>
            </p>
            <p>
              {translate.telephone}: <span>+996 777 22 22 22</span>
            </p>
            <p>
              E-mail: <span>info@mypharm.kg</span>
            </p>
          </div>
          <div className="contacts__form">
            <div className="contacts__form-inner">
              <p>
                {translate.feedback}
                <span>{translate.anyQuestions}</span>
              </p>
              <form className="feedback-form">
                <div className="feedback-form__item">
                  <label>{translate.name}</label>
                  <input type="text" placeholder={translate.yourName} />
                </div>
                <div className="feedback-contact-forms">
                  <div className="feedback-form__item mail-input">
                    <label>E-mail</label>
                    <input type="text" placeholder="E-mail" />
                  </div>
                  <div className="feedback-form__item phone-input">
                    <label>{translate.phoneNumber}</label>
                    <input type="text" placeholder={translate.telephone} />
                  </div>
                </div>
                <div className="feedback-form__item">
                  <label htmlFor="">{translate.mail}</label>
                  <textarea name="" id="" placeholder={translate.mail}></textarea>
                </div>
                <button className="feedback-form__btn" type="submit">
                  {translate.send}
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <button onClick={getUserMe}>get Catalog</button> */}
      </div>
    </div>
  );
};
