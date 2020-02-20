import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import male from '../../Images/male.svg';
import female from '../../Images/female.svg';
import none from '../../Images/none.svg';

export default function Card(props) {
    return (
        <div className="card">
            <div className="row">
                <div className="col-1">
                    <img alt="user pic" src={props.item.gender === 'male' ? male : props.item.gender === 'female' ? female : none} />
                </div>
                <div className="col-8">
                    <p className="card-body">
                        {props.item.name}
                    </p>
                    <p className="card-detail">
                        Height: {props.item.height} - mass: {props.item.mass}
                    </p>
                </div>
                <div className="col-3">
                    <button onClick={() => props.delete(props.item.name)} className="button button-primary">
                        <FaAngleRight /> Delete
                    </button>
                </div>
            </div>
        </div>
    )
}