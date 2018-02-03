import React from 'react';
import PropTypes from 'prop-types';

import HotelRow from './HotelRow';

const HotelsTable = ({ hotels }) => (
  <table>
    <tbody>
      <tr><th>ホテル名</th></tr>
      {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
    </tbody>
  </table>
);

HotelsTable.PropTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

HotelsTable.defaultProps = {
  address: [],
};

export default HotelsTable;
