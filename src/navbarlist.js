import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'Dashboard',
        route: 'dashboard',
    },
    {
        id: 1,
        icon: <DnsIcon />,
        label: 'Ward',
        route: 'ward',
    },
    {
        id: 2,
        icon: <ImageIcon />,
        label: 'Clinic',
        route: 'clinic',
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: 'Clinic',
        route: 'clinic',
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon />,
        label: 'Endoscopy',
        route: 'endoscopy',
    },
    {
        id: 5,
        icon: <SettingsInputComponentIcon />,
        label: 'Logout',
        route: 'Logout',
    },
]