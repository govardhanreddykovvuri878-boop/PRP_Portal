import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

const DataProvider = ({ children }) => {

    const initialRegistration = {
        PlacementOfficer: [
            {
                id: 1,
                name: "Priyanka J",
                dateOfBirth: "October 14, 1988",
                email: "priya5@eduhire.com",
                gender: "Female",
                phoneCountryCode: "+1",
                phone: "(555) 012-3456",
                address: "745 ECR road ,Chennai - 100010",
                college: "Govt. Eng. College, CBE",
                affiliatedUniversity: "Anna University",
                website: "www.gec.in",
                institutionPhoneCountryCode: "+1",
                institutionPhone: "(555) 012-3456",
                institutionAddress: "745 ECR road, Coimbatore - 100010",
                employeeId: "PO-2024-2349",
                joinedOn: "Apr 15, 2024",
                designation: "Placement Officer",
                experience: "6+ years",
                professionalAddress: "745 OMR road ,Chennai - 105215",
                profilePicture: null,
                isProfilePictureDeleted: false,
            }
        ],
        Recruiter: [],
        Student: [],
        TrainingCoordinator: []
    };

    const [user, setUser] = useState(initialRegistration)

    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
        </Context.Provider>
    );
};

export default DataProvider

export const useData = () => useContext(Context);