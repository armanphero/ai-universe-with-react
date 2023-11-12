import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [showAllCards, setShowAllCards] = useState(false);
    const [modalData, setModalData] = useState({});
    const [modalId, setModalId] = useState('01');

    const sortByDate = () => {
        cards.sort((date1, date2) => {
            return new Date(date1.published_in) - new Date(date2.published_in);
        });
        setCards([...cards]);
    }

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data => setCards(data.data.tools))
    }, []);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${modalId}`)
            .then(res => res.json())
            .then(data => setModalData(data.data))
    }, [modalId]);
    return (
        <>
            <div className='text-center mb-3'>
                <span onClick={sortByDate}>
                    <Button>Sort By Date</Button>
                </span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    cards.slice(0, showAllCards ? cards.length : '6').map(card => <Card card={card} key={card.id} modalId={modalId} setModalId={setModalId}></Card>)
                }
            </div>
            <p className='text-center my-3'>
                {
                    !showAllCards && <span onClick={() => setShowAllCards(true)}><Button>See More</Button></span>
                }
            </p>
            <Modal modalData={modalData}></Modal>
        </>
    );
};

export default Cards;