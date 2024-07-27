"use client";
import React, { useState } from 'react';
import { Button, Input, Card, CardHeader, CardBody, CardFooter, Typography } from '@shadcn/ui';

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
        // Add your signin logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-sm">
                <CardHeader className="bg-blue-500 text-white">
                    <Typography variant="h5">Sign In</Typography>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                            <Input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Enter your email"
                                className="mt-1 block w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                            <Input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="Enter your password"
                                className="mt-1 block w-full"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white">
                            Sign In
                        </Button>
                    </form>
                </CardBody>
                <CardFooter className="text-center">
                    <Typography variant="body2" className="text-gray-500">
                        Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SigninPage;
