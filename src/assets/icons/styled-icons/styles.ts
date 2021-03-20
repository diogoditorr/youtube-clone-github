import styled, { css } from 'styled-components';

import { ReactComponent as OcticonBook } from '../OcticonBook.svg';
import { ReactComponent as OcticonCode } from '../OcticonCode.svg';
import { ReactComponent as OcticonEye } from '../OcticonEye.svg';
import { ReactComponent as OcticonGear } from '../OcticonGear.svg';
import { ReactComponent as OcticonGitPullRequest } from '../OcticonGitPullRequest.svg';
import { ReactComponent as OcticonGraph } from '../OcticonGraph.svg';
import { ReactComponent as OcticonIssueOpened } from '../OcticonIssueOpened.svg';
import { ReactComponent as OcticonLaw } from '../OcticonLaw.svg';
import { ReactComponent as OcticonPlay } from '../OcticonPlay.svg';
import { ReactComponent as OcticonProject } from '../OcticonProject.svg';
import { ReactComponent as OcticonShield } from '../OcticonShield.svg';
import { ReactComponent as OcticonGitBranch } from '../OcticonGitBranch.svg';
import { ReactComponent as OcticonHistory } from '../OcticonHistory.svg';
import { ReactComponent as OcticonFile } from '../OcticonFile.svg';
import { ReactComponent as OcticonFileDirectory } from '../OcticonFileDirectory.svg';
import { ReactComponent as OcticonDownload } from '../OcticonDownload.svg';
import { ReactComponent as OcticonFork } from '../OcticonFork.svg';
import { ReactComponent as CaretDown } from '../CaretDown.svg';


const iconCSS = css`
    width: 16px;
    height: 16px;
    fill: var(--icon);
    /* fill: currentColor; */
    flex-shrink: 0;
`;

export const OcticonBookIcon = styled(OcticonBook)`${iconCSS}`;
export const OcticonCodeIcon = styled(OcticonCode)`${iconCSS}`;
export const OcticonEyeIcon = styled(OcticonEye)`${iconCSS}`;
export const OcticonGearIcon = styled(OcticonGear)`${iconCSS}`;
export const OcticonGitPullRequestIcon = styled(OcticonGitPullRequest)`${iconCSS}`;
export const OcticonGraphIcon = styled(OcticonGraph)`${iconCSS}`;
export const OcticonIssueOpenedIcon = styled(OcticonIssueOpened)`${iconCSS}`;
export const OcticonLawIcon = styled(OcticonLaw)`${iconCSS}`;
export const OcticonPlayIcon = styled(OcticonPlay)`${iconCSS}`;
export const OcticonProjectIcon = styled(OcticonProject)`${iconCSS}`;
export const OcticonShieldIcon = styled(OcticonShield)`${iconCSS}`;
export const OcticonGitBranchIcon = styled(OcticonGitBranch)`${iconCSS}`;
export const OcticonHistoryIcon = styled(OcticonHistory)`${iconCSS}`
export const OcticonFileIcon = styled(OcticonFile)`${iconCSS}`;
export const OcticonFileDirectoryIcon = styled(OcticonFileDirectory)`${iconCSS}`;
export const OcticonDownloadIcon = styled(OcticonDownload)`${iconCSS}`;
export const OcticonForkIcon = styled(OcticonFork)`${iconCSS}`;
export const CaretDownIcon = styled(CaretDown)`${iconCSS}
    width: 8px;
    height: 4px;
`;