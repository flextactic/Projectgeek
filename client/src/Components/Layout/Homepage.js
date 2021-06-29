import  {React, Fragment } from 'react';
import './Homepage.css';
export const Homepage = () => {
    window.onload= function (){
        const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})
    }
    return (
    <Fragment>
      <header>
        <h1 className="big-title translate">Discover.</h1>

        <img src="/person.png" className="person translate" data-speed="-0.25" alt=""/>
        <img src="/mountain1.png" className="mountain1 translate" data-speed="-0.2" alt=""/>
        <img src="/mountain2.png" className="mountain2 translate" data-speed="0.4" alt=""/>
        <img src="/mountain3.png" className="mountain3 translate" data-speed="0.3" alt=""/>
        <img src="/sky.png" className="sky translate" data-speed="0.5" alt=""/>
      </header>

    <section>
        <div className="shadow"></div>

        <div className="homepagecontainer">
            <div className="content opacity">
                <h3 className="title">
                    About
                    <div className="border"></div>
                </h3>
                <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis quos expedita ipsa, a quidem inventore voluptates debitis accusamus tenetur qui et voluptas dicta, culpa earum, doloribus odio consectetur consequuntur soluta quasi nobis! Deserunt voluptatum reiciendis iure expedita sequi quisquam laboriosam temporibus exercitationem.</p>
            </div>

            <div className="imgContainer opacity">
                <img src="/image.jpg" alt=""/>
            </div>
        </div>
    </section>
        </Fragment>
    )
}

export default Homepage;