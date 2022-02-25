import { WrapperComponentProps } from '../../higherOrderComponent/withTrackClick/interface';

export interface ProfileOwnProps {
    ownerName: string;
}

export type ProfileProps = ProfileOwnProps & WrapperComponentProps;
