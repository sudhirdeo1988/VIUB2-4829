import React from 'react';
import { useQueryParam } from 'use-query-param';
import './Header.scss';
import { getCountryHostUrl } from '../../utils';

const Header = () => {
  const allQueryParams = window.location.search;
  const { queryParams } = useQueryParam();
  const host = getCountryHostUrl(queryParams.country, queryParams.language);
  // const [, , country, language] = window.location.pathname.split('/');
  // const host = getCountryHostUrl(country, language);
  return (
    <div className="c-Header">
      <div className="header__nav__s1">
        <div className="nav__logo">
          <a
            href={`${host}${allQueryParams}${
              allQueryParams ? '&' : '?'
            }redirected_from=dirtErrorPage`}
            className="viuRedirectLogo"
          >
            <svg width="74" height="29">
              <path
                fill="#ffbf00"
                fillRule="evenodd"
                d="M66.101 23.322c4.363 0 7.899-2.775 7.899-6.2v-7.84a.536.536 0 0 0-.533-.54h-3.31a.536.536 0 0 0-.532.54l-.004 7.11c0 1.532-1.581 2.772-3.533 2.772h-.225c-1.95 0-3.533-1.24-3.533-2.772l-.003-7.11c0-.299-.24-.54-.534-.54h-3.308a.537.537 0 0 0-.534.54v7.84c0 3.425 3.537 6.2 7.9 6.2h.25zm-53.673-17.7c5.684 0 10.293 4.66 10.293 10.411 0 5.748-4.609 10.409-10.293 10.409-5.685 0-10.295-4.661-10.295-10.409 0-5.75 4.61-10.411 10.295-10.411zm12.427 10.411c0-6.942-5.565-12.57-12.427-12.57C5.563 3.463 0 9.091 0 16.033 0 22.973 5.563 28.6 12.428 28.6c6.862 0 12.427-5.628 12.427-12.567zM54.683 3.091C54.683 1.715 53.58.6 52.22.6c-1.361 0-2.464 1.115-2.464 2.49 0 1.378 1.103 2.493 2.464 2.493 1.36 0 2.463-1.115 2.463-2.492zM19.527 16.03a3.53 3.53 0 0 0-1.868-3.125L8.677 8.783a.424.424 0 0 0-.623.38v2.419a.8.8 0 0 0 .459.726l7.307 3.07c.251.107.429.36.429.654v.001a.712.712 0 0 1-.43.654l-7.306 3.069a.801.801 0 0 0-.459.727V22.9a.426.426 0 0 0 .623.38l8.982-4.123a3.53 3.53 0 0 0 1.868-3.124v-.001zm18.451 7.291h.002c1.685 0 3.15-.962 3.882-2.373l5.124-11.416a.548.548 0 0 0 .06-.252.537.537 0 0 0-.534-.539h-3.004c-.4 0-.746.24-.903.584l-3.813 9.285a.884.884 0 0 1-.814.544h-.001a.884.884 0 0 1-.813-.544l-3.812-9.285a.996.996 0 0 0-.903-.584h-3.004a.536.536 0 0 0-.535.54c0 .09.023.176.061.25l5.124 11.417a4.375 4.375 0 0 0 3.882 2.373h.001zm12.72 0a.537.537 0 0 1-.532-.54v-13.5c0-.299.238-.54.533-.54h3.041c.295 0 .535.241.535.54v13.5c0 .298-.24.54-.535.54H50.7z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
