export interface UsersOwnProps {
    ownerName: string;
}

export interface UsersStateProps {
    users: string[];
}

export interface UsersDispatchProps {
    addUsers(users: string[]): any;
}

export type UsersProps = UsersOwnProps & UsersStateProps & UsersDispatchProps;
