import React from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Paneer Tikka', price: 200, img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsidkEYcQU-H_WzyG6ppLuFg31hpCeCi5HtJtKiI4OVcllYCBWVLykmdcnOTgKfInZxUt_TC7slFkBAhRV-Ora_o3VVUL2JoCBWXSj8x_MoGj-ZeqaqlEXkQTUZjfxSs44secSuroZyOHoHiUj3Ej7alGAsK9UDn75PioFZoLioMXkFO-hO1lkREj6Lhw/s320/panneertikka.png' },
    { id: 2, name: 'Spring Rolls', price: 180, img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTJJwnq__us2d-8an4UPn5L9xNm9_lYOBKpNQ2e0n4wxoQgA0e-usbTqy9HWnP_vhTFyDbF5AqdXlGQaGqxJyOUVtpkR1hZbjz6ed7TqmqigVjORYItkuc1Mt3XOWejgsBW1aoJ-QKy8xLdv6Z8v6WFIDCCOuigwrJMDeE8KcYyOZQfzBJvohOjTpjs1Q/s320/spring%20rols.png' },
    { id: 3, name: 'Paneer Butter Masala', price: 280, img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSA7d2RAn83kfkjygvfGArP5KgiRu3EdKAc7kEUkeNxEDUsNxtklYLTpB1sVJLnb5FOO3MMGrY2OV4Rp9Ze6CR4kmz4FZAb7Utqsu9LPO_BdgoPV9-uXEj6t89lJ34SS3pIrD2ZErRuISy5exsqym1WWd3iGJ1Ofj86xfwiKbKeOTo6lAMCQ1VIlLoZ2Q/s320/panner%20butter%20masala.png' },
    { id: 4, name: 'Vegetable Biryani', price: 250, img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBECX8zySedcM0A_IqDJAn23jqrPg77oYvsDNUtt1-EymlYe3GKt1_NUvXBOVzlGDZCP_J4Td5EAYxANAuLEkTKy1J30arxOdr8Y4ywDAyYnrsBYi4a03EXF8ONyj7uqjr1-NEu3wF5DS1ajaTmEZ4FU8uF6BUYAn6-X_DTwEXf9Ps47MZd7aE-sxvQus/s320/veg%20biryani.png' },
    { id: 5, name: 'Gulab Jamun', price: 120, img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSj1p6zoN1DjBAP24L_AFloQ-J4l4rjls7I0XvhvtpssZU-ukeqVtZPBq5Mj3W70dx3bSaHXzB48zF0Ax7KrzLxm0FiM-8eTxVxs6DWyoUBjzFwtkGuVpr1zt34UesQAguxZADZUU7lOtMuetgJpJyN7aDcnYJWuyISZfM13CQD4RPzqHxXS1cRkjNpEw/s320/gulab%20jamun.png' },
    { id: 6, name: 'Rasmalai', price: 150, img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFiOz8bzYTXhC-zO734bqTnn4NKLW8W56pcbEuAnlPZhbzNXTaojObG37sirBHGkSEvsp4ThLzpCjZpCOijY_OAzsm0QIflz7XgpsEe9-JRlAA-6wA1XO5bQIqrdiD00Eb8NtzRWOvOXGNICfpMBbc1SAGLK-mq-r7oxl4xejTSVa6UfRMV4ypYxfCWYo/s320/rasmalai.png' },
  ];

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Price: ₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

