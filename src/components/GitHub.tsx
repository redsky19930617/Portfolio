import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { SectionTitle } from './ui/SectionTitle';

interface Repo {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string;
    html_url: string;
}

export function GitHub() {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/decodewithdeepak/repos?sort=pushed&direction=desc&per_page=3')
            .then((response) => response.json())
            .then((data) =>
                setRepos(
                    data.map((repo: any) => ({
                        name: repo.name,
                        description: repo.description,
                        stars: repo.stargazers_count,
                        forks: repo.forks_count,
                        language: repo.language,
                        html_url: repo.html_url,
                    }))
                )
            );
    }, []);

    return (
        <section id="github" className="py-20">
            <div className="container mx-auto max-w-6xl px-8">
                <SectionTitle>GitHub Contributions</SectionTitle>

                {/* Contribution Graph */}
                <div className="mb-12 flex flex-col items-center">
                    {/* Card-like container for the GitHub calendar */}
                    <div className="w-full p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
                        <GitHubCalendar
                            username="decodewithdeepak"
                            blockSize={14.7}
                            blockMargin={5}
                            colorScheme="light"
                            theme={{
                                light: ["#afb8c2", "#60a5fa", "#1a53e6", "#1c3dff", "#1c3dff"]
                            }}
                        />
                    </div>

                    <p className="mt-6 text-lg text-center text-gray-600 dark:text-gray-300 max-w-3xl">
                        My GitHub contributions reflect my consistent commitment to open-source development
                        and personal projects. Explore my repositories to learn more about the projects I've worked on
                        and the skills I bring to the table.
                    </p>
                </div>

                {/* Top Repositories */}
                <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {repos.map((repo) => (
                        <a
                            key={repo.name}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-6 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
                        >
                            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                                {repo.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                                {repo.description}
                            </p>
                            <div className="mt-4 flex items-center justify-between text-gray-500">
                                <span>{repo.language}</span>
                                <div className="flex space-x-4">
                                    <span>⭐ {repo.stars}</span>
                                    <span>🍴 {repo.forks}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
