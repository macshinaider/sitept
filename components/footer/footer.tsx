"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface GithubUser {
    name: string;
    bio: string;
    avatar_url: string;
    html_url: string;
}

const Footer: React.FC = () => {
    const [githubUser, setGithubUser] = useState<GithubUser | null>(null);

    useEffect(() => {
        axios.get('https://api.github.com/users/macshinaider')
            .then(response => {
                setGithubUser(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do GitHub', error);
            });
    }, []);

    return (
        <footer className="p-4 bg-black text-white rounded">
            {githubUser ? (
                <div className="flex items-center justify-center space-x-4">
                    <img className="w-16 h-16 rounded-full" src={githubUser.avatar_url} alt={githubUser.name} />
                    <div>
                        <h2 className="text-xl font-bold">{githubUser.name}</h2>
                        <p>{githubUser.bio}</p>
                        <a className="text-blue-200 hover:underline" href={githubUser.html_url}>Ver no GitHub</a>
                    </div>
                </div>
            ) : (
                <p>Carregando dados do GitHub...</p>
            )}
        </footer>
    );
};

export default Footer;
