import React from 'react';

const categories = [
    {
        name: 'Commercial',
        description: 'Photos of grocery stores, food trucks, and other commercial products',
    },
    {
        name: 'Portraits',
        description: 'Portraits of people in my life',
    },
    {
        name: 'Food',
        description: 'Delicious delicacies',
    },
    {
        name: 'Landscape',
        description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
    },
];

function categorySelected(name) {
    console.log(`${name} clicked`);
}

function Nav() {
    return (
        <header>
            <h2>
                <a href='/'>
                    <span role='img' aria-label='camera'> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about'>About me</a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map(category => {
                        return <li className='mx-1' key={category.name}>
                            {/* if just 'onClick={categorySelected(category.name)}', 
                            it will return the function every time elements are rendered */}
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;