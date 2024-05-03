import { useEffect, useState } from "react";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import { Link } from "react-router-dom";


const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-events")
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <section>
            <SectionHeader title="Recent Events" description="Explore our recent events!" />

            <div className="px-5 lg:px-12 flex items-center justify-center gap-10 flex-col lg:flex-row">

                {
                    events?.map(event => <> <div className="card w-96 glass" key={event?._id}>
                        <figure><img src={event?.photo} alt="thumbnails!" className="w-full h-60" /></figure>
                        <div className="card-body">
                            <h2 className="card-title brandFont text-primary">{event?.event_title}</h2>
                            <p className="font-bold">Posted By: <span className="text-primary">{event?.name}</span></p>
                            <p className="text-sm font-semibold">{event?.description?.length > 150 ? event?.description?.slice(0, 150) : event?.description}</p>



                            <div to="#" className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => document.getElementById(event?._id).showModal()}>Show more!</button>
                            </div>
                        </div>
                    </div>


                        <dialog id={event?._id} className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <figure><img src={event?.photo} alt="photo" className="mt-10 rounded-md" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {event?.event_title}
                                    </h2>
                                    <p>{event?.description}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline font-semibold"><span className='brandFont font-semibold text-primary'>Date: </span> {event?.date}</div>
                                        <div className="badge badge-outline font-semibold"><span className='brandFont font-semibold text-primary'>Posted By: </span> {event?.name}</div>
                                    </div>
                                </div>
                            </div>
                        </dialog>

                    </>)
                }
            </div>



        </section>
    );
};

export default Events;