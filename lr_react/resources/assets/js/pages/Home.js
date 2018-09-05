import React, { Component } from 'react'
import Slider from '../components/Slide';
import Category from '../components/Category';
import Product from '../components/Product';
import Collection from '../components/Collection';
import BlogSection from '../components/BlogSection';
import Selling from '../components/Selling';
import Clients from '../components/Clients';

export default class Home extends Component {

    render() {
        // console.log(func);
        return (
            <div>
                <Slider />
                <Category />
                <Product />
                <Collection />
                <BlogSection />
                <Selling />
                <Clients />
            </div>
            
        )
    }
}
