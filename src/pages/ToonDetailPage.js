import React from 'react';
import { useParams } from 'react-router-dom';

import ToonList from '../components/ToonList';

import NotFoundPage from './NotFoundPage';

import { useState, useEffect } from 'react';

import VotesSection from '../components/VotesSection';

import AddToonForm from '../components/AddToonForm';

const ToonDetailPage = () => {
    const { id } = useParams();

    const [toonInfo, setToonInfo] = useState({
        votes: 0,
        id: 0,
        firstName: '',
        lastName: ''
    });
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://api4all.azurewebsites.net/api/people/${id}`);
            const body = await result.json();
            setToonInfo(body);
        }
        fetchData();
    }, [id]);

    if (!toonInfo) return <NotFoundPage />

    return (
        <React.Fragment>
            <h4 className="text-info">{toonInfo.id}. {toonInfo.firstName}
                {toonInfo.lastName}</h4>

                <VotesSection id={id} votes={toonInfo.votes} setToonInfo={setToonInfo} /><hr/>
            <table style={{ "width": "90%", "margin": "auto" }}>
                <tbody>
                    <tr>
                        <td style={{ "width": "15%", "verticalAlign": "top" }}>
                            <img className="rounded img-responsive pull-right img-thumbnail float-left"
                                style={{ "width": "50%" }}
                                src={`${toonInfo.pictureUrl}`} alt={`${toonInfo.firstName} ${toonInfo.lastName}`} />
                        </td>
                        <td style={{ "width": "65%", "verticalAlign": "top" }}>
                            <p><b>Occupation: </b>{toonInfo.occupation}</p>
                            <p><b>Gender: </b>{toonInfo.gender}</p>
                        </td>
                        <td style={{ "width": "20%", "verticalAlign": "top" }}>
                            <h3>Others:</h3>
                            <ToonList exceptId={toonInfo.id} />
                        </td>
                    </tr>
                </tbody>
            </table>

            <AddToonForm />
        </React.Fragment>
    );
}
export default ToonDetailPage;