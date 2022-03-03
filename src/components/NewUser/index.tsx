import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { UserType } from '../Users';

const NewUser = () => {
    const [newUserData, setNewUserData] = useState<UserType>({
        id: 0,
        name: '',
        phone: '',
        email: '',
        website: '',
    });

    const handleChange = (e: any) => {
        const _newUserData = { ...newUserData } as any;
        _newUserData[e.target.name] = e.target.value;
        setNewUserData(_newUserData);
    };

    const handlePostData = () => {
        console.log('new user data', newUserData);
        alert('Data posted successfully');
    };

    return (
        <div className="new-user">
            <h1>Add a new user</h1>
            <Link to="/users">Go back</Link>

            <div className="new__form">
                <div className="new-user__form-group">
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={newUserData.name}
                        placeholder="John Doe"
                    />
                </div>
                <div className="new-user__form-group">
                    <label htmlFor="">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        value={newUserData.phone}
                        placeholder="0004172"
                    />
                </div>
                <div className="new-user__form-group">
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={newUserData.email}
                        placeholder="abc@something.com"
                    />
                </div>
                <div className="new-user__form-group">
                    <label htmlFor="">Website</label>
                    <input
                        type="text"
                        name="website"
                        onChange={handleChange}
                        value={newUserData.website}
                        placeholder="www.something.com"
                    />
                </div>
                <div className="new-user__form-group">
                    <button onClick={handlePostData}>Save data</button>
                </div>
            </div>
        </div>
    );
};

export default NewUser;
