import React, { useState } from 'react';

const Modal = ({ modalData }) => {
    const { image_link, description, integrations, features, pricing } = modalData;
    // console.log(modalData);
    return (
        <>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex flex-col lg:flex-row-reverse mt-6 gap-3">
                        <figure>
                            <img src={image_link ? image_link[0] : 'not found'} alt="Album" />
                        </figure>
                        <div className="card-body bg-rose-100 border border-rose-800 rounded-md">
                            <h2 className="card-title">{description}</h2>
                            <div className='flex flex-col gap-3 md:flex-row md:justify-between my-3'>
                                {
                                    pricing?.map((price, index) => <div key={index} className='text-center bg-white p-3 rounded-lg text-success font-bold'>{price.price} <br /> {price.plan}</div>)
                                }
                            </div>
                            <div className='flex justify-between mt-3'>
                                <div>
                                    <h1 className='font-bold text-xl mb-2'>Features</h1>
                                    {
                                        features && Object.values(features).map((feature, index) => <p key={index}>{index + 1} . {feature.feature_name}</p>)
                                    }
                                </div>
                                <div>
                                    <h1 className='font-bold text-xl mb-2'>Integrations</h1>
                                    {
                                        integrations?.map((integration, index) => <p key={index}>{index + 1} . {integration}</p>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Modal;