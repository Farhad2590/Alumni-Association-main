import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import useAllAlumni from "../../Hooks/useAllAlumni";

const Alumnies = () => {
    const {
        allCommittee
    } = useAllAlumni();

    return (
        <section>
            <SectionHeader title="Our Alumnies" description="See our proud alumnies." />

            <div className="my-28 px-5 lg:px-12 max-w-2xl mx-auto">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Rule</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allCommittee?.map(member => <tr key={member?._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={member?.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{member?.name}</div>
                                                <div className="text-sm opacity-50">{member?.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-primary badge-md text-white font-semibold">Alumni</span>
                                    </td>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    );
};

export default Alumnies;