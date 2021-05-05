import React, {FC} from 'react';
import { Workspaces } from './Workspaces/Workspaces';
import { LatestPublications } from './LatestPublications/LatestPublications';
import { ResumeWork } from './ResumeWork/ResumeWork';


export const HomePage: FC = () => {
    return(
        <div>
            <LatestPublications />
            <Workspaces />
            <ResumeWork />
        </div>
    );
};