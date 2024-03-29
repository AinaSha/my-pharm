import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../assets/images/Logo.png';
import { RootState } from '../../store';
import './footer.scss';

export const Footer: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const [dounArrow, setDounArrow] = useState(true);
  const [showCompani, setShowCompani] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const listenWindowWidth = () => {
    window.innerWidth <= 1000 ? setDounArrow(true) : setDounArrow(false);
  };

  useEffect(() => {
    window.addEventListener('load', listenWindowWidth);
    window.addEventListener('resize', listenWindowWidth);
    return () => {
      window.removeEventListener('load', listenWindowWidth);
      window.removeEventListener('resize', listenWindowWidth);
    };
  });

  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer__title">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <p>{translate.heroSubTitle}</p>
          </div>
          <ul>
            <li className="title-list">
              <span>{translate.aboutCompany}</span>
              {dounArrow && (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={showCompani ? 'footer-title-list-douwn up' : 'footer-title-list-douwn'}
                  onClick={() => setShowCompani(!showCompani)}
                >
                  <path
                    d="M25.3334 12L16.0001 21.3333L6.66675 12"
                    stroke="#003838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </li>
            <ul className={dounArrow ? (showCompani ? 'footer__sub-list' : 'hiden') : ''}>
              <li>
                <a href="№">{translate.aboutUs}</a>
              </li>
              {/* <li>
                <a href="">{translate.license}</a>
              </li>
              <li>
                <a href="">{translate.purveryor}</a>
              </li> */}
            </ul>
          </ul>
          <ul>
            <li className="title-list">
              <span>{translate.service}</span>
              {dounArrow && (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={showService ? 'footer-title-list-douwn up' : 'footer-title-list-douwn'}
                  onClick={() => setShowService(!showService)}
                >
                  <path
                    d="M25.3334 12L16.0001 21.3333L6.66675 12"
                    stroke="#003838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </li>
            <ul className={dounArrow ? (showService ? 'footer__sub-list' : 'hiden') : ''}>
              <li>
                <a href="№">{translate.catalog}</a>
              </li>
              {/* <li>
                <a href="">{translate.termsOfUse}</a>
              </li>
              <li>
                <a href="">{translate.privacyPolicy}</a>
              </li> */}
              <li>
                <a href="">{translate.sectionTitle_1}</a>
              </li>
              {/* <li>
                <a href="">{translate.comment}</a>
              </li> */}
            </ul>
          </ul>
          <ul>
            <li className="title-list">
              <span>{translate.help}</span>
              {dounArrow && (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={showHelp ? 'footer-title-list-douwn up' : 'footer-title-list-douwn'}
                  onClick={() => setShowHelp(!showHelp)}
                >
                  <path
                    d="M25.3334 12L16.0001 21.3333L6.66675 12"
                    stroke="#003838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </li>
            <ul className={dounArrow ? (showHelp ? 'footer__sub-list' : 'hiden') : ''}>
              <li>
                <a href="№">{translate.FAQ}</a>
              </li>
              {/* <li>
                <a href="">{translate.order}</a>
              </li> */}
              <li>
                <a href="">{translate.feedback}</a>
              </li>
              {/* <li>
                <a href="">{translate.delivery}</a>
              </li> */}
              {/* <li>
                <a href="">{translate.payment}</a>
              </li> */}
            </ul>
          </ul>
          <ul className="footer__contact">
            <li className="title-list">
              <span>{translate.contacts}</span>
              {dounArrow && (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={showContact ? 'footer-title-list-douwn up' : 'footer-title-list-douwn'}
                  onClick={() => setShowContact(!showContact)}
                >
                  <path
                    d="M25.3334 12L16.0001 21.3333L6.66675 12"
                    stroke="#003838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </li>
            <ul className={dounArrow ? (showContact ? 'footer__sub-list' : 'hiden') : ''}>
              <li>
                <a href="">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 1H19M19 1V6M19 1L13 7M3 1C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V4C1 12.284 7.716 19 16 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V13.72C18.9998 13.5102 18.9337 13.3058 18.8109 13.1356C18.6882 12.9655 18.515 12.8383 18.316 12.772L13.823 11.274C13.5947 11.1981 13.3466 11.2071 13.1244 11.2993C12.9021 11.3915 12.7205 11.5607 12.613 11.776L11.483 14.033C9.03429 12.9264 7.07312 10.9649 5.967 8.516L8.224 7.388C8.43925 7.28045 8.60851 7.0989 8.70072 6.87665C8.79293 6.65439 8.8019 6.40634 8.726 6.178L7.228 1.683C7.16148 1.48398 7.03404 1.31093 6.86372 1.18835C6.6934 1.06577 6.48884 0.99988 6.279 1H3Z"
                      stroke="#003838"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p>+996 709 08 37 63</p>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L8.89 9.26C9.21866 9.47928 9.6049 9.5963 10 9.5963C10.3951 9.5963 10.7813 9.47928 11.11 9.26L19 4M3 15H17C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15Z"
                      stroke="#003838"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>info.mypharm@gmail.com</p>
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="sub-footer">
          <div className="sub-footer__text">
            <p>{translate.copyright} MyPharm 2022</p>
            <p>{translate.copyrightText}</p>
          </div>
          {/* <div className="sub-footer__links">
            <div className="">
              <a href="">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.5313 15.5C30.5313 12.5271 29.6497 9.62097 27.998 7.14909C26.3464 4.67722 23.9988 2.75062 21.2522 1.61294C18.5056 0.475263 15.4833 0.177594 12.5676 0.757578C9.65178 1.33756 6.97347 2.76915 4.87131 4.87131C2.76915 6.97347 1.33756 9.65178 0.757578 12.5676C0.177594 15.4833 0.475263 18.5056 1.61294 21.2522C2.75062 23.9988 4.67722 26.3464 7.14909 27.998C9.62097 29.6497 12.5271 30.5313 15.5 30.5313C19.4854 30.5274 23.3064 28.9426 26.1245 26.1245C28.9426 23.3064 30.5274 19.4854 30.5313 15.5ZM16.6563 28.1609V18.9688H20.125C20.4317 18.9688 20.7258 18.8469 20.9426 18.6301C21.1594 18.4133 21.2813 18.1192 21.2813 17.8125C21.2813 17.5058 21.1594 17.2118 20.9426 16.9949C20.7258 16.7781 20.4317 16.6563 20.125 16.6563H16.6563V13.1875C16.6563 12.5742 16.8999 11.986 17.3336 11.5523C17.7673 11.1186 18.3554 10.875 18.9688 10.875H21.2813C21.5879 10.875 21.882 10.7532 22.0989 10.5363C22.3157 10.3195 22.4375 10.0254 22.4375 9.71876C22.4375 9.4121 22.3157 9.118 22.0989 8.90117C21.882 8.68433 21.5879 8.56251 21.2813 8.56251H18.9688C17.7433 8.56632 16.5691 9.05482 15.7026 9.92135C14.8361 10.7879 14.3476 11.9621 14.3438 13.1875V16.6563H10.875C10.5683 16.6563 10.2743 16.7781 10.0574 16.9949C9.84058 17.2118 9.71876 17.5058 9.71876 17.8125C9.71876 18.1192 9.84058 18.4133 10.0574 18.6301C10.2743 18.8469 10.5683 18.9688 10.875 18.9688H14.3438V28.1609C11.0843 27.8634 8.06498 26.3207 5.91388 23.8539C3.76279 21.387 2.6455 18.1858 2.79443 14.9161C2.94336 11.6465 4.34703 8.56013 6.71348 6.29901C9.07993 4.0379 12.227 2.77611 15.5 2.77611C18.773 2.77611 21.9201 4.0379 24.2865 6.29901C26.653 8.56013 28.0567 11.6465 28.2056 14.9161C28.3545 18.1858 27.2372 21.387 25.0861 23.8539C22.935 26.3207 19.9157 27.8634 16.6563 28.1609Z"
                    fill="#003838"
                  />
                </svg>
              </a>
            </div>
            <div className="">
              <a href="">
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.5413 26.0392C26.2368 25.3416 26.7829 24.5032 27.1392 23.5837C27.4805 22.7005 27.7152 21.6936 27.7835 20.2173C27.8517 18.7389 27.8688 18.2653 27.8688 14.5C27.8688 10.7346 27.8517 10.261 27.7835 8.78263C27.7152 7.30637 27.4805 6.29943 27.1392 5.41623C26.7908 4.4911 26.2448 3.65312 25.5392 2.96077C24.8468 2.25527 24.0088 1.70925 23.0837 1.36077C22.2005 1.01943 21.1936 0.784768 19.7173 0.716501C18.2389 0.648234 17.7653 0.633301 14 0.633301C10.2347 0.633301 9.76107 0.648234 8.28267 0.718634C6.8064 0.782634 5.79947 1.0173 4.91627 1.36077C3.9916 1.71005 3.1538 2.25596 2.4608 2.96077C1.75599 3.65377 1.21008 4.49156 0.860798 5.41623C0.519465 6.29943 0.284798 7.30637 0.216531 8.78263C0.148265 10.261 0.133331 10.7346 0.133331 14.5C0.133331 18.2653 0.148265 18.7389 0.218665 20.2173C0.282665 21.6936 0.517331 22.7005 0.860798 23.5837C1.21066 24.5096 1.7568 25.3458 2.4608 26.0392C3.15413 26.7432 3.99253 27.2893 4.91627 27.6392C5.79947 27.9805 6.8064 28.2152 8.28267 28.2834C9.76107 28.3496 10.2347 28.3666 14 28.3666C17.7653 28.3666 18.2389 28.3496 19.7173 28.2813C21.1936 28.2173 22.2005 27.9826 23.0837 27.6392C24.0047 27.2827 24.8432 26.7377 25.5413 26.0392ZM2.26666 12.868V16.132C2.2624 17.8834 2.2624 18.3378 2.30933 19.332C2.3648 20.5821 2.43306 21.4994 2.64213 22.1906C2.84266 22.8562 3.06666 23.5346 3.80053 24.3496C4.5344 25.1666 5.24053 25.5357 6.1408 25.8088C7.0432 26.0797 8.176 26.1373 9.15946 26.1821C10.2731 26.2333 10.7168 26.2333 13.0549 26.2333H15.5787C17.3749 26.2354 17.8272 26.2376 18.8341 26.1906C20.0821 26.133 20.9995 26.0648 21.6928 25.8578C22.3563 25.6573 23.0347 25.4312 23.8496 24.6994C24.6667 23.9656 25.0357 23.2573 25.3088 22.357C25.5797 21.4568 25.6395 20.324 25.6843 19.3405C25.7333 18.2269 25.7333 17.7853 25.7333 15.4536V13.5549C25.7333 11.2168 25.7333 10.7752 25.6843 9.65943C25.6395 8.67597 25.5797 7.54317 25.3088 6.6429C25.0379 5.7405 24.6688 5.03437 23.8496 4.3005C23.0325 3.56663 22.3563 3.34263 21.6928 3.1421C20.9995 2.93517 20.0821 2.86477 18.8341 2.8093C17.7496 2.76473 16.664 2.75051 15.5787 2.76663H13.0549C10.7168 2.76663 10.2731 2.76663 9.15946 2.8157C8.176 2.8605 7.0432 2.92023 6.1408 3.19117C5.24053 3.46423 4.5344 3.8333 3.80053 4.65037C3.06666 5.46743 2.84053 6.1437 2.64213 6.8093C2.43306 7.5005 2.3648 8.41783 2.30933 9.66797C2.2624 10.6621 2.2624 11.1165 2.26666 12.868ZM14 9.69997C12.727 9.69997 11.5061 10.2057 10.6059 11.1059C9.70571 12.006 9.2 13.2269 9.2 14.5C9.2 15.773 9.70571 16.9939 10.6059 17.8941C11.5061 18.7943 12.727 19.3 14 19.3C15.273 19.3 16.4939 18.7943 17.3941 17.8941C18.2943 16.9939 18.8 15.773 18.8 14.5C18.8 13.2269 18.2943 12.006 17.3941 11.1059C16.4939 10.2057 15.273 9.69997 14 9.69997ZM7.06667 14.5C7.06667 12.6611 7.79714 10.8976 9.09739 9.59736C10.3976 8.29711 12.1612 7.56663 14 7.56663C15.8388 7.56663 17.6024 8.29711 18.9026 9.59736C20.2029 10.8976 20.9333 12.6611 20.9333 14.5C20.9333 16.3388 20.2029 18.1023 18.9026 19.4026C17.6024 20.7028 15.8388 21.4333 14 21.4333C12.1612 21.4333 10.3976 20.7028 9.09739 19.4026C7.79714 18.1023 7.06667 16.3388 7.06667 14.5ZM21.4027 8.6973C21.827 8.6973 22.234 8.52873 22.534 8.22867C22.8341 7.92861 23.0027 7.52165 23.0027 7.0973C23.0027 6.67296 22.8341 6.26599 22.534 5.96593C22.234 5.66587 21.827 5.4973 21.4027 5.4973C20.9783 5.4973 20.5714 5.66587 20.2713 5.96593C19.9712 6.26599 19.8027 6.67296 19.8027 7.0973C19.8027 7.52165 19.9712 7.92861 20.2713 8.22867C20.5714 8.52873 20.9783 8.6973 21.4027 8.6973Z"
                    fill="#003838"
                  />
                </svg>
              </a>
            </div>
            <div className="">
              <a href="">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.2 8.11865L5.35001 14.6437L11.875 16.8187M24.2 8.11865L11.875 16.8187M24.2 8.11865L18.4 23.3437L11.875 16.8187"
                    stroke="#003838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5 30C23.5084 30 30 23.5084 30 15.5C30 7.49165 23.5084 1 15.5 1C7.49165 1 1 7.49165 1 15.5C1 23.5084 7.49165 30 15.5 30Z"
                    stroke="#003838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
