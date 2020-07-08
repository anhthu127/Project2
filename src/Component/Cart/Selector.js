import React from 'react';
import '../../Styles/Selector.css'
import { EventEmitter } from 'events';


const data = {
    provinces: [
        { id: 0, name: 'Hà Nội' },
        { id: 1, name: 'Hồ Chí Minh' },
        { id: 2, name: 'Đà Nẵng' },
        { id: 3, name: 'Bắc Giang' },
        { id: 4, name: 'Thanh Hóa' },
    ],
    cities: [
        { id: 0, name: 'Thanh Xuân', provinceId: 0 },
        { id: 1, name: 'Đống Đa', provinceId: 0 },
        { id: 2, name: 'Hai Bà Trưng', provinceId: 0 },
        { id: 3, name: 'Quận 1', provinceId: 1 },
        { id: 4, name: 'Quận 2', provinceId: 1 },
        { id: 5, name: 'Hải Châu', provinceId: 2 },
        { id: 6, name: 'Cẩm Lệ', provinceId: 2 },
        { id: 7, name: 'Việt Yên', provinceId: 3 },
        { id: 8, name: 'Lục Ngạn', provinceId: 3 },
        { id: 9, name: 'Cẩm Thủy', provinceId: 4 },
        { id: 10, name: 'TP.Thanh Hóa', provinceId: 4 },
    ]
};

class Province extends React.Component {
    onSelect = (event) => {
        this.props.onSelect(parseInt(event.target.value));
        { window.sessionStorage.setItem('provinces', data.provinces[event.target.value].name) }

    }
    render() {
        return (
            <div>

                <select className='seletor-display' onChange={this.onSelect}  >
                    <option className='item-selector'>--- Chọn thành phố ---</option>
                    {
                        this.props.data.map(prov => (
                            <option className='item-selector'
                                key={prov.id}
                                value={prov.id}
                                selected={this.props.selectedId === prov.id}>
                                {prov.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        );
    }
}

class City extends React.Component {
    onSelect = (event) => {
        this.props.onSelect(parseInt(event.target.value));
        console.log("cities: " + [event.target.value])
        { window.sessionStorage.setItem('city', data.cities[event.target.value].name) }
    }
    render() {
        return (
            <div>
                <select className='seletor-display' onClick={this.onSelect}>
                    <option className='item-selector'>--- Chọn quận/huyện ---</option>
                    {
                        this.props.data.map(city => (
                            <option className='item-selector'
                                key={city.id}
                                value={city.id}
                                selected={this.props.selectedId === city.id}>
                                {city.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        );
    }
}


export default class Address extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            provinces: data.provinces,
            provinceId: null,
            cities: data.cities,
            cityId: null
        };
    }

    onSelectProvince = (provId) => {
        const selCities = data.cities.filter(c => c.provinceId === provId);
        this.setState({
            provinceId: provId,
            cities: selCities
        });
    }

    onSelectCity = (city) => {
        this.setState({
            cityId: city.id
        });
    }

    render() {
        return (
            <div>
                <Province
                    data={this.state.provinces}
                    selectedId={this.state.provinceId}
                    onSelect={this.onSelectProvince} />
                <div style={{ width: '100%', height: '20px' }}></div>
                <City
                    data={this.state.cities}
                    selectedId={this.state.cityId}
                    onSelect={this.onSelectCity} />
            </div>
        );
    }
}


