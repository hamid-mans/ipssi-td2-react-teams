import React, { createContext, type JSX, type ReactNode, useContext, useState } from 'react';

type Member = {
    id: number;
    name: string;
    email: string;
};

type Team = {
    id: number;
    title: string;
    body: string;
    assignedMemberIds: number[];
};

interface TeamsContextType {
    allTeams: Team[];
    paginatedTeams: Team[];
    allMembers: Member[];
    fetchTeams: () => Promise<void>;
    fetchMembers: () => Promise<void>;
    assignMemberToTeam: (teamId: number, memberId: number) => void;
    removeMemberFromTeam: (teamId: number, memberId: number) => void;
    setSortBy: (key: keyof Team) => void;
    setCurrentPage: (page: number) => void;
    pageSize: number;
    totalPages: number;
    currentPage: number;
}

type TeamsProviderProps = {
    children: ReactNode;
};

const TeamsContext = createContext<TeamsContextType | undefined>(undefined);

export const TeamsProvider = ({ children }: TeamsProviderProps): JSX.Element => {
    const [allTeams, setAllTeams] = useState<Team[]>([]);
    const [allMembers, setAllMembers] = useState<Member[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 5;

    const totalPages = Math.ceil(allTeams.length / pageSize);
    const paginatedTeams = allTeams.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const fetchTeams = async () => {
        // Implémentez la logique pour récupérer les équipes ici
    };

    const fetchMembers = async () => {
        // Implémentez la logique pour récupérer les membres ici
    };

    const assignMemberToTeam = (teamId: number, memberId: number) => {
        // Implémentez la logique pour assigner un membre à une équipe ici
    };

    const removeMemberFromTeam = (teamId: number, memberId: number) => {
        // Implémentez la logique pour retirer un membre d'une équipe ici
    };

    const setSortBy = (key: keyof Team) => {
        // Implémentez la logique pour trier les équipes ici
    };

    return (
        <TeamsContext.Provider
            value={{
        allTeams,
            paginatedTeams,
            allMembers,
            fetchTeams,
            fetchMembers,
            assignMemberToTeam,
            removeMemberFromTeam,
            setSortBy,
            setCurrentPage,
            pageSize,
            totalPages,
            currentPage,
    }}
>
    {children}
    </TeamsContext.Provider>
);
};
