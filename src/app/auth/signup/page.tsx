"use client";

import React, { useState } from 'react';

const SigninPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your signup logic here
        console.log('Signup form submitted');
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={handleEmailChange} />
            <input type="password" value={password} onChange={handlePasswordChange} />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SigninPage;